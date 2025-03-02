const mongoose = require('mongoose');

const problemSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title cannot be empty"]
    },
    description: {
        type: String,
        required: [true, "Description cannot be empty"]
    },
    difficulty: {  // fixed typo here too
        type: String,
        enum: ["Easy", "Medium", "Hard"],
        required: [true, "Difficulty cannot be empty"],
        default: "Easy"
    },
    testCases: [
        {
            input: {
                type: String,
                required: true
            },
            output: {
                type: String,
                required: true
            },
        }
    ],
    editorial: {
        type: String
    }
});

const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
