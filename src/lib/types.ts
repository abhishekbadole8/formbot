export interface IUser {
  // id: number;
  email: string;
  username: string | null;
  password: string;
  // createdAt: Date;
  // updatedAt: Date;
}

export interface IUserRequest {
  email: string;
  username: string;
  password: string;
}
