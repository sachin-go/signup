// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";
export const environment = {
  production: false,
   firebase: {
    apiKey: "AIzaSyCtPFgmG507JtEi-N9dmtPb6tOe_o1Fnls",
    authDomain: "signuppoc-b0b0d.firebaseapp.com",
    projectId: "signuppoc-b0b0d",
    storageBucket: "signuppoc-b0b0d.appspot.com",
    messagingSenderId: "152066556976",
    appId: "1:152066556976:web:e07a499f897acb5f3199f5"
  }
};


/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
