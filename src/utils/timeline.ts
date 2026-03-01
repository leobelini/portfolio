import { formatDate } from './date';

const calculateDateDifference = (startDate: Date, endDate: Date) => {
  let years = endDate.getFullYear() - startDate.getFullYear();
  let months = endDate.getMonth() - startDate.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  if (endDate.getDate() < startDate.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  const yearText = years === 1 ? 'ano' : 'anos';
  const monthText = months === 1 || months === 0 ? 'mês' : 'meses';

  if (years > 0 && months > 0) {
    return `${years} ${yearText} e ${months} ${monthText}`;
  } else if (years > 0) {
    return `${years} ${yearText}`;
  } else {
    return `${months || 1} ${monthText}`;
  }
};

export const formatDateRange = (start: Date, end: Date | null): string => {
  const rangeDiff = calculateDateDifference(start, end || new Date());
  if (!end) return `${formatDate(start)} - Presente (${rangeDiff})`;

  return `${formatDate(start)} - ${formatDate(end)} (${rangeDiff})`;
};
