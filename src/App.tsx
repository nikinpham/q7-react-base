import { QButton } from "@/components";
import {
  Header,
  BButton,
  Input,
  BDropdown,
  ProductCard,
  ProductList,
} from "@/components";
import { useState } from "react";

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 19.99,
      description: "Product description1",
      imageUrl:
        "https://product.hstatic.net/1000281824/product/nta101_ij3248nz-1-uke4-hinh_mat_truoc-0_81b18bfc8b9649d9a23182e7ffaadd83_master.jpeg",
    },
    {
      id: 2,
      name: "Product 2",
      price: 29.99,
      description: "Product description2",
      imageUrl:
        "https://product.hstatic.net/1000281824/product/c95a6a6aba924c6287e4a9ba29d8f3f3_6b44e496caaf424fbfaaddd522817041.jpeg",
    },
    {
      id: 3,
      name: "Product 3",
      price: 39.99,
      description: "Product description3",
      imageUrl:
        "https://product.hstatic.net/1000281824/product/nta101_0udgqmi7-1-vjse-hinh_mat_truoc-0_5b1cfccd5652454a910d7c0ac02f8470.jpeg",
    },
    {
      id: 4,
      name: "Product 4",
      price: 49.99,
      description: "Product description4",
      imageUrl:
        "https://product.hstatic.net/1000281824/product/eaf50108-ced4-46dd-83ac-d33ae0a3500f_9663b92124c743b1b836cf483a42a76d.jpeg",
    },
  ];
  const productData = {
    id: 1,
    name: "Product Name",
    price: 19.99,
    description: "Product description goes here.",
    imageUrl:
      "https://product.hstatic.net/1000281824/product/nta101_ij3248nz-1-uke4-hinh_mat_truoc-0_81b18bfc8b9649d9a23182e7ffaadd83_master.jpeg",
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleButtonClick = () => {
    console.log("Button clicked!");
  };
  const handleDropdownSelect = (selectedOption: string) => {
    console.log(`Selected option: ${selectedOption}`);
  };
  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="">
      <h1 className=" text-3xl font-bold underline text-center">
        Hello world!
      </h1>

      <Header />
      <div className="">
        <div className="flex justify-center">
          <div>
            <Input
              label="Name"
              type="text"
              name="exampleInput"
              value={inputValue}
              handleChange={handleChange}
            />
          </div>
          <div className="grid content-center ml-2">
            <BButton
              children={"submit"}
              type={"submit"}
              onClick={handleButtonClick}
              inverted={true}
            />
          </div>
        </div>
      </div>
      <BDropdown
        options={options}
        onSelect={handleDropdownSelect}
        children={"Open"}
      />
      <div>
        <ProductCard {...productData} />
      </div>
      <div>
        <ProductList products={products} />
      </div>

      <QButton />
    </div>
  );
};

export default App;
