import{createContext} from "react";

export const CartContext = createContext();

function CartProvider({children}){
    const [cart, setCart] = useState(0);
    return(
        <CartContext.Provider value={{cart, setCart}}>
            {children}
        </CartContext.Provider>

    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired
};
export default CartProvider;