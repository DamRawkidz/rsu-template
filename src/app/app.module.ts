
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { environment } from '../environments/environment.prod';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { SharedModule } from './shared/shared.module';
import { MenuComponent } from './layout/menu/menu.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';

// import { BorrowKeyFormComponent } from './feature/room-key/borrow-key-form/borrow-key-form.component';

// for debugging



@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MenuComponent,
    ToolbarComponent,    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
