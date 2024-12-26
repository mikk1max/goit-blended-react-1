import { format } from 'date-fns/format';
import { formatDistanceToNow } from 'date-fns/formatDistanceToNow';

export const formatDistanceToNowToWords = postedAt => {
  return formatDistanceToNow(postedAt, { addSuffix: true });
};

export const formatDateToDateAndTime = date => {
  return format(date, 'Pp');
};
