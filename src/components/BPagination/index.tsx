import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type TPagination = {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: any;
};
const BPagination = (props: TPagination) => {
  const totalPages = Math.ceil(props.totalItems / props.itemsPerPage);
  const startIndex = (props.currentPage - 1) * props.itemsPerPage + 1;
  const endIndex = Math.min(
    startIndex + props.itemsPerPage - 1,
    props.totalItems
  );

  const handlePageChange = (page: number) => {
    props.onPageChange(page);
  };

  return (
    <div className="span-col-12 w-full flex items-center justify-center xl:justify-between">
      <div className="mr-2">
        <p className="font-light text-sm">
          <span>
            Showing {startIndex} - {endIndex} from{" "}
            <span>{props.totalItems}</span> data
          </span>
        </p>
      </div>
      <nav className="">
        <ul className="pagination flex justify-center items-center gap-3">
          <li className="flex page-item ">
            <button
              disabled={props.currentPage === 1}
              onClick={() => handlePageChange(props.currentPage - 1)}
              className="flex justify-center items-center hover:border  w-[41px] rounded-md  h-[42px] items-center justify-center hover:bg-[#fc8019] hover:border-[#fc8019] hover:text-white"
            >
              <ChevronLeftIcon size={16} strokeWidth={1} />
            </button>
          </li>
          {Array.from({ length: totalPages }, (_, index) => {
            const pageNumber = index + 1;
            return (
              <li
                key={pageNumber}
                className={`flex page-item border  w-[41px] rounded-md  h-[42px] items-center justify-center ${
                  pageNumber === props.currentPage
                    ? "bg-[#fc8019] border-[#fc8019] text-white"
                    : "border-orange-100 bg-orange-100"
                }`}
              >
                <button
                  onClick={() => handlePageChange(pageNumber)}
                  className="page-link"
                >
                  {pageNumber}
                </button>
              </li>
            );
          })}
          <li className="flex page-item ">
            <button
              disabled={props.currentPage === totalPages}
              onClick={() => handlePageChange(props.currentPage + 1)}
              className="flex justify-center items-center hover:border  w-[41px] rounded-md  h-[42px] items-center justify-center hover:bg-[#fc8019] hover:border-[#fc8019] hover:text-white"
            >
              <ChevronRightIcon size={16} strokeWidth={1} />
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BPagination;
