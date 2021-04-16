import mongoose from "mongoose";
const { Schema } = mongoose;

const HotelSchema = new Schema({
    title: String,
    description: String,
    extras: String,
    rating: {
        type: Number,
        default: 0,
    },
})

const Hotel = mongoose.model("Hotel", HotelSchema);
export default Hotel;