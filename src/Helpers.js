import { formatDistanceToNow } from 'date-fns';
import { format } from 'date-fns';

export const formatDate = date => {
  return format(new Date(date), 'Pp');
};

export const formatDateToNow = date => {
  return formatDistanceToNow(new Date(date), { addSuffix: true });
};
