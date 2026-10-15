/**
 * Quality engine for formatting and balancing question answers in PDF exports and quizzes.
 */

export function sanitizeOptionText(text: string): string {
  if (!text) return '';
  // Clean leading option prefix if duplicate like "A) ", "(A) ", "A - "
  return text
    .replace(/^([A-D]\s*[\)\.\-:]\s*|\([A-D]\)\s*)/i, '')
    .trim();
}

export function balanceQuestionBankAnswers<T extends { options?: { key: string; text: string }[]; correctAnswer?: string; explanation?: string }>(
  questions: T[],
  seed = 42
): T[] {
  if (!questions || questions.length === 0) return [];
  
  // Return questions with consistent keys A, B, C, D
  return questions.map(q => {
    if (!q.options || q.options.length !== 4) return q;
    return {
      ...q,
      options: q.options.map((opt, idx) => ({
        ...opt,
        key: ['A', 'B', 'C', 'D'][idx],
        text: sanitizeOptionText(opt.text)
      }))
    };
  });
}
