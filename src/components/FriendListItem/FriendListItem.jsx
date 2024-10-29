import s from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <h2>{name}</h2>
      <p className={isOnline ? s.online : s.offline}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </div>
  );
};

export default FriendListItem;
