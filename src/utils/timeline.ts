import { formatDate } from './date';

// conta inclusiva: o mês de início e o mês final entram na soma
const calculateDateDifference = (startDate: Date, endDate: Date) => {
  const totalMonths =
    (endDate.getFullYear() - startDate.getFullYear()) * 12 +
    (endDate.getMonth() - startDate.getMonth()) +
    1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const yearText = years === 1 ? 'ano' : 'anos';
  const monthText = months === 1 ? 'mês' : 'meses';

  if (years > 0 && months > 0) {
    return `${years} ${yearText} e ${months} ${monthText}`;
  } else if (years > 0) {
    return `${years} ${yearText}`;
  } else {
    return `${months} ${monthText}`;
  }
};

export const formatDateRange = (start: Date, end: Date | null): string => {
  const rangeDiff = calculateDateDifference(start, end || new Date());
  if (!end) return `${formatDate(start)} - Presente (${rangeDiff})`;

  return `${formatDate(start)} - ${formatDate(end)} (${rangeDiff})`;
};
