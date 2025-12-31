import { FaStar, FaEye } from "react-icons/fa";
import { IoBookmarkOutline, IoShareSocialOutline  } from "react-icons/io5";
import { NavLink } from "react-router";
const NewsCard = ({ news }) => {
  const {
    title,
    rating,
    total_view,
    author,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card bg-base-100 shadow-lg mb-8 border-0">
      {/* Author Section */}
      <div className="flex justify-between items-center bg-[#F3F3F3]">
        <div className="flex items-center gap-3 p-4">
            <img
                src={author.img}
                alt={author.name}
                className="w-10 h-10 rounded-full"
            />
            <div>
                <h4 className="font-semibold">{author.name}</h4>
                <p className="text-sm text-gray-500">
                    {new Date(author.published_date).toDateString()}
                </p>
            </div>
        </div>

        <div className="flex gap-2 p-4">
            <p><IoBookmarkOutline size={24}/></p>
            <p><IoShareSocialOutline size={24}/></p>
        </div>
      </div>

      {/* Thumbnail */}
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-56 object-cover"
        />
      </figure>

      {/* Content */}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="text-gray-600">
          {details.length > 180
            ? details.slice(0, 180) + "..."
            : details}
            <br></br>
            <NavLink>Read more</NavLink>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline text-xs"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="flex justify-between items-center mt-4">
          {/* Rating */}
          <div className="flex items-center gap-1 text-orange-500">
            {[...Array(rating.number)].map((_, i) => (
              <FaStar key={i} />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {rating.badge}
            </span>
          </div>

          {/* Views */}
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
