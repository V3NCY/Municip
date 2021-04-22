import Hotel from "../../model/Hotel.js";


export default {

    Query: {
        hotel: async (root, { _id }) => {
            const hotel = await Hotel.findById(_id);
            return hotel;
        },
        hotels: async () => {
            const hotels = await Hotel.find({});
            return hotels;
        }
    },
    Mutation: {
        createHotel: async (root, args) => {
            const newHotel = new Hotel(args.input)
            await newHotel.save();
            return newHotel;
        },
        editHotel: async (root, { _id, input }) => {
            const hotel = await Hotel.findByIdAndUpdate(
                _id,
                { $set: input },
                {
                    runValidators: true,
                    new: true
                });
            return hotel;
        },
        deleteHotel: async (root, { _id }) => {
            const hotel = Hotel.findOneAndDelete(_id);
            return hotel;
        }
    }
}