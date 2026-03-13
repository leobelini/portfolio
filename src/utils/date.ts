export const formatDate = (date: Date) => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'short',
  };
  return date.toLocaleDateString('pt-BR', options);
};

interface DateRange {
  start?: string;
  end?: string;
}

export const formatEducationDate = (date: DateRange | null): string => {
  if (!date) {
    return '';
  }

  const startYear = date.start ? new Date(date.start).getFullYear().toString() : null;
  const endYear = date.end ? new Date(date.end).getFullYear().toString() : null;

  if (startYear && endYear) {
    return `${startYear} - ${endYear}`;
  }

  if (startYear) {
    return startYear;
  }

  return '';
}
