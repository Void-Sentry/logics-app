import { 
  Colab,
  Charges,
  Routes,
  Vehicles,
  SignIn,
  SignUp,
} from './views';

import { Deliveries } from './views/colab/entregas/index'

// Icon Imports
import {
  MdOutlineShoppingCart,
  MdBarChart,
  MdPerson,
  MdLock,
} from "react-icons/md";

const routes = [
  {
    name: "Colaboradores",
    layout: "/admin",
    path: "colaboradores",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Colab />,
    secondary: true,
  },
  {
    name: "Cargas",
    layout: "/admin",
    icon: <MdBarChart className="h-6 w-6" />,
    path: "cargas",
    component: <Charges />,
  },
  {
    name: "Rotas",
    layout: "/admin",
    path: "rotas",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Routes />,
  },
  {
    name: "Veículos",
    layout: "/admin",
    path: "veiculos",
    icon: <MdPerson className="h-6 w-6" />,
    component: <Vehicles />,
  },
  {
    name: "Entregas",
    layout: "/colab",
    path: "entregas",
    icon: <MdOutlineShoppingCart className="h-6 w-6" />,
    component: <Deliveries />,
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
