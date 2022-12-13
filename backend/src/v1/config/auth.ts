interface IAuth {
  jwt: {
    secret: string;
    expiresIn: any;
  };
}

export default {
  jwt: {
    secret: `${process.env.APP_SECRET}`,
    expiresIn: 400,
  },
} as IAuth;
