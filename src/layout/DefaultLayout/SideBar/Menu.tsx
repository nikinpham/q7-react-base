import { LayoutDashboard } from "lucide-react";
import { ReactNode } from "react";
export interface MenuItem {
  title: string;
  classsChange?: string;
  iconStyle?: ReactNode;
  to?: string;
  hasMenu?: boolean;
  content?: MenuItem[];
}

export const MenuList: MenuItem[] = [
  {
    title: "Main Menu",
    classsChange: "menu-title",
  },
  //Dashboard
  {
    title: "Dashboard",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Settings",
        to: "/settings",
      },
      {
        title: "Dashboard Light",
        to: "/",
      },
      {
        title: "Dashboard Dark",
        to: "/dashboard-dark",
      },
      {
        title: "Food Order",
        to: "/food-order",
      },
      {
        title: "Favorite Menu",
        to: "/favorite-menu",
      },
      {
        title: "Message",
        to: "/message",
      },
      {
        title: "Order History",
        to: "/order-history",
      },
      {
        title: "Notification",
        to: "/notification",
      },
      {
        title: "Bill",
        to: "/bill",
      },
      {
        title: "Setting",
        to: "/setting",
      },
    ],
  },
  //Restaurant
  {
    title: "Restaurant",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Restaurant",
        to: "/restaurant",
      },
      {
        title: "Menu",
        to: "/menu",
      },
      {
        title: "Orders",
        to: "/orders",
      },
      {
        title: "Reviews",
        to: "/customer-reviews",
      },
    ],
  },
  //Drivers
  {
    title: "Drivers",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Dashboard",
        to: "/deliver-main",
      },
      {
        title: "Orders",
        to: "/deliver-order",
      },
      {
        title: "Feedback",
        to: "/feedback",
      },
    ],
  },
  {
    title: "Other",
    classsChange: "menu-title",
  },
  //Apps
  {
    title: "Apps",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Profile",
        to: "/app-profile",
      },
      {
        title: "Post Details",
        to: "/post-details",
      },
      {
        title: "Email",
        hasMenu: true,
        content: [
          {
            title: "Compose",
            to: "/email-compose",
          },
          {
            title: "Index",
            to: "/email-inbox",
          },
          {
            title: "Read",
            to: "/email-read",
          },
        ],
      },
      {
        title: "Calendar",
        to: "/app-calender",
      },
      {
        title: "Shop",
        hasMenu: true,
        content: [
          {
            title: "Product Grid",
            to: "/ecom-product-grid",
          },
          {
            title: "Product List",
            to: "/ecom-product-list",
          },
          {
            title: "Product Details",
            to: "/ecom-product-detail",
          },
          {
            title: "Order",
            to: "/ecom-product-order",
          },
          {
            title: "Checkout",
            to: "/ecom-checkout",
          },
          {
            title: "Invoice",
            to: "/ecom-invoice",
          },
          {
            title: "Customers",
            to: "/ecom-customers",
          },
        ],
      },
    ],
  },
  //Charts
  {
    title: "Charts",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "RechartJs",
        to: "/chart-rechart",
      },
      {
        title: "Chartjs",
        to: "/chart-chartjs",
      },
      {
        title: "Sparkline",
        to: "/chart-sparkline",
      },
      {
        title: "Apexchart",
        to: "/chart-apexchart",
      },
    ],
  },
  //Bootstrap
  {
    title: "Bootstrap",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Accordion",
        to: "/ui-accordion",
      },
      {
        title: "Alert",
        to: "/ui-alert",
      },
      {
        title: "Badge",
        to: "/ui-badge",
      },
      {
        title: "Button",
        to: "/ui-button",
      },
      {
        title: "Modal",
        to: "/ui-modal",
      },
      {
        title: "Button Group",
        to: "/ui-button-group",
      },
      {
        title: "List Group",
        to: "/ui-list-group",
      },
      {
        title: "Cards",
        to: "/ui-card",
      },
      {
        title: "Carousel",
        to: "/ui-carousel",
      },
      {
        title: "Dropdown",
        to: "/ui-dropdown",
      },
      {
        title: "Popover",
        to: "/ui-popover",
      },
      {
        title: "Progressbar",
        to: "/ui-progressbar",
      },
      {
        title: "Tab",
        to: "/ui-tab",
      },
      {
        title: "Typography",
        to: "/ui-typography",
      },
      {
        title: "Pagination",
        to: "/ui-pagination",
      },
      {
        title: "Grid",
        to: "/ui-grid",
      },
    ],
  },
  //Plugins
  {
    title: "Plugins",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Select 2",
        to: "/uc-select2",
      },
      {
        title: "Sweet Alert",
        to: "/uc-sweetalert",
      },
      {
        title: "Toastr",
        to: "/uc-toastr",
      },
      {
        title: "Jqv Map",
        to: "/map-jqvmap",
      },
      {
        title: "Light Gallery",
        to: "/uc-lightgallery",
      },
    ],
  },
  //Widget
  {
    title: "Widget",
    iconStyle: <LayoutDashboard size={21} />,
    to: "/widget-basic",
  },
  //Forms
  {
    title: "Forms",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Form Elements",
        to: "/form-element",
      },
      {
        title: "Wizard",
        to: "/form-wizard",
      },
      {
        title: "CkEditor",
        to: "/form-ckeditor",
      },
      {
        title: "Pickers",
        to: "/form-pickers",
      },
      {
        title: "Form Validate",
        to: "/form-validation",
      },
    ],
  },
  //Table
  {
    title: "Table",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Table Filtering",
        to: "/table-filtering",
      },
      {
        title: "Table Sorting",
        to: "/table-sorting",
      },
      {
        title: "Bootstrap",
        to: "/table-bootstrap-basic",
      },
    ],
  },
  //Pages
  {
    title: "Pages",
    classsChange: "mm-collapse",
    iconStyle: <LayoutDashboard size={21} />,
    content: [
      {
        title: "Error",
        hasMenu: true,
        content: [
          {
            title: "Error 400",
            to: "/page-error-400",
          },
          {
            title: "Error 403",
            to: "/page-error-403",
          },
          {
            title: "Error 404",
            to: "/page-error-404",
          },
          {
            title: "Error 500",
            to: "/page-error-500",
          },
          {
            title: "Error 503",
            to: "/page-error-503",
          },
        ],
      },
      {
        title: "Lock Screen",
        to: "/page-lock-screen",
      },
    ],
  },
];
