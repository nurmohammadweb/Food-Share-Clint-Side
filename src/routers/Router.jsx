import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import Regester from "../pages/Regester";
import AvailableFoods from "../pages/AvailableFoods";
import AddFood from "../pages/AddFood";


import AddFoodPrivate from "../provider/AddFoodPrivate";
import ManagePrivate from "../provider/ManagePrivate";
import RequestPrivate from "../provider/RequestPrivate";
import FoodDetails from "../pages/foodDetails";
import FoodDetailsPrivate from "../provider/FoodDetailsPrivate";
import MyUpdateFood from "../pages/MyUpdateFood";
import ErrorPage from "../pages/ErrorPage";
import MyFoodRequests from "../pages/MyFoodRequests";
import ManageMyFoods from "../pages/ManageMyFoods";
import RequestSubmit from "../pages/RequestSubmit";


 const router = createBrowserRouter([
   {
     path: "/",
     element: <MainLayout></MainLayout>,
     children: [
       {
         index: true,
         path: "/",
         element: <Home></Home>,
         loader: () => fetch('http://localhost:3000/foods/top')
         
       },
       {
         path: "/availablefoods",
         element: <AvailableFoods></AvailableFoods>,
         loader: () => fetch('http://localhost:3000/foods')
       },
       {
         path: "/fooddetails/:id",
         element: (<FoodDetailsPrivate><FoodDetails /></FoodDetailsPrivate>),
         loader: ({params}) => fetch(`http://localhost:3000/foods/${params.id}`)
       },
       {
         path: "/requsetsubmit",
         element:<RequestSubmit></RequestSubmit>
       },
       {
         path: "/addfood",
         element:(<AddFoodPrivate> <AddFood></AddFood></AddFoodPrivate>)
       },
      {
       path: "/update-food/:id",
       element: <MyUpdateFood />,
      }
,
       {
         path: "/managemyfoods",
         element: (<ManagePrivate><ManageMyFoods/></ManagePrivate>)
       },
       {
         path: "/myfoodrequests",
         element:(<RequestPrivate><MyFoodRequests/></RequestPrivate>)
       },
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
   {
     path: "/*",
     element:<ErrorPage></ErrorPage>
   }
 ]);


export default router;