export interface AuthTokenPayload {
  userId: string;
  step?: "2FA";
  role?: "user" | "admin";
}