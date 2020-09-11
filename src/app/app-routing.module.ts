
import { AuthGuard } from './core/guards/auth.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';

const routes: Routes = [
  
  {
    path:'',
    redirectTo:'/sing-in',
    pathMatch:'full'
  },
  {
      path:'sing-in',
      loadChildren: () => import('./feature/authen/authen.module')
        .then(m => m.AuthenModule)
  },
  {
    path:'menu',
    component: MainLayoutComponent,
    canActivate:[AuthGuard],
    canActivateChild:[AuthGuard],
    children:[      
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
