import { Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";

const Ciao = () => {
  return <h1>Ciao</h1>;
};
const HelloWorld = () => {
  return <h1>Hello HelloWorld</h1>;
};

const routes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dash",
    element: <HelloWorld />,
  },
  {
    path: "/",
    element: <Ciao />,
  },
  {
    path: "*",
    element: (() => <h1>404 Not Found</h1>)(),
  },
];
export default routes;
