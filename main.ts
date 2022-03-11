import userModel from './src/models/userModel';
// import Login from './src/interfaces/login';

const login = {
  username: 'nome1',
  password: '123',
};

const main = async () => {
  const result = await userModel.getLoginUser(login);
  console.log(result);
};

main();