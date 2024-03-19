import { Home, Settings, Login, FavoriteFood } from "@/pages";
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
  {
    path: "/favorite-menu",
    component: FavoriteFood,
  },
];

export { publicRoutes };
