import App from './App.jsx'
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: "/product-details",
        element: <h1>Product Details</h1>,
    }
]);