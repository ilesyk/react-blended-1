import { IconContext } from 'react-icons';
import {
  StatisticBox,
  StatisticText,
  StatisticCounter,
} from './StatisticItem.styled';

export const StatisticItem = ({ title, total, icon: Icon }) => {
  return (
    <StatisticBox>
      <IconContext.Provider value={{ color: 'green', size: '2em' }}>
        {Icon}
      </IconContext.Provider>
      <StatisticCounter>{total}</StatisticCounter>
      <StatisticText>{title}</StatisticText>
    </StatisticBox>
  );
};
