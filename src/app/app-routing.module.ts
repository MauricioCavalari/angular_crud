import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component'
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';

import { ClienteCrudComponent } from './views/cliente-crud/cliente-crud.component';
import { ClientesCreateComponent } from './components/clientes/clientes-create/clientes-create.component';
import { ClientesDeleteComponent } from './components/clientes/clientes-delete/clientes-delete.component';
import { ClientesUpdateComponent } from './components/clientes/clientes-update/clientes-update.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "products",
    component: ProductCrudComponent
  },
  {
    path: "products/create",
    component: ProductCreateComponent
  },
  {
    path: "products/update/:id",
    component: ProductUpdateComponent
  },
  {
    path: "products/delete/:id",
    component: ProductDeleteComponent
  },
  {
    path: "clientes",
    component: ClienteCrudComponent
  },
  {
    path: "clientes/create",
    component: ClientesCreateComponent
  },
  {
    path: "clientes/update/:id",
    component: ClientesUpdateComponent
  }, 
  {
    path: "clientes/delete/:id",
    component: ClientesDeleteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
