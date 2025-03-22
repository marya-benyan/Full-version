const Review = require("../models/Review");

exports.getReviews = async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: "خطأ في جلب المراجعات" });
    }
};

exports.getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id);
        if (!review) {
            return res.status(404).json({ error: "المراجعة غير موجودة" });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: "خطأ في جلب المراجعة" });
    }
};

exports.createReview = async (req, res) => {
    try {
        const { productId, rating, comment } = req.body;
        const review = new Review({
            user: req.user.id,
            product: productId,
            rating,
            comment,
        });
        await review.save();
        res.status(201).json({ message: "تم إضافة المراجعة بنجاح", review });
    } catch (error) {
        res.status(500).json({ error: "خطأ في إضافة المراجعة" });
    }
};

exports.updateReview = async (req, res) => {
    try {
        const { rating, comment } = req.body;
        const review = await Review.findByIdAndUpdate(
            req.params.id,
            { rating, comment },
            { new: true }
        );
        if (!review) {
            return res.status(404).json({ error: "المراجعة غير موجودة" });
        }
        res.json({ message: "تم تحديث المراجعة بنجاح", review });
    } catch (error) {
        res.status(500).json({ error: "خطأ في تحديث المراجعة" });
    }
};
