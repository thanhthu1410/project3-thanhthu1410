import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";


const cartSlice = createSlice({
  name: "cart",
  initialState: {
    loading: true,
    data: null,
  },
  reducers: {
    changeLoad: (state, action) => {
      return {
        ...state,
        load: !state.load,
      };
    },
    setCartData: (state, action) => {
      //console.log("action.payload", action.payload)
      state.data = { ...action.payload }
    },
    addCart: (state, action) => {
      //console.log("da vao thu nekkk", action.payload)

      let existProduct = state.data?.cart_details?.find(item => {
        return item.product.id == action.payload.data.product.id
      })

      if (existProduct) {
        existProduct.quantity += action.payload.quantity

        state.data.cart_details = state.data.cart_details.map(item => {
          if (item.product.id == existProduct.product.id) {
            return existProduct
          }
          return item
        })
      } else {
        state.data?.cart_details?.unshift(action.payload.data)
      }
    },
    deleteProduct: (state, action) => {
      console.log("action.payload", action.payload);
      const newCart = state.data.cart_details.filter((item) => {

        console.log("action.payload.product_id", action.payload);
        return item.id !== action.payload
      })
       state.data.cart_details = newCart

    }
  },
  extraReducers: (builder) => {
    // builder.addCase(find.fulfilled, (state, action) => {
    //   state.data = [...action.payload.data];
    // });
    builder.addMatcher(
      (action) => {
        if (action.meta) {
          return action;
        }
      },
      (state, action) => {
        if (action.meta) {
          if (action.meta.requestStatus == "pending") {
            //console.log("đã vào pending của api: ", action.type)
            // if (action.type == "deleteUserByid/pending") {
            //     console.log("trường hợp pending của api delete")
            // }
            state.loading = true;
          }
          if (action.meta.requestStatus == "rejected") {
            //console.log("đã vào rejected của api: ", action.type)
            state.loading = false;
          }
          if (action.meta.requestStatus == "fulfilled") {
            //console.log("đã vào fulfilled của api: ", action.type)
            state.loading = false;
          }
        }
      },
    );
  },
});

export const cartActions = {
  ...cartSlice.actions
};

export const cartReducer = cartSlice.reducer;