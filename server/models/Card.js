const {Schema, model} = require("mongoose")

const schema = new Schema({
    nameCard: {
        type: String
    },
    name: {
        type: String
    },
    userId: {type: String},
    incomeCategorys: [{type: String}],
    rateCategorys: [{type: String}]
}, {
    timestamps: true
})

module.exports = model("Card", schema)