import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const NewsCard = ({ aNews }) => {
  const { image_url, details, title, _id } = aNews;

  return (
    <div className="space-y-4 mb-10 border border-black p-4 rounded-lg">
      <img src={image_url} alt="" />
      <p className="text-lg font-bold">{title}</p>
      <p className="text-justify">
        {details.length>200? <span>{details.slice(0,200)} <Link to={`news/${_id}`} className="text-orange-600 font-bold"> read more..</Link></span>:<span>{details}</span>}
      </p>
    </div>
  );
};

NewsCard.propTypes = {
  aNews: PropTypes.object,
};

export default NewsCard;
