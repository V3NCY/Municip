import { mergeTypeDefs } from "@graphql-tools/merge";
import userType from "./types/user.js";
import hotelType from "./types/hotel.js";

export default mergeTypeDefs([userType, hotelType]);