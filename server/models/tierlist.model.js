const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const tierListSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    sTier: {
        type: [String],
        required: true,
    },
    aTier: {
        type: [String],
        required: true,
    },
    bTier: {
        type: [String],
        required: true,
    },
});

const TierList = mongoose.model('TierList', tierListSchema);

module.exports = TierList;
