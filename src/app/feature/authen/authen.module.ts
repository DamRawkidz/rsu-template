// import { AuthenEffects } from './store/effects/authen.effects';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
// import { StoreModule } from '@ngrx/store';
// import { AuthenReducer }from './store/reducer/authen.reducer'
// import { EffectsModule } from '@ngrx/effects';

const routes: Routes = [
  {
    path:'',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    LoginComponent,    
  ],
  imports: [
    CommonModule,
    SharedModule,    
    RouterModule.forChild(routes),
    // StoreModule.forFeature('authen',AuthenReducer),
    // EffectsModule.forFeature([
    //   AuthenEffects
    // ])
  ],
})
export class AuthenModule { }
