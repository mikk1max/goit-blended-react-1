import { IconContext } from 'react-icons';
import style from './StatisticsItem.module.css';

const StatisticsItem = ({ stats, icon }) => {
  return (
    <>
      <IconContext.Provider value={{ size: '30px' }}>
        {icon}
      </IconContext.Provider>
      <span className={style.counter}>{stats.total}</span>
      <p className={style.text}>{stats.title}</p>
    </>
  );
};

export default StatisticsItem;
