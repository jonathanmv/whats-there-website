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
    serverUrl: 'http://localhost:8000/get_access_token',
    publicKey: 'f65e621d69834aa1a802aa2c452dbe'
  }
};
