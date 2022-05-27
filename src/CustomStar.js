import { FaStar } from "react-icons/fa";
import * as React from "react";

export const CustomStar = () => {
  const [rating, setRating] = React.useState(null);
  const [hover, setHover] = React.useState(null);

  return (
    <>
      <div>
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label>
              <input
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => setRating(ratingValue)}
              />
              <FaStar
                className="star"
                color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                size={100}
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={()=> setHover(null)}
              />
            </label>
          );
        })}
        <h3>The rating is {rating}</h3>
      </div>
    </>
  );
};
