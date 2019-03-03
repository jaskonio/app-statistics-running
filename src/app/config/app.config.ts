import {InjectionToken} from '@angular/core';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: any = {
  routes: {
    rankings: 'rankings',
    error404: '404'
  },
  topRankingsLimit: 4
};
