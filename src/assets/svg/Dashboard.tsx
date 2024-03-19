type TDashboard = {
  fillColor: string;
  size: string;
};
const Dashboard = (props: TDashboard) => {
  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 4H6.66667C5.95942 4 5.28115 4.28095 4.78105 4.78105C4.28095 5.28115 4 5.95942 4 6.66667V12C4 12.7072 4.28095 13.3855 4.78105 13.8856C5.28115 14.3857 5.95942 14.6667 6.66667 14.6667H12C12.7072 14.6667 13.3855 14.3857 13.8856 13.8856C14.3857 13.3855 14.6667 12.7072 14.6667 12V6.66667C14.6667 5.95942 14.3857 5.28115 13.8856 4.78105C13.3855 4.28095 12.7072 4 12 4ZM6.66667 12V6.66667H12V12H6.66667ZM25.3333 4H20C19.2928 4 18.6145 4.28095 18.1144 4.78105C17.6143 5.28115 17.3333 5.95942 17.3333 6.66667V12C17.3333 12.7072 17.6143 13.3855 18.1144 13.8856C18.6145 14.3857 19.2928 14.6667 20 14.6667H25.3333C26.0406 14.6667 26.7189 14.3857 27.219 13.8856C27.719 13.3855 28 12.7072 28 12V6.66667C28 5.95942 27.719 5.28115 27.219 4.78105C26.7189 4.28095 26.0406 4 25.3333 4ZM20 12V6.66667H25.3333V12H20ZM12 17.3333H6.66667C5.95942 17.3333 5.28115 17.6143 4.78105 18.1144C4.28095 18.6145 4 19.2928 4 20V25.3333C4 26.0406 4.28095 26.7189 4.78105 27.219C5.28115 27.719 5.95942 28 6.66667 28H12C12.7072 28 13.3855 27.719 13.8856 27.219C14.3857 26.7189 14.6667 26.0406 14.6667 25.3333V20C14.6667 19.2928 14.3857 18.6145 13.8856 18.1144C13.3855 17.6143 12.7072 17.3333 12 17.3333ZM6.66667 25.3333V20H12V25.3333H6.66667ZM25.3333 17.3333H20C19.2928 17.3333 18.6145 17.6143 18.1144 18.1144C17.6143 18.6145 17.3333 19.2928 17.3333 20V25.3333C17.3333 26.0406 17.6143 26.7189 18.1144 27.219C18.6145 27.719 19.2928 28 20 28H25.3333C26.0406 28 26.7189 27.719 27.219 27.219C27.719 26.7189 28 26.0406 28 25.3333V20C28 19.2928 27.719 18.6145 27.219 18.1144C26.7189 17.6143 26.0406 17.3333 25.3333 17.3333ZM20 25.3333V20H25.3333V25.3333H20Z"
        fill={props.fillColor}
      ></path>
    </svg>
  );
};
export default Dashboard;