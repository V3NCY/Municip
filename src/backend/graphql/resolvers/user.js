import User from "../../model/User.js";
import { UserInputError } from "apollo-server";
import jwt from "jsonwebtoken";
import bcryptjs from "bcryptjs";
import validator from "validator";
import dotenv from "dotenv";
dotenv.config();

export default {

    Query: {
        user: async (root, { _id }) => {
            const user = await User.findById(_id).populate("hotels");
            return user;
        },
        users: async () => {
            const users = await User.find({}).populate("hotels");
            return users;
        },
        currentUser: async (root, args, context) => {
            console.log('==>', context.user)
            return context.user;
        },
    },
    Mutation: {
        createUser: async (root, args) => {

            const userInput = args.input;
            if (!validator.isEmail(userInput.email)) {
                throw UserInputError(`This ${userInput.email} email is not valid!`,
                    {
                        field: "email",
                        value: userInput.email,
                        constraint: "isEmail",
                    })
            }

            if (!validator.isLength(userInput.password, { min: 4, max: 50 })) {
                throw UserInputError(`Password is not valid... It has to be between 4 and 50 symbols... !`,
                    {
                        field: "password",
                        value: userInput.password,
                        constraint: "isLength",
                    })
            }
            userInput.password = await bcryptjs.hash(userInput.password, 10)
            const newUser = new User(userInput)
            await newUser.save();
            return newUser;
        },
        editUser: async (root, { _id, input }) => {
            const user = await User.findByIdAndUpdate(
                _id,
                { $set: input },
                {
                    runValidators: true,
                    new: true
                }).populate("hotels");
            return user;
        },
        deleteUser: async (root, { _id }) => {
            const user = User.findOneAndDelete(_id);
            return user;
        },
        login: async (root, { email, password }) => {

            const matchedUser = await User.findOne({ email });
            if (!matchedUser) {
                throw new Error(`This e-mail: ${email} is not recognized, please try again...`),
                {
                    field: "email",
                    value: email,
                    constraint: "emailDoesNotExist",
                }
            }

            const validPassword = await bcryptjs.compare(password, matchedUser.password);
            if (!validPassword) {
                throw new Error(`This password does not match the email: ${email}, please try again...`),
                {
                    field: "password",
                    value: "",
                    constraint: "passwordIncorrect",
                }
            }

            const pk = process.env.JSONWEBTOKEN_SECRET_KEY;
            const token = jwt.sign({
                _id: matchedUser._id,
                email: matchedUser.email,

            }, pk, {
                expiresIn: '24h'
            });

            return token;
        },
        logout: async (root, args, context) => {
            return context.user;
        }
    }
}