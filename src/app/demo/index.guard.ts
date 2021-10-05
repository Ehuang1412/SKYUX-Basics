import {
  Injectable
} from '@angular/core';

import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot
} from '@angular/router';

import {
  Observable
} from 'rxjs';

import {
  MyPermissionService
} from './services/my-permission.service';

@Injectable()
export class AppRouteGuard implements CanActivate {

  constructor(
    private myPermissionService: MyPermissionService
  ) { }

  public canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {
    return this.myPermissionService.isAuthorized();
  }
}
