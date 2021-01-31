import { ReactComponent as Arrow } from "../../assets/↗.svg";
import PropTypes from "prop-types";

export const Links = ({ titleName = "Dribble", hasTitleColor, url }) => {
  return (
    <div className="links__container space-social-content-Y">
      <a href={url} target="_blank" rel="noreferrer">
        <h2
          className={`links__container__title 
            ${hasTitleColor && "title__color__gray"}`}
        >
          {titleName}
        </h2>
        <Arrow
          className={` arrow__color ${hasTitleColor && "arrow__color__gray"}`}
        />
      </a>
    </div>
  );
};
Links.propTypes = {
  titleName: PropTypes.string,
  hasTitleColor: PropTypes.bool,
  url: PropTypes.string,
};
