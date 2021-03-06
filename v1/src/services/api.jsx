import apiUrl from './../constants';
import {isProduction} from './user-info';

const url = isProduction ?  apiUrl.production : apiUrl.development

const API = {
  url,
  registrationUrl: `${url}/api/v1/registrations`,
  loginUrl: `${url}/api/v1/sessions/login`,
  MoviesIndexUrl: `${url}/api/v1/movies`,
  MoviesNewUrl: `${url}/api/v1/movies`,
  MovieUrl: id => `${url}/api/v1/movies/${id}`,
};

export default API;
