// import { useState, useEffect } from "react";
// import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, Heart } from "lucide-react";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "swiper/scss";
import "./Home.scss";
import { Autoplay, Pagination } from "swiper/modules";
import { Bakery, Beverage, Burger, Chicken, Pizza } from "@/assets/svg";
import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  ReactPortal,
  Key,
} from "react";
const Home = () => {
  // const [inputValue, setInputValue] = useState("");
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios.get("https://fakestoreapi.com/products");
  //       console.log(response.data);
  //       setProducts(response.data);
  //     } catch (error) {
  //       console.error("Error fetching products:", error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);
  //Banner
  const sliderBanner = [
    {
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.ccf464248c38e8f0cca0.jpg",
    },
    {
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.a3a5f4d03926cf53a16d.jpg",
    },
    {
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-4.3bf12b6c16e4ffe32cec.jpg",
    },
  ];
  const sliderCategory = [
    {
      icon: <Bakery></Bakery>,
      to: "#",
      name: "Bakery",
    },
    {
      icon: <Burger></Burger>,
      to: "#",
      name: "Burger",
    },
    {
      icon: <Beverage></Beverage>,
      to: "#",
      name: "Beverage",
    },
    {
      icon: <Chicken></Chicken>,
      to: "#",
      name: "Chicken",
    },
    {
      icon: <Pizza></Pizza>,
      to: "#",
      name: "Pizza",
    },
  ];
  const sliderData = [
    {
      id: "1",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
      title: "Fish burger",
      offer: "15% Off",
      badge: "badge-danger",
      price: "$5.59",
      heart: false,
      check: false,
    },
    {
      id: "2",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.dcae5a9123531ef55436.jpg",
      title: "Beef burger",
      offer: "Exclusive",
      changeClass: "exclusive",
      badge: "badge-warning",

      price: "$5.59",
      heart: true,
      check: false,
    },
    {
      id: "3",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.b5b23dc087a14533c898.jpg",
      title: "Cheese burger",
      offer: "15% Off",
      badge: "badge-danger",
      price: "$5.59",
      heart: false,
      check: false,
    },
    {
      id: "4",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
      title: "Panner burger",
      offer: "15% Off",
      badge: "badge-danger",
      price: "$5.59",
      heart: false,
      check: false,
    },
    {
      id: "5",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.dcae5a9123531ef55436.jpg",
      title: "Tandoori burger",
      offer: "Exclusive",
      changeClass: "exclusive",
      badge: "badge-warning",
      price: "$5.59",
      heart: true,
      check: false,
    },
    {
      id: "6",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.b5b23dc087a14533c898.jpg",
      title: "Cheese burger",
      offer: "15% Off",
      badge: "badge-danger",
      price: "$5.59",
      heart: false,
      check: false,
    },
  ];

  const [dataheart, setDataheart] = useState(sliderData);

  const handleClickFavorite = (type: string, id: string | number): void => {
    let temp = dataheart.map((data) => {
      if (id === data.id) {
        if (type === "heart") {
          return { ...data, heart: !data.heart };
        } else if (type === "check") {
          return { ...data, check: !data.check };
        }
      }
      return data;
    });
    setDataheart(temp);
  };
  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValue(event.target.value);
  // };
  // const handleButtonClick = () => {
  //   console.log("Button clicked!");
  // };
  // const handleDropdownSelect = (selectedOption: string) => {
  //   console.log(`Selected option: ${selectedOption}`);
  // };
  // const options = ["Option 1", "Option 2", "Option 3"];
  return (
    <div className="grid grid-cols-12 flex flex-wrap -mx-4 mt-[35px]">
      <div className="   col-span-12 md:col-span-12 xl:col-span-8 2xl:col-span-7 px-3.5 xl:order-1">
        <div className="grid grid-cols-12 -mx-4">
          <div className="col-span-12 px-4 ">
            <div className="position-relative ">
              <div className="swiper-pagination-banner"></div>
              <Swiper
                className="mySwiper-1 rounded-lg"
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                  el: ".swiper-pagination-banner",
                  clickable: true,
                }}
                autoplay={{
                  delay: 3000,
                }}
                modules={[Autoplay, Pagination]}
              >
                {sliderBanner.map((data, id) => (
                  <SwiperSlide key={id}>
                    <div className="banner ">
                      <img src={data.image} alt="" />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="col-span-12 px-4">
            <div className="flex items-center justify-between mb-2 mt-4 gap-x-4">
              <h4 className="mb-0 text-lg font-semibold">Category</h4>
              <a
                className=" flex text-primary text-orange-400 items-center justify-between"
                href="/react/demo/favorite-menu"
                style={{ fontSize: "14px" }}
              >
                View all
                <ChevronRight className="ml-2 " size={13} strokeWidth={3} />
              </a>
            </div>
            <Swiper
              className="mySwiper-2"
              speed={1500}
              slidesPerView={5}
              spaceBetween={20}
              //loop={true}
              autoplay={{
                delay: 1500,
              }}
              modules={[Autoplay]}
              breakpoints={{
                360: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                800: {
                  slidesPerView: 4,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1920: {
                  slidesPerView: 5,
                  spaceBetween: 20,
                },
              }}
            >
              {sliderCategory.map((data, id) => (
                <SwiperSlide key={id}>
                  <div className="cate-bx text-center">
                    <div className="card flex flex-col">
                      <div className="card-body flex flex-col items-center">
                        {data.icon}
                        <Link to={data.to}>
                          <h6 className="mb-0 font-w500 mt-3">{data.name}</h6>
                        </Link>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-12 px-4">
            <div className="flex items-center justify-between mb-2 mt-4 gap-x-4">
              <h4 className="mb-0 text-lg font-semibold">Popular Dishes</h4>
              <a
                className=" flex text-primary text-orange-400 items-center justify-between"
                href="/react/demo/favorite-menu"
                style={{ fontSize: "14px" }}
              >
                View all
                <ChevronRight className="ml-2 " size={13} strokeWidth={3} />
              </a>
            </div>
            <Swiper
              className="mySwiper-3"
              speed={1500}
              slidesPerView={3}
              spaceBetween={30}
              //loop={true}
              autoplay={{
                delay: 2000,
              }}
              modules={[Autoplay]}
              breakpoints={{
                360: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                600: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1200: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1400: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
            >
              {dataheart.map((data, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`card  ${data.changeClass} ${
                      data.badge === "badge-warning" ? " border-orange-400" : ""
                    }`}
                    key={index}
                  >
                    <div className="card-header border-0 pr-4">
                      <span
                        className={`text-white   rounded-tl-md rounded-br-md text-sm font-normal h-6 -left-0.25 absolute -top-0.125 w-12.5 border-solid px-5 ${
                          data.badge === "badge-warning"
                            ? "bg-orange-400 border-orange-400"
                            : "bg-red-400"
                        }`}
                      >
                        {data.offer}
                      </span>
                      <div className="mt-4 mr-3.5 absolute right-0 top-0">
                        <Heart
                          size={17.5}
                          className={`c-heart c-pointer ${
                            data.heart ? "text-red-500" : "text-gray-500"
                          }`}
                          style={{
                            fill: "currentColor",
                          }}
                          onClick={() => handleClickFavorite("heart", data.id)}
                        />
                      </div>
                    </div>
                    <div className="card-body p-0 text-center">
                      <img src={data.image} alt="" />
                    </div>
                    <div className="card-footer border-0 px-3.5 py-4">
                      <ul className="d-flex align-items-center mb-2">
                        <li>{/* star */}</li>
                      </ul>
                      <div className="common d-flex align-items-end justify-content-between">
                        <div>
                          <Link to={"#"}>
                            <h4 className="font-semibold leading-1.5">
                              {" "}
                              {data.title}{" "}
                            </h4>
                          </Link>
                          <h3 className="font-w700 mb-0 text-sm">
                            {data.price}
                          </h3>
                        </div>
                        <div
                          className={`plus c-pointer ${
                            data.check ? "active" : ""
                          }`}
                          onClick={() => handleClickFavorite("check", data.id)}
                        >
                          <div className="sub-bx">
                            <Link to={"#"}> </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-12"></div>
        </div>
      </div>
      <div className="col-span-12 md:col-span-12 xl:col-span-4 2xl:col-span-5 bg-blue-500 px-3.5  xl:order-2">
        <div className="grid grid-cols-12 -mx-4">
          <div className="col-span-12 px-4">
            <div className=" border-2 border-solid border-orange-400 rounded-lg shadow-none w-full h-[900px] bg-orange-100 mb-6 ">
              <div>
                <div className="pt-5 px-6">
                  <h4 className="mb-2 text-lg font-semibold">Your Balance</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    // <div className="flex h-screen">
    //   <div className="flex-1 bg-white p-4">
    //     <div className="">
    //       <div className="flex justify-center">
    //         <div>
    //           <Input
    //             label="Name"
    //             type="text"
    //             name="exampleInput"
    //             value={inputValue}
    //             handleChange={handleChange}
    //           />
    //         </div>
    //         <div className="grid content-center ml-2">
    //           <BButton
    //             children={"submit"}
    //             type={"submit"}
    //             onClick={handleButtonClick}
    //             inverted={true}
    //           />
    //         </div>
    //       </div>
    //     </div>
    //     <BDropdown
    //       options={options}
    //       onSelect={handleDropdownSelect}
    //       children={"Open"}
    //     />
    //     <div>
    //       <ProductList products={products} />
    //     </div>
    //   </div>
    // </div>
  );
};

export default Home;
