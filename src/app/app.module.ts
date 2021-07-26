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
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzCascaderModule } from 'ng-zorro-antd/cascader';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';


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
  MinusCircleOutline,
  SearchOutline, 
  DownOutline,
  ArrowLeftOutline } from '@ant-design/icons-angular/icons';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UnitComponent } from './dashboard/product/unit/unit.component';
import { UnitItemListComponent } from './dashboard/product/unit/unit-item-list/unit-item-list.component';
import { EditModalComponent } from './dashboard/product/unit/unit-item-list/edit-modal/edit-modal.component';
import { DeleteModalComponent } from './dashboard/product/unit/unit-item-list/delete-modal/delete-modal.component';
import { AddModalComponent } from './dashboard/product/unit/add-modal/add-modal.component';
import { ViewModalComponent } from './dashboard/product/unit/unit-item-list/view-modal/view-modal.component';
import { ItemComponent } from './dashboard/product/item/item.component';
import { ItemAddComponent } from './dashboard/product/item/item-add/item-add.component';
import { ItemTypeSelectorComponent } from './dashboard/product/item/item-add/item-type-selector/item-type-selector.component';
import { UnitSelectorComponent } from './dashboard/product/item/item-add/unit-selector/unit-selector.component';

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
  MinusCircleOutline,
  SearchOutline,
  DownOutline,
  ArrowLeftOutline ];

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
    ItemComponent,
    ItemAddComponent,
    ItemTypeSelectorComponent,
    UnitSelectorComponent,
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
    NzAutocompleteModule,
    NzCascaderModule,
    NzSelectModule,
    NzSpinModule,
    NzCheckboxModule,
    NzInputNumberModule,
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
