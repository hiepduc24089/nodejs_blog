export const multipleMongooseToObject = (mongooses) => {
    return mongooses.map(mongoose => mongoose.toObject());
};

export const mongooseToObject = (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
};