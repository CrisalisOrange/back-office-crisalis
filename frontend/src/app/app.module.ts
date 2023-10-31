import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { interceptorProvider } from './service/interceptor.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderComponent } from './order/order.component';
import { UsersModule } from './users/users.module';

import { UsersRoutingModule } from './users/users.routing.module';
import { HomepageComponent } from './homepage/homepage.component';
import { HomeSectionsComponent } from './home-sections/home-sections.component';
import { UpperbarComponent } from './upperbar/upperbar.component';

import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ListTableComponent } from './list-table/list-table.component';


const routes: Routes = [
  { path: '', component: HomepageComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HomeSectionsComponent,
    UpperbarComponent,
    MenuComponent,
    MenuItemComponent,
    LoginComponent,
    PageNotFoundComponent,
    OrderComponent,
    ListTableComponent,
  ],
  imports: [
    SweetAlert2Module.forRoot(),
    BrowserModule,
    UsersModule,
    HttpClientModule,
    UsersRoutingModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
