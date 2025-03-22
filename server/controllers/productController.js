const Product = require("../models/Product");

exports.getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: "خطأ في جلب المنتجات" });
    }
};

exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ error: "المنتج غير موجود" });

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: "خطأ في جلب المنتج" });
    }
};

exports.createProduct = async (req, res) => {
    try {
        const { name, price, description, category } = req.body;

        // التأكد من أن جميع الحقول المطلوبة موجودة
        if (!name || !price || !description || !category) {
            return res.status(400).json({ error: "يرجى تعبئة جميع الحقول" });
        }

        const newProduct = new Product({
            name,
            price,
            description,
            category,
        });

        await newProduct.save(); // حفظ المنتج الجديد في قاعدة البيانات
        res.status(201).json({ message: "تم إنشاء المنتج بنجاح", product: newProduct });
    } catch (error) {
        res.status(500).json({ error: "خطأ في إنشاء المنتج" });
    }
};

exports.updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedProduct) {
            return res.status(404).json({ error: "المنتج غير موجود" });
        }
        res.json(updatedProduct);
    } catch (error) {
        res.status(500).json({ error: "خطأ في تحديث المنتج" });
    }
};

exports.deleteProduct = async (req, res) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            return res.status(404).json({ error: "المنتج غير موجود" });
        }
        res.json({ message: "تم حذف المنتج بنجاح" });
    } catch (error) {
        res.status(500).json({ error: "خطأ في حذف المنتج" });
    }
};
