export type TimelineItem = {
  title: string;
  date: {
    start: Date;
    end: Date | null; // null indica que ainda está ativo
  };
  description: string; // aceita HTML
};

