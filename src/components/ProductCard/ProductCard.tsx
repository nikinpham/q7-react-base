import BButton from "../BButton/index";
import "./ProductCard.scss";

type ProductCardProps = {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
};

const ProductCard = (props: ProductCardProps) => {
  const handleAddToCard = () => {
    console.log(`Product ${props.id} have added to card`);
  };
  return (
    <div className="product-card">
      <img src={props.image} alt={props.title} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">
          {props.title.length > 20
            ? `${props.title.substring(0, 20)}...`
            : props.title}
        </h3>
        <p className="product-description">
          {props.description.length > 100
            ? `${props.description.substring(0, 100)}...`
            : props.description}
        </p>
        <p className="product-price">${props.price}</p>
        <div className="flex items-center justify-center mt-5">
          <BButton children={"Add"} onClick={handleAddToCard}></BButton>
        </div>
      </div>
    </div>
  );
};
export default ProductCard;
