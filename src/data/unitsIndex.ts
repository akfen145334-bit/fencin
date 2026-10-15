import { Unit } from '../types/curriculum';
import { grade5Unit4Data } from './grade5Unit4Data';
import { grade5Unit5Data } from './grade5Unit5Data';
import { grade5Unit6Data } from './grade5Unit6Data';
import { grade5Unit7Data } from './grade5Unit7Data';
import { grade6Units } from './grade6/grade6Index';
import { grade7Units } from './grade7/grade7Index';
import { grade8Units } from './grade8/grade8Index';

export const grade5Units: Unit[] = [
  grade5Unit4Data,
  grade5Unit5Data,
  grade5Unit6Data,
  grade5Unit7Data
];

export const allUnits: Unit[] = [
  ...grade5Units,
  ...grade6Units,
  ...grade7Units,
  ...grade8Units
];

export const availableGrades = [
  { grade: 5, label: '5. Sınıf' },
  { grade: 6, label: '6. Sınıf' },
  { grade: 7, label: '7. Sınıf' },
  { grade: 8, label: '8. Sınıf' }
];

export {
  grade8Units,
  grade7Units,
  grade6Units
};
