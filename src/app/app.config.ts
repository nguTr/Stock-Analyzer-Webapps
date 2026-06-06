import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { MAT_ICON_DEFAULT_OPTIONS } from '@angular/material/icon';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // This entirely disables zone.js and enables the new Signals-based engine
    provideZonelessChangeDetection(),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),

    // New Material Icons Library
    { provide: MAT_ICON_DEFAULT_OPTIONS, useValue: { fontSet: 'material-symbols-outlined' } }
  ],
};
