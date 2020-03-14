import apisauce from 'apisauce';
import * as Constants from '../../constants/constants';

export default apisauce.create({
  baseURL: Constants.BASEURL,
  headers: { Accept: 'application/json' },
});