import React from "react";

import { 
  Dashboard,
  Marketplace,
  ProfileOverview,
  Tables,
  SignIn,
  SignUp,
} from './views/index';

// Icon Imports
import {
  MdHome,
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Dashboard",
    layout: "/admin",
    path: "dashboard",
    icon: <MdHome className="h-6 w-6" />,
    component: <Dashboard />,
  },
  {
    name: "Colaboradores",
    layout: "/admin",
    path: "colaboradores",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Marketplace />,
    secondary: true,
  },
  {
    name: "Cargas",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "cargas",
    component: <Tables />,
  },
  {
    name: "Rotas",
    layout: "/admin",
    path: "rotas",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ProfileOverview />,
  },
  {
    name: "Veículos",
    layout: "/admin",
    path: "veiculos",
    icon: <MdPerson className="h-6 w-6" />,
    component: <ProfileOverview />,
  },
  {
    name: "Sign In",
    layout: "/auth",
    path: "sign-in",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignIn />,
  },
  {
    name: "Sign Up",
    layout: "/auth",
    path: "sign-up",
    icon: <MdLock className="h-6 w-6" />,
    component: <SignUp />,
  },
];
export default routes;
