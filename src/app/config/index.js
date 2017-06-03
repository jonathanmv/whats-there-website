// @flow weak

export const appConfig = {
  DEV_MODE: true, // flag to fetch mock or real fetch

  api: {
    fakeEndPoint: 'api/somewhere'
  },

  aws: {
    credentials: {
      region: 'us-east-1',
      accessKeyId: 'AKIAINFPRHJ5BRNYBMXA',
      secretAccessKey: 'YEKOdO8Cyzj5Y4GW9X1s93nGbY/ocmpb4S15rX4e'
    }
  },

  plaid: {
    clientId: '5932fdb04e95b8036a6730c3',
    publicKey: 'f65e621d69834aa1a802aa2c452dbe',
    secret: 'bc4a2e0507015e18c88a7a1155bc91'
  }
};
