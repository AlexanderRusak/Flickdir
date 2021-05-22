import sstk from 'shutterstock-api';

const applicationClientId = process.env.REACT_APP_APPLICATION_CLIENT_ID;
const applicationClientSecret = process.env.REACT_APP_APPLICATION_CLIENT_SECRET;

sstk.setBasicAuth(applicationClientId, applicationClientSecret);

export const imagesApi = new sstk.ImagesApi();

