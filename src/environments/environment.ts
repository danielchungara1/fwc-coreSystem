
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The result-search of file replacements can be found in `angular.json`.
import {name, version} from '../../package.json';

export const environment = {
  production: false,
  NAME: name,
  VERSION: version,
  API: 'http://localhost:8080/api/v2',
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
