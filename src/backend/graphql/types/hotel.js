export default `
    type Hotel {
        _id: String!
        title: String!
        description: String!
        extras: String!
        rating: Float!
    }
    input CreateHotelInput {
        title: String!
        description: String!
        extras: String!
        rating: Float!
    }
    type Query {
        hotel(_id: String!): Hotel
        hotels: [Hotel]
    }
    type Mutation {
        createHotel(data: CreateHotelInput!): Hotel
        editHotel(_id: String!, data: CreateHotelInput!): Hotel
        deleteHotel(_id: String!): Hotel
    }
`