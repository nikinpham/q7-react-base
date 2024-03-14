// import { useState, useEffect } from "react";
// import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { ChevronRight, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "swiper/scss";
import "./Home.scss";
import { Autoplay, Pagination } from "swiper/modules";
import {
  Bakery,
  Beverage,
  Burger,
  Chicken,
  Pizza,
  SquarePlus,
} from "@/assets/svg";
import { Review } from "@/components";
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
      star: 3,
      heart: false,
      check: false,
    },
    {
      id: "2",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.dcae5a9123531ef55436.jpg",
      title: "Beef burger",
      offer: "Exclusive",
      badge: "badge-warning",

      price: "$5.59",
      star: 3,
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
      star: 3,
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
      star: 3,
      heart: false,
      check: false,
    },
    {
      id: "5",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.dcae5a9123531ef55436.jpg",
      title: "Tandoori burger",
      offer: "Exclusive",

      badge: "badge-warning",
      price: "$5.59",
      star: 3,
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
      star: 3,
      heart: false,
      check: false,
    },
  ];
  const sliderOrder = [
    {
      id: "1",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.0a21631e6947499af364.jpg",
      title: "Pepperoni Pizza",
      heart: false,
    },
    {
      id: "2",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.82ac7203e6fb77a5beb0.jpg",
      title: "Japan Ramen",

      heart: true,
    },
    {
      id: "3",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.5974ee910592f4765950.jpg",
      title: "Fried Rice",

      heart: false,
    },
    {
      id: "4",
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.0a21631e6947499af364.jpg",
      title: "Pepperoni Pizza",

      heart: false,
    },
  ];
  const orderBlogs = [
    {
      id: 1,
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.0a21631e6947499af364.jpg",
      number: 1,
    },
    {
      id: 2,
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.82ac7203e6fb77a5beb0.jpg",
      number: 1,
    },
    {
      id: 3,
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-3.5974ee910592f4765950.jpg",
      number: 1,
    },
    {
      id: 4,
      image:
        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.0a21631e6947499af364.jpg",
      number: 1,
    },
  ];
  const [dataHeart, setDataHeart] = useState(sliderData);
  const [dataHeartOrder, setDataHeartOrder] = useState(sliderOrder);
  const [orderBlog, setOrderBlog] = useState(orderBlogs);
  const [starRating, setStarRating] = useState<{ [id: string]: number }>({});

  const handleStarRatingChange = (id: string, newRating: number) => {
    setStarRating({ ...starRating, [id]: newRating });
  };
  const handleCountAdd = (id: number) => {
    setOrderBlog((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return { ...item, number: item.number + 1 };
        }
        return item;
      });
    });
  };

  const handleCountMinus = (id: number) => {
    setOrderBlog((prevState) => {
      return prevState.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            number: item.number > 0 ? item.number - 1 : item.number,
          };
        }
        return item;
      });
    });
  };
  const handleClickFavorite = (id: string): void => {
    let temp = dataHeart.map((data) => {
      if (id === data.id) {
        console.log(data);
        return { ...data, heart: !data.heart };
      }

      return data;
    });

    setDataHeart(temp);
  };
  const handleClickOrder = (id: string): void => {
    let temp = dataHeartOrder.map((data) => {
      if (id === data.id) {
        console.log(data);
        return { ...data, heart: !data.heart };
      }
      return data;
    });

    setDataHeartOrder(temp);
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
                href=""
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
                768: {
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
                    <div className="card flex flex-col mb-6">
                      <div className="p-[1.65rem] flex flex-col items-center ">
                        {data.icon}
                        <Link to={data.to}>
                          <h6 className="mb-0 font-medium mt-3">{data.name}</h6>
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
                href=""
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
              {dataHeart.map((data, idex) => (
                <SwiperSlide key={idex}>
                  <div
                    className={`card 
                      data.badge === "badge-warning" ? " border-orange-400" : ""
                    }`}
                    key={idex}
                  >
                    <div className="card-header border-0 pr-4 h-8 ">
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
                          className={`cursor-pointer ${
                            data.heart ? "text-red-500" : "text-gray-500"
                          }`}
                          style={{
                            fill: "currentColor",
                          }}
                          onClick={() => handleClickFavorite(data.id)}
                        />
                      </div>
                    </div>
                    <div className=" text-center  flex items-center justify-center p-0 ">
                      <img
                        src={data.image}
                        alt=""
                        className="h-[7.063rem] w-43"
                      />
                    </div>
                    <div className="card-footer border-0 px-3.5 py-4">
                      <Review
                        star={starRating[data.id] || data.star}
                        onstarChange={(newRating) =>
                          handleStarRatingChange(data.id, newRating)
                        }
                      ></Review>
                      <div className="common flex  items-end	 justify-between">
                        <div className="grow">
                          <Link to={"#"}>
                            <h4 className="font-semibold leading-1.5">
                              {data.title}
                            </h4>
                          </Link>
                          <h3 className="font-bold text-base sm:text-lg md:text-xl text-orange-500 ">
                            {data.price}
                          </h3>
                        </div>
                        <div className={`  ${data.check ? "active" : ""}`}>
                          <div className="">
                            <Link to={"#"}>
                              <SquarePlus></SquarePlus>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="col-span-12 px-4">
            <div className="flex items-center justify-between mb-2 mt-4 gap-x-4">
              <h4 className="mb-0 text-lg font-semibold">Recent Order</h4>
              <a
                className=" flex text-primary text-orange-400 items-center justify-between"
                href=""
                style={{ fontSize: "14px" }}
              >
                View all
                <ChevronRight className="ml-2 " size={13} strokeWidth={3} />
              </a>
            </div>
            <Swiper
              className="mySwiper-4"
              speed={1200}
              slidesPerView={3}
              spaceBetween={30}
              // loop={true}
              autoplay={{
                delay: 1200,
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
              {dataHeartOrder.map((data) => (
                <SwiperSlide key={data.id}>
                  <div className="card b-hover review style-1" key={data.id}>
                    <div
                      className={`px-[1.65rem] py-[0.9rem] flex items-center justify-center text-center  py-3  ${
                        data.heart ? "active" : ""
                      }`}
                    >
                      <img
                        src={data.image}
                        alt=""
                        className="w-[8.75rem] h-[8.75rem]"
                      />
                      <Heart
                        size={17.5}
                        className={`cursor-pointer absolute mt-4 mr-3.5 right-0 top-0 ${
                          data.heart ? "text-red-500" : "text-gray-500"
                        }`}
                        style={{
                          fill: "currentColor",
                        }}
                        onClick={() => handleClickOrder(data.id)}
                      />
                    </div>
                    <div className="card-footer px-[1.65rem] pb-[1.1rem] border-0 text-center">
                      <div>
                        <Link to={"#"}>
                          <h4 className="text-lg font-semibold">
                            {data.title}
                          </h4>
                        </Link>
                        <h3 className="font-bold text-primary text-base sm:text-lg md:text-xl  text-orange-500">
                          $5.59
                        </h3>
                        <div className="flex items-center justify-center text-[#777777] text-xs pt-2 font-medium">
                          <p className="pr-2"> 4.97 km </p>
                          <svg
                            width="6"
                            height="7"
                            viewBox="0 0 6 7"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="3" cy="3.5" r="3" fill="#C4C4C4" />
                          </svg>
                          <p className="pl-2"> 21 min </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      {/*Check out*/}
      <div className="col-span-12 md:col-span-12 xl:col-span-4 2xl:col-span-5 px-3.5  xl:order-2">
        <div className="grid grid-cols-12 -mx-4">
          <div className="col-span-12 px-4 mb-6">
            <div className=" border-[1px] border-solid border-orange-500 rounded-lg shadow-none w-full h-full bg-[#FC80191A]  ">
              <div>
                <div className="pt-5 px-6">
                  <h4 className="mb-2 text-lg font-semibold">Your Balance</h4>
                </div>
                <div className="px-[1.65rem] pb-[0.44rem]">
                  <div className="card bg-orange-500 border-orange-500">
                    <div className="p-[1.65rem]">
                      <h4 className="text-lg font-medium text-[#fff]">
                        Balance
                      </h4>
                      <h2 className="text-4xl font-bold text-[#fff] mb-[0.9rem]">
                        $12.000
                      </h2>
                      <div className="change-btn flex">
                        <Link
                          to={"#"}
                          className="rounded-md mr-1 bg-white text-[#3d4152] pl-[0.55rem] py-[0.55rem] pr-[0.825rem] flex items-center font-medium h-[43px] text-sm "
                        >
                          <svg
                            className="me-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z"
                              fill="#3D4152"
                            />
                            <path
                              d="M13 14C13 14.5523 12.5523 15 12 15C11.4477 15 11 14.5523 11 14V2C11 1.44771 11.4477 1 12 1C12.5523 1 13 1.44771 13 2V14Z"
                              fill="#3D4152"
                            />
                            <path
                              d="M12.0362 13.622L7.70711 9.29289C7.31658 8.90237 6.68342 8.90237 6.29289 9.29289C5.90237 9.68342 5.90237 10.3166 6.29289 10.7071L11.2929 15.7071C11.669 16.0832 12.2736 16.0991 12.669 15.7433L17.669 11.2433C18.0795 10.8738 18.1128 10.2415 17.7433 9.83103C17.3738 9.42052 16.7415 9.38725 16.331 9.7567L12.0362 13.622Z"
                              fill="#3D4152"
                            />
                          </svg>
                          Top Up
                        </Link>
                        <Link
                          to={"#"}
                          className="rounded-md bg-white text-[#3d4152] pl-[0.55rem] py-[0.55rem] pr-[0.825rem] flex items-center font-medium h-[43px] text-sm "
                        >
                          <svg
                            className="me-1"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              opacity="0.3"
                              d="M2 13C2 12.5 2.5 12 3 12C3.5 12 4 12.5 4 13C4 13.3333 4 15 4 18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V13C20 12.4477 20.4477 12 21 12C21.5523 12 22 12.4477 22 13V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18C2 15 2 13.3333 2 13Z"
                              fill="#3D4152"
                            />
                            <path
                              d="M13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3V15C11 15.5523 11.4477 16 12 16C12.5523 16 13 15.5523 13 15V3Z"
                              fill="#3D4152"
                            />
                            <path
                              d="M12.0362 3.37798L7.70711 7.70711C7.31658 8.09763 6.68342 8.09763 6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289L11.2929 1.2929C11.669 0.916813 12.2736 0.900912 12.669 1.25671L17.669 5.75671C18.0795 6.12617 18.1128 6.75846 17.7433 7.16897C17.3738 7.57948 16.7415 7.61275 16.331 7.2433L12.0362 3.37798Z"
                              fill="#3D4152"
                            />
                          </svg>
                          Transfer
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="pb-[1.75rem] bb-border">
                    <p className="font-medium text-orange-500 text-xs mb-[0.9rem]">
                      Your Address
                    </p>
                    <div className="flex align-center justify-between mb-[0.45rem]">
                      <h4 className="flex text-base font-semibold">
                        <svg
                          className="me-1"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.46 9.63C20.3196 8.16892 19.8032 6.76909 18.9612 5.56682C18.1191 4.36456 16.9801 3.40083 15.655 2.7695C14.3299 2.13816 12.8639 1.86072 11.3997 1.96421C9.93555 2.06769 8.52314 2.54856 7.3 3.36C6.2492 4.06265 5.36706 4.9893 4.71695 6.07339C4.06684 7.15749 3.6649 8.37211 3.54 9.63C3.41749 10.8797 3.57468 12.1409 4.00017 13.3223C4.42567 14.5036 5.1088 15.5755 6 16.46L11.3 21.77C11.393 21.8637 11.5036 21.9381 11.6254 21.9889C11.7473 22.0397 11.878 22.0658 12.01 22.0658C12.142 22.0658 12.2727 22.0397 12.3946 21.9889C12.5164 21.9381 12.627 21.8637 12.72 21.77L18 16.46C18.8912 15.5755 19.5743 14.5036 19.9998 13.3223C20.4253 12.1409 20.5825 10.8797 20.46 9.63ZM16.6 15.05L12 19.65L7.4 15.05C6.72209 14.3721 6.20281 13.5523 5.87947 12.6498C5.55614 11.7472 5.43679 10.7842 5.53 9.83C5.62382 8.86111 5.93177 7.92516 6.43157 7.08985C6.93138 6.25453 7.61056 5.54071 8.42 5C9.48095 4.29524 10.7263 3.9193 12 3.9193C13.2737 3.9193 14.5191 4.29524 15.58 5C16.387 5.53862 17.0647 6.24928 17.5644 7.08094C18.064 7.9126 18.3733 8.84461 18.47 9.81C18.5663 10.7674 18.4484 11.7343 18.125 12.6406C17.8016 13.5468 17.2807 14.3698 16.6 15.05ZM12 6C11.11 6 10.24 6.26392 9.49994 6.75839C8.75992 7.25286 8.18314 7.95566 7.84255 8.77793C7.50195 9.6002 7.41284 10.505 7.58647 11.3779C7.7601 12.2508 8.18869 13.0526 8.81802 13.682C9.44736 14.3113 10.2492 14.7399 11.1221 14.9135C11.995 15.0872 12.8998 14.9981 13.7221 14.6575C14.5443 14.3169 15.2471 13.7401 15.7416 13.0001C16.2361 12.26 16.5 11.39 16.5 10.5C16.4974 9.30734 16.0224 8.16428 15.1791 7.32094C14.3357 6.4776 13.1927 6.00265 12 6ZM12 13C11.5055 13 11.0222 12.8534 10.6111 12.5787C10.2 12.304 9.87952 11.9135 9.6903 11.4567C9.50109 10.9999 9.45158 10.4972 9.54804 10.0123C9.6445 9.52733 9.88261 9.08187 10.2322 8.73224C10.5819 8.38261 11.0273 8.1445 11.5123 8.04804C11.9972 7.95158 12.4999 8.00109 12.9567 8.1903C13.4135 8.37952 13.804 8.69996 14.0787 9.11108C14.3534 9.5222 14.5 10.0056 14.5 10.5C14.5 11.163 14.2366 11.7989 13.7678 12.2678C13.2989 12.7366 12.663 13 12 13Z"
                            fill="#ED8936"
                          />
                        </svg>
                        Elm Street, 23
                      </h4>
                      <Link
                        to={"#"}
                        className="py-[3.5px] px-[12.25px] rounded font-medium border text-xs text-orange-500 border-orange-500"
                      >
                        Change
                      </Link>
                    </div>
                    <p className="text-sm text-[#777777] font-normal mb-4">
                      Lorem ipsum dolor sit amet, consectetur elit, sed do
                      eiusmod tempor incididunt.
                    </p>
                    <div className="flex">
                      <button
                        type="button"
                        className="border border-orange-500 rounded-md mr-2 font-semibold px-[1.15rem] py-[0.67rem] text-sm text-white bg-orange-500"
                      >
                        Add Details
                      </button>
                      {/* <!-- Modal --> */}
                      <button
                        type="button"
                        className="border border-orange-500 rounded-md font-semibold px-[1.15rem] py-[0.67rem] text-sm text-white bg-orange-500"
                      >
                        Add Note
                      </button>
                      {/* <!-- Modal --> */}
                    </div>
                  </div>
                  {orderBlog.map((item, index) => (
                    <div
                      className="flex items-center my-[14px] p-2"
                      key={index}
                    >
                      <div className="bg-[#fff] border border-orange-500 rounded-lg h-[70px] mr-[15px]">
                        <img
                          src={item.image}
                          alt=""
                          className="w-[68.4px] h-[68.4px]"
                        />
                      </div>
                      <div className="flex flex-col flex-grow ">
                        <div className="flex items-center justify-between">
                          <h4 className="font-semibold text-lg">
                            <Link to={"#"}> Pepperoni Pizza </Link>
                          </h4>
                          <h4 className="text-orange-500 ml-2 mb-2 font-bold">
                            +$5.59
                          </h4>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-[#777777] font-normal">
                            x1
                          </span>
                          <div className="bg-[#fff] border border-orange-500 rounded-lg text-sm font-normal   ">
                            <button
                              className="border-r border-solid border-orange-500 h-7 w-[30px] text-orange-500"
                              onClick={() => handleCountMinus(item.id)}
                            >
                              -
                            </button>
                            <input
                              type="text"
                              className="w-5 text-center"
                              value={item.number}
                            />
                            <button
                              className="border-l border-solid border-orange-500 h-7 w-[30px] text-orange-500"
                              onClick={() => handleCountAdd(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <hr className="my-2 border-t-1 border-orange-500 opacity-90" />
                </div>
                <div className="px-[26.25px] pb-[17.5px]">
                  <div className="flex items-center justify-between">
                    <p className="mb-3.5 text-sm text-[#777777] font-normal">
                      Service
                    </p>
                    <h4 className="font-medium mb-[7px] text-lg">+$1.00</h4>
                  </div>
                  <div className="flex items-center justify-between mb-3.5  ">
                    <h4 className="font-medium text-lg"> Total </h4>
                    <h3 className="font-medium text-orange-500 text-2xl">
                      $202.00
                    </h3>
                  </div>
                  <Link
                    to="/checkout"
                    className="inline-block w-full text-center border border-orange-500 rounded-lg  text-sm font-medium py-[.7rem] px-[1.15rem] bg-orange-500 text-[#fff]"
                  >
                    Checkout
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 px-4">
            <div className="card bg-orange-500 border-orange-500 relative z-10 overflow-hidden border-none h-full">
              <div className="p-5">
                <div className="flex justify-between">
                  <div className="text-[#fff]">
                    <h4 className="text-xl font-semibold mb-[7px]">
                      Get Discount VoucherUp To 20%
                    </h4>
                    <p className="w-3/4 text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                  <div className="dlab-img overflow-hidden">
                    <img
                      src={
                        "https://fooddesk.dexignlab.com/react/demo/static/media/pic-2.4ce8a8473c456788aad5.jpg"
                      }
                      alt=""
                    />
                  </div>
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
