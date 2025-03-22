const mongoose = require("mongoose");

// استيراد جميع الموديلات لضمان تسجيلها مع Mongoose
require("./User");
require("./Category");
require("./Product");
require("./Order");
require("./CustomOrder");
require("./Message");
require("./Review");
require("./Payment");

module.exports = mongoose;
