export interface NewLogin {
  username: string;
  password: string;
}

export interface Login extends NewLogin {
  id: number;
}

export default Login;