export default interface userAuthStoreType {
  user: string| null;
  token: string | null;
  isAuthenticated: boolean;
  role: string;
  userLogin: (
    user: string|null,
    token: string,
    role: string
  ) => void;
  userLogout:()=>void
}