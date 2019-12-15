import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from "@angular/forms";
import { CategoriesComponent } from './components/categories/categories.component';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories.component';
import { RouterModule, Routes } from "@angular/router";
import { BreadcrumbsComponent } from './components/breadcrumbs/breadcrumbs.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    component: CategoriesComponent,
    path: 'category/:branchId',
    pathMatch: 'full'
  },
  {
    path: 'subcategory/:branchId/:categoryName',
    component: SubCategoriesComponent,
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    SubCategoriesComponent,
    BreadcrumbsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
