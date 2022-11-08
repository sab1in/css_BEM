const PlayListItem = ({ playing }) => {
  return (
    <div className={`playListItem ${playing && "playListItem--playing"}`}>
      <div className="playListItem__thumbnil"></div>
      <div className="playListItem__title">Sabin first tutorial on React js</div>
    </div>
  );
};

export default PlayListItem;
