import "./ProductCard.scss";
import { Heart, Star } from "lucide-react";
import { SquarePlus } from "@/assets/svg";
import { Link } from "react-router-dom";

type ProductCardProps = {
  id: string;
  title: string;
  price: string;
  offer: string;
  description?: string;
  image: string;
  badge: string;
  heart: boolean;
  onClick?: () => void;
};

const ProductCard = (props: ProductCardProps) => {
  const handleAddToCard = () => {
    console.log(`Product ${props.id} have added to card`);
  };
  return (
    <div className={"card"} key={props.id}>
      <div className="card-header border-0 pr-4 h-8 ">
        <span
          className={`text-white   rounded-tl-md rounded-br-md text-sm font-normal h-6 -left-0.25 absolute -top-0.125 w-12.5 border-solid px-5 ${
            props.badge === "badge-warning"
              ? "bg-orange-400 border-orange-400"
              : "bg-red-400"
          }`}
        >
          {props.offer}
        </span>
        <div className="mt-4 mr-3.5 absolute right-0 top-0">
          <Heart
            size={17.5}
            className={`cursor-pointer ${
              props.heart ? "text-red-500" : "text-gray-500"
            }`}
            style={{
              fill: "currentColor",
            }}
            onClick={props.onClick}
          />
        </div>
      </div>
      <div className=" text-center  flex items-center justify-center p-0 ">
        <img src={props.image} alt="" className="h-[7.063rem] w-43" />
      </div>
      <div className="card-footer border-0 px-3.5 py-4">
        <ul className="flex align-items-center mb-2">
          <li>
            <Star
              size={18}
              className="cursor-pointer text-gray-500 "
              style={{
                fill: "currentColor",
              }}
            ></Star>
          </li>
        </ul>
        <div className="common flex  items-end	 justify-between">
          <div className="grow">
            <Link to={"#"}>
              <h4 className="font-semibold leading-1.5">{props.title}</h4>
            </Link>
            <h3 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-orange-500 ">
              {props.price}
            </h3>
          </div>
          <div className="" onClick={() => handleAddToCard}>
            <Link to={"#"}>
              <SquarePlus></SquarePlus>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
