import {BrowserRouter, Routes, Route} from "react-router-dom";
import { NavBarComponent, CategoryNavComponent } from "../components";
import {Home, Category, Item, Saved,  } from "../pages";

export const MainRoutes = () => {
    return(
        <BrowserRouter>
            <NavBarComponent /> 
            <CategoryNavComponent />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route exact path="/saved" element={<Saved />} />
                <Route exact path="/category/:categoryID" element={<Category />} />
                <Route exact path="/products/:productId" element={<Item />}/>
            </Routes>
        </BrowserRouter>
    )
}