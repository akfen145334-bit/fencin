import { Unit, SubTopic } from '../types/curriculum';
import {
  WeeklyCurriculumItem,
  academicWeeksCalendar,
  allGradeSchedules,
  getCurrentAcademicWeek as baseGetCurrentAcademicWeek
} from '../data/annualCurriculumSchedule';

export interface ResolvedWeeklyTopic {
  grade: number;
  weekNumber: number;
  scheduleItem: WeeklyCurriculumItem;
  unit: Unit;
  subTopic: SubTopic;
  isCurrentCalendarWeek: boolean;
  calendarInfo: typeof academicWeeksCalendar[0];
}

/**
 * Get current academic week based on today's date
 */
export function getCurrentCalendarWeek(): number {
  return baseGetCurrentAcademicWeek(new Date());
}

/**
 * Get metadata for a specific week number (1 - 37)
 */
export function getCalendarWeekInfo(weekNumber: number) {
  const boundedWeek = Math.max(1, Math.min(37, weekNumber));
  return academicWeeksCalendar.find(w => w.week === boundedWeek) || academicWeeksCalendar[0];
}

/**
 * Resolves the curriculum target (Unit + SubTopic) for a given grade and week
 */
export function resolveWeeklyTopic(
  grade: number,
  weekNumber: number,
  units: Unit[]
): ResolvedWeeklyTopic | null {
  const boundedWeek = Math.max(1, Math.min(37, weekNumber));
  const currentCalWeek = getCurrentCalendarWeek();
  const schedule = allGradeSchedules[grade] || allGradeSchedules[5];
  
  const scheduleItem = schedule.find(item => item.weekNumber === boundedWeek) || schedule[0];
  if (!scheduleItem) return null;

  const gradeUnits = units.filter(u => (u.grade || 5) === grade);
  
  // Find matching unit by id or fallback to matching unit number
  let targetUnit = gradeUnits.find(u => u.id === scheduleItem.unitId);
  if (!targetUnit) {
    targetUnit = gradeUnits[scheduleItem.unitNumber - 1] || gradeUnits[0];
  }
  if (!targetUnit) return null;

  // Find matching subtopic
  let targetSubTopic: SubTopic | undefined;
  if (scheduleItem.subTopicId) {
    targetSubTopic = targetUnit.subTopics.find(s => s.id === scheduleItem.subTopicId);
  }

  // Fallback to title substring match or first subtopic
  if (!targetSubTopic) {
    const cleanTopicTitle = scheduleItem.topicTitle.toLowerCase();
    targetSubTopic = targetUnit.subTopics.find(s => {
      const sTitle = s.title.toLowerCase();
      return cleanTopicTitle.includes(sTitle) || sTitle.includes(cleanTopicTitle.slice(0, 8));
    }) || targetUnit.subTopics[0];
  }

  const calendarInfo = getCalendarWeekInfo(boundedWeek);

  return {
    grade,
    weekNumber: boundedWeek,
    scheduleItem,
    unit: targetUnit,
    subTopic: targetSubTopic,
    isCurrentCalendarWeek: boundedWeek === currentCalWeek,
    calendarInfo
  };
}

/**
 * List all weeks with brief summary for quick selector
 */
export function getWeeklyScheduleSummary(grade: number, units: Unit[]) {
  const schedule = allGradeSchedules[grade] || allGradeSchedules[5];
  const currentCalWeek = getCurrentCalendarWeek();

  return schedule.map(item => {
    const calendarInfo = getCalendarWeekInfo(item.weekNumber);
    const resolved = resolveWeeklyTopic(grade, item.weekNumber, units);
    return {
      weekNumber: item.weekNumber,
      dateRange: item.dateRange,
      month: item.month,
      topicTitle: item.topicTitle,
      unitTitle: item.unitTitle,
      unitNumber: item.unitNumber,
      learningOutcomes: item.learningOutcomes,
      specialDays: item.specialDays || calendarInfo.special,
      hoursPerWeek: item.hoursPerWeek,
      isCurrent: item.weekNumber === currentCalWeek,
      unitId: resolved?.unit.id,
      subTopicId: resolved?.subTopic.id
    };
  });
}
