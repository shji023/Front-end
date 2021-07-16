import dayjs from 'dayjs';

export const changeDateFormat = (date: Date | string): string => {
  return dayjs(date).format('YYYY. MM. DD');
};
