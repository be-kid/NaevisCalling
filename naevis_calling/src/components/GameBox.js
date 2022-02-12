import { Link } from "react-router-dom";

function GameBox({ currentPath, img, title }) {
  return (
    <div>
      <Link to={`${currentPath}/${title}`}>
        <div className="project">
          <img src={img} alt={title}></img>
          <div>{title}</div>
        </div>
      </Link>
    </div>
  );
}

export default GameBox;
