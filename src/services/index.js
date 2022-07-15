import api from "./api";

export function getAllProducts() {
    return api.get("/products").then((res) => res.data);
}

export function getSelectedProduct(id) {
    return api.get(`/products/${id}`).then((res) => res.data);
}
