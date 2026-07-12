import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { authInterceptor } from './core/services/auth-interceptor';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import {loaderInterceptor} from './core/services/loader-interceptor'
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(),
    provideHttpClient(
      withInterceptors([
        authInterceptor,
        loaderInterceptor
      ])
    )
  ]
};
