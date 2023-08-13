import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../services/api";

const find = createAsyncThunk(
    "/find",
    async () => {
        let result = await api.products.find();
        return result.data;
    });
const findCategories = createAsyncThunk(
    "/find_category",
    async (category_id) => {
        let result = await api.products.findCategories(category_id);
        return result.data;
    });
const findProductById = createAsyncThunk(
        "/find_product",
        async (productId) => {
            let result = await api.products.findProductById(productId);
            return result.data;
    });
const findAllCategory = createAsyncThunk(
        "/find_all_categories",
        async () => {
            let result = await api.products.findAllCategory();
            return result.data;
    });


const productSlice = createSlice({
    name: "product",
    initialState: {
        loading: true,
        data: null
    },
    reducers: {
        addProduct: (state, action) => {
            state.data.unshift(action.payload);
        },
        addProducts: (state, action) => {
            state.data = [...action.payload];
        },
    },
    extraReducers: (builder) => {
        builder.addCase(find.fulfilled, (state, action) => {
            state.data = [...action.payload.data]
        });
        builder.addCase(findCategories.fulfilled, (state, action) => {
            state.data = [...action.payload.data]
        });
        builder.addCase(findProductById.fulfilled, (state, action) => {
            state.data = [...action.payload.data]
        });
        builder.addCase(findAllCategory.fulfilled, (state, action) => {
            console.log("action.payload",action.payload);
            state.data = [...action.payload.data]
        });
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
    }
})

export const productActions = {
    ...productSlice.actions,
    find,
    findCategories,
    findProductById,
    findAllCategory
}

export const productReducer = productSlice.reducer;
