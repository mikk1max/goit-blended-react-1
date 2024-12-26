import ForbesListItem from '../ForbesListItem/ForbesListItem';
import style from './ForbesList.module.css';

const ForbesList = ({ list }) => {
  return (
    <div className={style.board}>
      <div className={style.header}>
        <h2 className={style.title}>
          <span className={style.titleTop}>Forbes</span>
          <span className={style.titleBottom}>Leaderboard</span>
        </h2>
      </div>

      <ul className={style.list}>
        {list.map(item => (
          <li key={list.id} className={style.item}>
            <ForbesListItem
              avatar={item.avatar}
              name={item.name}
              capital={item.capital}
              isIncrease={item.isIncrease}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ForbesList;
