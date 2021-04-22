import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "../graphql/typeDefs/user.js";
import hotelType from "../graphql/typeDefs/hotel.js";

export default mergeTypeDefs([userType, hotelType]);