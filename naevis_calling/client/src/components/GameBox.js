import { Link } from "react-router-dom";

function GameBox({ currentPath, img, title }) {
  return (
    <Link to={`${currentPath}/${title}`}>
      <div className="project">
        <img src={img} alt={title}></img>
        <div>{title}</div>
      </div>
    </Link>
  );
}

export default GameBox;
