import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Error from "./UI/Error";
import AppLayout from "./UI/AppLayout";
import Home from "./UI/Home";
import About from "./UI/About";
import Shop from "./UI/Shop";
import Contact from "./UI/Contact";
import Cart from "./components/cart";
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "About",
        element: <About />,
      },
      {
        path: "Shop",
        element: <Shop />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      { path: "Cart", element: <Cart /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
