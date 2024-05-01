import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import { RouterProvider } from "react-router-dom";
const Navigation = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home/>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};
export default Navigation;