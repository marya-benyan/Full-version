const mongoose = require("mongoose");

const customOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  designDescription: { type: String, required: true },
  image: { type: String },
  message: { type: String },
  status: { type: String, default: "قيد التنفيذ" },
}, { timestamps: true });

const CustomOrder = mongoose.model("CustomOrder", customOrderSchema);
module.exports = CustomOrder;
