import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpRequestInterceptor } from './interceptors/http-request.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';


import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { 
  AccountBookFill, 
  AlertFill, 
  TeamOutline, 
  UserOutline, 
  MenuFoldOutline, 
  MenuUnfoldOutline, 
  LinkOutline, 
  BookOutline, 
  ShoppingCartOutline, 
  SnippetsOutline, 
  DatabaseOutline, 
  PlusOutline, 
  EditOutline, 
  DeleteOutline,
  MinusCircleOutline } from '@ant-design/icons-angular/icons';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnitComponent } from './dashboard/unit/unit.component';
import { UnitItemListComponent } from './dashboard/unit/unit-item-list/unit-item-list.component';
import { EditModalComponent } from './dashboard/unit/unit-item-list/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './dashboard/unit/unit-item-list/delete-modal/delete-modal.component';
import { AddModalComponent } from './dashboard/unit/add-modal/add-modal.component';
import { ViewModalComponent } from './dashboard/unit/unit-item-list/view-modal/view-modal.component';

const icons: IconDefinition[] = [ 
  AccountBookFill, 
  AlertFill, 
  TeamOutline, 
  UserOutline, 
  MenuFoldOutline, 
  MenuUnfoldOutline, 
  LinkOutline, 
  BookOutline, 
  ShoppingCartOutline, 
  SnippetsOutline, 
  DatabaseOutline, 
  PlusOutline, 
  EditOutline,
  DeleteOutline,
  MinusCircleOutline ];

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UnitComponent,
    UnitItemListComponent,
    EditModalComponent,
    DeleteModalComponent,
    AddModalComponent,
    ViewModalComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzListModule,
    NzMenuModule,
    NzGridModule,
    NzInputModule,
    NzSkeletonModule,
    ScrollingModule,
    NzTableModule,
    NzDividerModule,
    NzModalModule,
    NzFormModule,
    NzIconModule.forRoot(icons)

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
