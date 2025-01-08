import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Course = new Schema({
    name: {type: String, required: true},
    description: {type: String, maxLength: 600},
    image: {type: String, maxLength: 255},
    videoId: {type: String, required: true},
    level: {type: String, maxLength: 255},
    slug: {type: String, unique: true},
}, {
    timestamps: true,
});

export default mongoose.model('Course', Course);