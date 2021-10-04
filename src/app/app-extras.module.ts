import {
  NgModule
} from '@angular/core';

import { SkyI18nModule,  SKY_LIB_RESOURCES_PROVIDERS} from '@skyux/i18n';

import {
  AppSkyModule
} from './app-sky.module';

import { MyLibraryResourcesProvider } from './public/plugin-resources/my-library-resources-provider';

@NgModule({
  providers: [{
    provide: SKY_LIB_RESOURCES_PROVIDERS,
    useClass: MyLibraryResourcesProvider,
    multi: true
  }],
  exports: [
    AppSkyModule,
    SkyI18nModule
  ]
})
export class AppExtrasModule { }
