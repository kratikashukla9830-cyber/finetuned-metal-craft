import jwt, { SignOptions } from 'jsonwebtoken';
import { AuthTokenPayload } from '../types/auth';

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    throw new Error("FATAL ERROR: JWT_SECRET is not defined.");
}

export const generateToken = (payload: AuthTokenPayload, expiresIn: string | number) => {
    return jwt.sign(payload, JWT_SECRET, { expiresIn } as SignOptions);
};

export const verifyToken = (token: string) => {
    try {
        return jwt.verify(token, JWT_SECRET) as AuthTokenPayload;
    } catch (error) {
        return null;
    }
};