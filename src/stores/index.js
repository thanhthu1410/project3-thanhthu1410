import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./slices/cart";
import { userReducer } from "./slices/user";
import {productReducer} from "./slices/product";
import { receiptReducer } from "./slices/receipt";

const store = configureStore({
  reducer: {
    userStore: userReducer,
    productStore : productReducer,
    cartStore: cartReducer,
    receiptStore: receiptReducer
  },
});

export default store;
