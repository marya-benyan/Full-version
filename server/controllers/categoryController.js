const Category = require("../models/Category");

exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        res.status(500).json({ error: "خطأ في جلب الفئات" });
    }
};

exports.createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const category = new Category({ name });
        await category.save();
        res.status(201).json({ message: "تم إنشاء الفئة بنجاح", category });
    } catch (error) {
        res.status(500).json({ error: "خطأ في إنشاء الفئة" });
    }
};
