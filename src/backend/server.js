import { ApolloServer } from "apollo-server-express"
import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import jwt from "express-jwt";
import schema from "./graphql/schema.js";
import mongoose from "mongoose";
import { getContext } from "./helpers/context.js";
import { formatError } from "./helpers/error-detection.js";

dotenv.config();

const db = process.env.MONGODB_URL;

// const auth = jwt({
//     secret: process.env.JSONWEBTOKEN_PRIVATE_KEY,
//     algorithms: ["HS256"],
//     credentialsRequired: false,
// });

const graphqlPath = "/graphql";

mongoose.connect(db, {
    useNewUrlParser: true,
    autoIndex: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Successfully connected to MONGODB!")
}).catch((e) => {
    console.log(e);
})

async function startApolloServer() {
    const server = new ApolloServer({
        schema,
        context: async ({ req }) => {
            const context = await getContext(req);
            return context;

        },
        formatError,
        introspection: true,
        playground: true,

    });
    await server.start();
    const app = express();
    app.use(
        graphqlPath,
        cors({
            credentials: true,
            origin: process.env.FRONTEND_URL ?? "*",
        }),
        bodyParser.json(),

    );

    server.applyMiddleware({ app, path: graphqlPath });
    await new Promise(resolve => app.listen({ port: process.env.PORT }, resolve));
    console.log(`🚀 Server ready at http://localhost:${process.env.PORT}${server.graphqlPath}, ${server.graphqlPath}`);
    return { server, app };
}

startApolloServer();