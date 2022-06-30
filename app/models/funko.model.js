const mongoose = require("mongoose");

const FunkoSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    value: { type: String, required: true },
    img_url: { type: String, required: true },
    for_sale: { type: Boolean, required: true, default: true }
});

module.exports = mongoose.model("Funko", FunkoSchema);