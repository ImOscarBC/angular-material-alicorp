import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './views/products/products.component';

//MODULES
import { MaterialModule } from '../material/material.module';
import { TestAlicorpRoutingModule } from './test-alicorp-routing.module';
import { ModalDeleteProductComponent } from './components/modal-delete-product/modal-delete-product.component';
import { AlertConfirmDeleteProductComponent } from './components/alert-confirm-delete-product/alert-confirm-delete-product.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ModalDeleteProductComponent,
    AlertConfirmDeleteProductComponent
  ],
  imports: [
    CommonModule,
    TestAlicorpRoutingModule,
    MaterialModule
  ]
})
export class TestAlicorpModule { }
