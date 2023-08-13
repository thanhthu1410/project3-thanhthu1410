import axios from "axios";

export default {
    find : async() => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products`);
    },
    findCategories : async(categoryid) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/category/` + categoryid)
    },
    findProductById : async(productId) => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products/` + productId)
    },
    findAllCategory : async() => {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/category/` )
    },
    search: async function (searchString) {
        return await axios.get(`${process.env.REACT_APP_SERVER_HOST_API}/products?search=${searchString}`)
    },
    update: async function (productId, formData) {
        return await axios.patch(
          `${process.env.REACT_APP_SERVER_HOST_API}/products/${productId}`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
      },
}