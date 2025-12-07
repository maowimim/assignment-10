import { createBrowserRouter } from "react-router";
import RootLayout from "../root/RootLayout";
import Home from "../pages/Home";
import Plantdata from "../pages/Plants";
import Login from "../component/Login";
import Register from "../pages/Register";
import Myprofile from "../pages/Myprofile";
import PrivateRouter from "../Provider/PrivateRouter";
import VeiwDetails from "../pages/VeiwDetails";
import AddPlants from "../pages/AddPlants";
import OrderPlants from "../pages/OrderPlants";
import MyPlants from "../pages/MyPlants";
import UpdatePlant from "../pages/UpdatePlant";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children : [
        {
            path : '/',
            element : <Home />
        },
        {
          path : '/plantdata',
          element : <Plantdata></Plantdata>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element : <Register></Register>
        },
        {
          path:'/myprofile',
          element:<PrivateRouter><Myprofile></Myprofile></PrivateRouter>
        },
        {
          path:"/veiwdetails/:id",
          loader:()=> fetch('/plantdata.json'),
          element:<VeiwDetails></VeiwDetails>
        },
        {
          path:'/add-plants',
          element:<AddPlants></AddPlants>
        },
         {
          path:'/my-orders',
          element:<OrderPlants></OrderPlants>
        },
        {
          path:'/my-plants',
          element:<MyPlants></MyPlants>
        },
         {
          path:'/update-plant',
          element:<UpdatePlant></UpdatePlant>
        }
    ]
  },
]);

export default router;