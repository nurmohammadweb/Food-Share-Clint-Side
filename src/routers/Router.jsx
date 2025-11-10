import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";


 const router = createBrowserRouter([
  {
    path: "/",
     element: <MainLayout></MainLayout>,
     children: [
       {
         index: true,
         path: "/",
         element: <Home></Home>,
          loader: () => fetch('http://localhost:3000/plateShare')
         
       },
       {
         path: "/availablefoods",
         element: <AvailableFoods></AvailableFoods>,
         loader: () => fetch('http://localhost:3000/plateShare')
       },
       {
         path: "/addfood",
         element:<AddFood></AddFood>
       }
       ,
       {
         path: "/auth/login",
         element:<Login></Login>
         
       },
       {
         path: "/auth/regester",
         element:<Regester></Regester>
       }
       
    ]
  },
 ]);


export default router;