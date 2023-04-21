import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NavBarComponent, CategoryNavComponent } from "../components";
import {Home, Category, Item, Saved, Cart, Checkout } from "../pages";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <NavBarComponent /> 
            <CategoryNavComponent />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/Home" element={<Home />}/>
                <Route exact path="/products" element={<Home />}/>
                <Route exact path="/Proyecto_Final_React" element={<Home />}/>
                <Route exact path="/saved" element={<Saved />} />
                <Route exact path="/category/:categoryID" element={<Category />} />
                <Route exact path="/products/:productId" element={<Item />}/>
                <Route exact path="/cart" element={<Cart />} />
                <Route exact path="/checkout" element={<Checkout />} />
            </Routes>
        </BrowserRouter>
    )
}