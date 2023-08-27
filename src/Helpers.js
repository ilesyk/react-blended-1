import { formatDistanceToNow } from 'date-fns';

// formatDistanceToNow(new Date(2014, 6, 2), { addSuffix: true });

export const formatDateToNow = (date)=>{return formatDistanceToNow(new Date(date), { addSuffix: true });}