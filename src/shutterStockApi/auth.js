import sstk from 'shutterstock-api';

const applicationClientId = process.env.REACT_APP_APPLICATION_CLIENT_ID;
const applicationClientSecret = process.env.REACT_APP_APPLICATION_CLIENT_SECRET;
const setAccessToken = process.env.REACT_APP_APPLICATION_TOKEN;

sstk.setBasicAuth(applicationClientId, applicationClientSecret);
sstk.setAccessToken(setAccessToken)

export const imagesApi = new sstk.ImagesApi();

