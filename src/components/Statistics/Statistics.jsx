import { FaRegThumbsUp } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';
import StatisticsItem from '../StatisticsItem/StatisticsItem';
import style from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
  const icons = [
    <FaRegThumbsUp key={stats.id} />,
    <MdPeople key={stats.id} />,
    <MdOutlineProductionQuantityLimits key={stats.id} />,
    <GiTreeDoor key={stats.id} />,
  ];

  return (
    <>
      <h3 className={style.title}>{title}</h3>
      <ul className={style.list}>
        {stats.map((stat, index) => (
          <li key={stat.id} className={style.item}>
            <StatisticsItem stats={stat} icon={icons[index]} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Statistics;
