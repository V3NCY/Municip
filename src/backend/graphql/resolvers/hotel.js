import Hotel from "../../models/Hotel.js";

export default {
    Query: {
        hotel: async (root, { _id }) => {
            const hotel = await Hotel.findById(_id);
            return hotel;
        },
        hotels: async () => {
            const hotel = await Hotel.find({});
            return hotels;
        }
    },
    Mutation: {
        createHotel: async (root, args) => {
            const newHotel = new Hotel(args.data)
            await newHotel.save();
            return newHotel;
        },
        editHotel: async (root, { _id, data }) => {
            const hotel = await Hotel.findByIdAndUpdate(_id,
                { $set: data },
                {
                    runValidators: true,
                    new: true,
                })
            return hotel;
        },
        deleteHotel: async (root, { _id }) => {
            const hotel = Hotel.findOneAndDelete(_id);
            return hotel;
        },
    }


}