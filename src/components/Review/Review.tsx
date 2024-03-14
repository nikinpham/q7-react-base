import { Star } from "lucide-react";
type TReview = {
  star: number;
  onstarChange: (star: number) => void;
};
const Review = (props: TReview) => {
  return (
    <div>
      <div>
        {[...Array(5)].map((_, index) => (
          <ul className="flex inline-flex items-center mb-2">
            <li>
              <Star
                size={18}
                key={index}
                className={`cursor-pointer ${
                  index < props.star ? "text-yellow-500" : "text-gray-400"
                }`}
                onClick={() => props.onstarChange(index + 1)}
                style={{
                  fill: "currentColor",
                }}
              ></Star>
            </li>
          </ul>
        ))}
      </div>
    </div>
  );
};
export default Review;
