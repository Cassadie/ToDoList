const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        required: true,
        default: false
    },
    dateCreated: {
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = Task = mongoose.model('task', TaskSchema)