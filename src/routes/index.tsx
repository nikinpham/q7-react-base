import { Home, Settings, Login } from "@/pages";
const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/settings",
    component: Settings,
  },
  {
    path: "/login",
    component: Login,
    layout: null,
  },
];

export { publicRoutes };
