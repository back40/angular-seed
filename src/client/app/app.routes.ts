import { Routes } from '@angular/router';

import { AboutRoutes } from './about/index';
import { HomeRoutes } from './home/index';
import { MaintenanceRoutes } from './maintenance/index';

export const routes: Routes = [
  ...HomeRoutes,
  ...AboutRoutes, 
  ...MaintenanceRoutes
];
