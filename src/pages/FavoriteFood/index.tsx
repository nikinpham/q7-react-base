import { SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, SearchIcon } from "lucide-react";
import { Dashboard, MenuList, SquarePlus } from "@/assets/svg";
import { BPagination } from "@/components";

const favoriteProducts = [
  {
    id: "1",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Mushroom Burger",
    heart: false,
  },
  {
    id: "2",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Bean Burger",
    heart: false,
  },
  {
    id: "3",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Lamb Burger",
    heart: false,
  },
  {
    id: "4",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Potato Burger",
    heart: false,
  },
  {
    id: "5",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Veggie Burger",
    heart: false,
  },
  {
    id: "6",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Pizza Burger",
    heart: false,
  },
  {
    id: "7",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Corn Burger",
    heart: false,
  },
  {
    id: "8",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Chees Burger",
    heart: false,
  },
  {
    id: "9",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Mushroom Burger",
    heart: false,
  },
  {
    id: "10",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Bean Burger",
    heart: false,
  },
  {
    id: "11",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Lamb Burger",
    heart: false,
  },
  {
    id: "12",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Potato Burger",
    heart: false,
  },
  {
    id: "13",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Veggie Burger",
    heart: false,
  },
  {
    id: "14",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Pizza Burger",
    heart: false,
  },
  {
    id: "15",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Corn Burger",
    heart: false,
  },
  {
    id: "16",
    image:
      "https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg",
    title: "Chees Burger",
    heart: false,
  },
];
const DropdownBlog = () => {
  return (
    <>
      <div
        className="btn-link i-false"
        style={{
          cursor: "pointer",
        }}
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11 12C11 12.5523 11.4477 13 12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12Z"
            stroke="#262626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M18 12C18 12.5523 18.4477 13 19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12Z"
            stroke="#262626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 12C4 12.5523 4.44772 13 5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12Z"
            stroke="#262626"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </>
  );
};

const FavoriteFood = () => {
  const [dataheart, setDataheart] = useState(favoriteProducts);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const filteredProducts = searchKeyword
    ? favoriteProducts.filter((product) =>
        product.title.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    : dataheart;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 1280) {
        setItemsPerPage(4);
      } else if (window.innerWidth < 1600) {
        setItemsPerPage(9);
      } else {
        setItemsPerPage(12);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const paginate = (pageNumber: SetStateAction<number>) => {
    setCurrentPage(pageNumber);
  };
  const handleTabClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab);
  };
  function handleClick(type: string, id: any) {
    let temp = dataheart.map((data) => {
      if (id === data.id) {
        if (type === "heart") {
          return { ...data, heart: !data.heart };
        }
      }
      return data;
    });
    setDataheart(temp);
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-[1.32rem]">
        <div className="border border-[#dbdbdb] rounded-md xs:w-none sm:w-[25rem] md:w-[30rem] xl:w-[40rem] flex items-stretch relative px-2.5">
          <span className="flex items-center justify-center min-w-[3.125rem]">
            <SearchIcon size={21} className="mr-1 text-[#fc8019]" />
          </span>
          <input
            type="text"
            className="h-[2.62rem] p-0 text-base w-full focus:outline-none"
            placeholder="What do you want eat today..."
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
        </div>
        <ul
          className="grid grid-cols-2 gap-4 transition-all ease-in-out duration-500"
          id="list-tab"
          role="tablist"
        >
          <li>
            <button
              className={`flex items-center justify-center border border-[#dbdbdb] rounded h-10 w-10 focus:border-[#FC80191A] focus:bg-[#f8b6021a] focus:text-[#fc8019] ${
                activeTab === "menu" ? "bg-[#f8b6021a] " : ""
              }`}
              onClick={() => handleTabClick("menu")}
            >
              <MenuList
                fillColor={activeTab === "menu" ? "#fc8019" : "#7E808C"}
              />
            </button>
          </li>
          <li>
            <button
              className={`flex items-center justify-center border border-[#dbdbdb] rounded h-10 w-10 focus:border-[#FC80191A] focus:bg-[#f8b6021a] focus:text-[#fc8019] ${
                activeTab === "dashboard" ? "bg-[#f8b6021a] text-[#fc8019]" : ""
              }`}
              onClick={() => handleTabClick("dashboard")}
            >
              <Dashboard
                size="32"
                fillColor={activeTab === "dashboard" ? "#fc8019" : "#7E808C"}
              />
            </button>
          </li>
        </ul>
      </div>
      {activeTab === "dashboard" && (
        <div className="menu-list grid grid-cols-12 gap-8 transition-all ease-in-out duration-500">
          {currentItems.map((item) => (
            <div
              className="col-span-6 xl:col-span-4 xxl:col-span-3 "
              key={item.id}
            >
              <div className="flex flex-col border border-black border-opacity-30  hover:border-orange-400 rounded-lg shadow-none h-[calc(100% - 30px)] mb-6 relative transition-all duration-500 ease-in-out">
                <Heart
                  size={17.5}
                  className={`cursor-pointer absolute mt-4 mr-4 right-0 top-0 ${
                    item.heart ? "text-red-500" : "text-gray-500"
                  }`}
                  style={{
                    fill: "currentColor",
                  }}
                  onClick={() => handleClick("heart", item.id)}
                />
                <div className="px-[26px] pt-3.5">
                  <div className="text-center mb-2 ">
                    <img
                      className="h-[9.5rem] object-cover w-full"
                      src={item.image}
                      alt=""
                    />
                  </div>
                  <div className="border-b border-[#b3b3b3] pb-3">
                    <h4 className="font-medium mb-1 text-[#3d4152]">
                      Fast Food Resto
                    </h4>
                    <div className="flex items-center text-gray-500 font-medium text-xs">
                      <svg
                        width="16"
                        height="15"
                        viewBox="0 0 16 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0.500031L9.79611 6.02789H15.6085L10.9062 9.4443L12.7023 14.9722L8 11.5558L3.29772 14.9722L5.09383 9.4443L0.391548 6.02789H6.20389L8 0.500031Z"
                          fill="#FC8019"
                        />
                      </svg>
                      <p className=" mb-0 px-2">5.0</p>
                      <svg
                        className="me-2"
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2.50003" r="2" fill="#C4C4C4" />
                      </svg>
                      <p className=" mb-0">1k+ Reviews</p>
                      <svg
                        className="mx-2"
                        width="4"
                        height="5"
                        viewBox="0 0 4 5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="2" cy="2.5" r="2" fill="#C4C4C4" />
                      </svg>
                      <p className=" mb-0">2.97 km</p>
                    </div>
                  </div>
                </div>
                <div className="px-[26px] pt-2 pb-[1.1rem]">
                  <div className="flex items-center justify-between">
                    <div>
                      <Link to="#">
                        <h4 className="text-[#3d4152] font-semibold text-lg">
                          {item.title}
                        </h4>
                      </Link>
                      <h3 className="font-bold text-lg md:text-xl text-[#fc8019]">
                        $5.59
                      </h3>
                    </div>
                    <div
                      className={`cursor-pointer`}
                      onClick={() => handleClick("check", item.id)}
                    >
                      <Link to={"#"}>
                        <SquarePlus></SquarePlus>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "menu" && (
        <div className="card h-auto transition-all ease-in-out duration-500">
          <div className="card-body p-0">
            <div className="overflow-x-auto">
              <table className="w-full mb-4 border-0" id="guestTable-all3">
                <thead>
                  <tr>
                    <th className="pl-[20px] pr-[5px]">
                      <div className="">
                        <input
                          className="w-[17.5px] h-[17.5px]"
                          type="checkbox"
                          value=""
                          id="checkAll"
                          // onClick={() => chackboxFun("all")}
                        />
                      </div>
                    </th>
                    <th className="text-left px-[5px] py-[15px]"> Menu </th>
                    <th className="text-left px-[5px] py-[15px]"> Date </th>
                    <th className="text-left px-[5px] py-[15px]"> Address </th>
                    <th className="text-left px-[5px] py-[15px]"> Total </th>
                    <th className="text-left px-[5px] py-[15px]"> Status </th>
                    <th className="bg-none px-[5px] py-[15px]"> </th>
                    <th className="bg-none px-[5px] py-[15px]"> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-300 ">
                    <td className="py-[15px] pl-[20px] pr-[5px] ">
                      <div className="">
                        <input
                          className=" w-[17.5px] h-[17.5px]"
                          type="checkbox"
                          value=""
                          // onClick={() => chackboxFun()}
                        />
                      </div>
                    </td>
                    <td className="py-[15px] px-[5px]">
                      <div className="media-bx flex py-3 items-center w-[187px]">
                        <img
                          className="mr-[14px] rounded-full object-cover h-[49px] w-[49px]"
                          src="https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.77e1f6929495d6e6ebc7.jpg"
                          alt="images"
                        />
                        <div>
                          <h5 className="mb-0"> Fish Burger </h5>
                          <p className="mb-0"> 1x </p>
                        </div>
                      </div>
                    </td>
                    <td className="py-[15px] px-[5px]">
                      <div>
                        <p className="mb-0 w-[132px] text-sm font-light">
                          June1, 2020, 08:22 AM
                        </p>
                      </div>
                    </td>
                    <td className="py-[15px] px-[5px]">
                      <div className="flex items-center w-[212px] text-sm">
                        <svg
                          className="me-2"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M20.4604 9.63C20.32 8.16891 19.8036 6.76908 18.9616 5.56681C18.1195 4.36455 16.9805 3.40083 15.6554 2.76949C14.3303 2.13815 12.8642 1.86072 11.4001 1.9642C9.93592 2.06768 8.5235 2.54856 7.30037 3.36C6.24957 4.06264 5.36742 4.98929 4.71731 6.07339C4.0672 7.15748 3.66526 8.3721 3.54037 9.63C3.41785 10.8797 3.57504 12.1409 4.00054 13.3223C4.42604 14.5036 5.10917 15.5755 6.00037 16.46L11.3004 21.77C11.3933 21.8637 11.5039 21.9381 11.6258 21.9889C11.7477 22.0397 11.8784 22.0658 12.0104 22.0658C12.1424 22.0658 12.2731 22.0397 12.3949 21.9889C12.5168 21.9381 12.6274 21.8637 12.7204 21.77L18.0004 16.46C18.8916 15.5755 19.5747 14.5036 20.0002 13.3223C20.4257 12.1409 20.5829 10.8797 20.4604 9.63ZM16.6004 15.05L12.0004 19.65L7.40037 15.05C6.72246 14.372 6.20317 13.5523 5.87984 12.6498C5.5565 11.7472 5.43715 10.7842 5.53037 9.83C5.62419 8.8611 5.93213 7.92516 6.43194 7.08984C6.93175 6.25452 7.61093 5.5407 8.42037 5C9.48131 4.29523 10.7267 3.91929 12.0004 3.91929C13.2741 3.91929 14.5194 4.29523 15.5804 5C16.3874 5.53861 17.065 6.24928 17.5647 7.08093C18.0644 7.91259 18.3737 8.8446 18.4704 9.81C18.5666 10.7674 18.4488 11.7343 18.1254 12.6405C17.8019 13.5468 17.281 14.3698 16.6004 15.05ZM12.0004 6C11.1104 6 10.2403 6.26392 9.5003 6.75838C8.76028 7.25285 8.18351 7.95565 7.84291 8.77792C7.50232 9.60019 7.4132 10.505 7.58684 11.3779C7.76047 12.2508 8.18905 13.0526 8.81839 13.682C9.44773 14.3113 10.2495 14.7399 11.1225 14.9135C11.9954 15.0872 12.9002 14.998 13.7224 14.6575C14.5447 14.3169 15.2475 13.7401 15.742 13.0001C16.2364 12.26 16.5004 11.39 16.5004 10.5C16.4977 9.30733 16.0228 8.16428 15.1794 7.32093C14.3361 6.47759 13.193 6.00264 12.0004 6ZM12.0004 13C11.5059 13 11.0226 12.8534 10.6114 12.5787C10.2003 12.304 9.87989 11.9135 9.69067 11.4567C9.50145 10.9999 9.45194 10.4972 9.54841 10.0123C9.64487 9.52732 9.88297 9.08186 10.2326 8.73223C10.5822 8.3826 11.0277 8.1445 11.5126 8.04803C11.9976 7.95157 12.5003 8.00108 12.9571 8.1903C13.4139 8.37952 13.8043 8.69995 14.079 9.11107C14.3537 9.52219 14.5004 10.0055 14.5004 10.5C14.5004 11.163 14.237 11.7989 13.7681 12.2678C13.2993 12.7366 12.6634 13 12.0004 13Z"
                            fill="#FC8019"
                          />
                        </svg>
                        <h5 className="mb-0 text-sm">
                          Elm Street, 23 Yogyakarta
                        </h5>
                      </div>
                      <span className="text-sm font-light text-gray-400">
                        2,97 Km
                      </span>
                    </td>
                    <td className="py-[15px] px-[5px]">
                      <div className="w-[50px]">
                        <h4 className="text-[#fc8019] text-lg "> $ 5.59 </h4>
                      </div>
                    </td>
                    <td className="py-[15px] px-[5px]">
                      <span className="bg-[#e3faef] text-[#1fbf75] border border-[#1fbf75] rounded-md px-[13px] py-[6px] text-lg font-normal w-[90px] leading-[2.1875rem]">
                        Completed
                      </span>
                    </td>
                    <td className="py-[15px] px-[5px]">
                      <div className="w-[130px]">
                        <Link
                          to={"#"}
                          className="transition-all ease-in-out duration-300 border border-[#fc8019] text-[#fc8019] rounded-md px-[18.5px] py-[11px] hover:bg-[#fc8019] hover:text-white"
                        >
                          Order Again
                        </Link>
                      </div>
                    </td>
                    <td className="py-[15px] pl-[5px] pr-[20px]">
                      <DropdownBlog />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <div className={`${activeTab === "dashboard" ? "" : "hidden"}`}>
        <BPagination
          totalItems={dataheart.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={paginate}
        />
      </div>
    </div>
  );
};

export default FavoriteFood;
