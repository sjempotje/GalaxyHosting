const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    _id: String,
});

module.exports = mongoose.model('user', userSchema);