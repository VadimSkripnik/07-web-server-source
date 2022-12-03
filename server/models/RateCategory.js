const {Schema, model} = require("mongoose")

const schema = new Schema({
    sourceOfIncome: {
        type: String
    },
    color: {
        type: String
    },
    cardId: {
        type: String
    },
    userId: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model("RateCategory", schema)