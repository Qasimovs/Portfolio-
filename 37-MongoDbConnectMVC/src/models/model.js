import mongoose from "mongoose";

const { Schema, model } = mongoose;

const productSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Product = model("Product", productSchema);

export default Product;

