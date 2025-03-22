const CustomOrder = require("../models/CustomOrder");

exports.createCustomOrder = async (req, res) => {
    try {
        const { designDescription, image, message, totalPrice } = req.body;

        const customOrder = new CustomOrder({
            user: req.user.id,
            designDescription,
            image,
            message,
            totalPrice,
            status: "قيد التصميم",
        });

        await customOrder.save();
        res.status(201).json({ message: "تم إنشاء الطلب المخصص بنجاح", customOrder });
    } catch (error) {
        res.status(500).json({ error: "خطأ في إنشاء الطلب المخصص" });
    }
};

exports.getUserCustomOrders = async (req, res) => {
    try {
        const customOrders = await CustomOrder.find({ user: req.user.id });
        res.json(customOrders);
    } catch (error) {
        res.status(500).json({ error: "خطأ في جلب الطلبات المخصصة" });
    }
};

exports.getCustomOrderById = async (req, res) => {
    try {
        const customOrder = await CustomOrder.findById(req.params.id);
        if (!customOrder) {
            return res.status(404).json({ error: "الطلب المخصص غير موجود" });
        }
        res.json(customOrder);
    } catch (error) {
        res.status(500).json({ error: "خطأ في جلب الطلب المخصص" });
    }
};

exports.updateCustomOrderStatus = async (req, res) => {
    try {
        const { status } = req.body;
        const customOrder = await CustomOrder.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );
        if (!customOrder) {
            return res.status(404).json({ error: "الطلب المخصص غير موجود" });
        }
        res.json(customOrder);
    } catch (error) {
        res.status(500).json({ error: "خطأ في تحديث حالة الطلب المخصص" });
    }
};
