import { createContext } from "react";
import  all_product  from '../asset/all_product';

export const Shopcontext = createContext();

export const ShopcontextProvider = (props) => {
    const contextValue = { all_product };

    return (
        <Shopcontext.Provider value={contextValue}>
            {props.children}
        </Shopcontext.Provider>
    )
}