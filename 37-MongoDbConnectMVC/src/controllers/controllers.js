import Product from "../models/model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find()
        return res.send(products)
    } catch (error) {

        res.status(500).send("Interval server errror")
    }
};

export const addProducts = async (req, res) => {

    try {

        const { title, price } = req.body;
        const newProduct = new Product({ title, price });
        await newProduct.save();
        res.json(newProduct);

    } catch (error) {

        res.status(500).send("Interval server errror")
    }
}

export const delProducts = async (req, res) => {

    try {

        const { id } = req.params; 

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).send("Not found");
        }

        res.status(200).json({ message: "User delete succes", deletedProduct });

    } catch (error) {

        res.status(500).send("Interval server error")
    }
}