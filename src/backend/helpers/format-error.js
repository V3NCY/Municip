import { UserInputError } from "apollo-server";

export const formatError = (err) => {
    if (err.message.startsWith('Database Error: ')) {
        return new Error('Internal Server Error!!!');
    }
    if (err.originalError instanceof UserInputError) {
        delete err.extensions.exception
    }
    return err;
}