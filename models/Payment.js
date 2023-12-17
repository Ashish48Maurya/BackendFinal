const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    from: {
        required: true,
        type: String,
    },
    to: {
        required: true,
        type: String,
    },
    amount: {
        required: true,
        type: Number,
    },
    timestamps: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('payment', paymentSchema);
