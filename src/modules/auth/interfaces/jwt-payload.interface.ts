export interface JwtPayload {
  username: string;
  sub: string; //  user ID
  email?: string;
}
