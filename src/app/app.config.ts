import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { CarouselModule } from 'ngx-bootstrap/carousel';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes,withInMemoryScrolling({
    anchorScrolling:"enabled",
    scrollPositionRestoration: 'enabled',
  
  })),
  importProvidersFrom(CarouselModule.forRoot())
],
  
};
