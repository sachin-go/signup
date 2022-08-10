import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
    {
      path: '',
      component: HomeComponent,
      pathMatch: 'full'
    },


    // Your route here:

    {
      path: 'auth',
      loadChildren: () =>
            loadRemoteModule({
                type: 'module',
                remoteEntry: 'http://localhost:3000/remoteEntry.js',
                exposedModule: './auth.module'
            })
            .then(m => m.AuthModule)
    },

    {
      path : 'dashboard',
      component: DashboardComponent
    },

    {
      path: '**',
      component: NotFoundComponent
    }

    // DO NOT insert routes after this one.
    // { path:'**', ...} needs to be the LAST one.

];

