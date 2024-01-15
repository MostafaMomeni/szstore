import ProductInfo from "./Components/Productnfo/Productnfo"
import AllDiscountOfTheDay from "./Page/AllDiscountOfTheDay/AllDiscountOfTheDay"
import AllNewProduct from "./Page/AllNewProduct/AllNewProduct"
import Category from "./Page/Category/Category"
import ForgetPassword from "./Page/ForgetPassword/ForgetPassword"
import Home from "./Page/Home/Home"
import Likes from "./Page/Likes/Likes"
import Login from "./Page/Login/Login"
import Search from "./Page/Search/Search"
import ShoppingCart from "./Page/ShoppingCart/ShoppingCart"
import VerifyEmail from "./Page/VerifyEmail/VerifyEmail"

let routes = [
    { path: "/", element: <Home /> },
    { path: "/search/:key", element: <Search /> },
    { path: "/shopping-cart", element: <ShoppingCart /> },
    { path: "/likes", element: <Likes /> },
    { path: "/login", element: <Login /> },
    { path: "/forget-password", element: <ForgetPassword /> },
    { path: "/verify-email", element: <VerifyEmail /> },
    { path: "/all-discount-of-the-day", element: <AllDiscountOfTheDay /> },
    { path: "/all-new-product", element: <AllNewProduct /> },
    { path: "/product-info/:shortName", element: <ProductInfo /> },
    { path: "/category/:shortName", element: <Category /> },
]

export default routes