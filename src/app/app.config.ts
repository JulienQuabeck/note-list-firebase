import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"danotes-5f34c","appId":"1:812911904122:web:cb32354c68a501f09642c3","storageBucket":"danotes-5f34c.appspot.com","apiKey":"AIzaSyB1cTnXRXPv_LLo0OT1vpoIa2mZB3d5K6Y","authDomain":"danotes-5f34c.firebaseapp.com","messagingSenderId":"812911904122"})), provideFirestore(() => getFirestore())]
};
