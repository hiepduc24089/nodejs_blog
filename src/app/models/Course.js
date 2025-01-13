import mongoose from 'mongoose';
import mongooseDelete from 'mongoose-delete';

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

//Add plugin
Course.plugin(mongooseDelete, {
    overrideMethods: 'all', // Bắt buộc để ghi đè findDeleted
    deletedAt: true,        // Kích hoạt trường deletedAt
});


export default mongoose.model('Course', Course);