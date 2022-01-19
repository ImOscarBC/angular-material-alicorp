import { Component, ViewChild, OnInit } from '@angular/core';

import { Product } from '../../interfaces/products.interface';

import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import {MatSnackBar} from '@angular/material/snack-bar';

import { ModalDeleteProductComponent } from '../../components/modal-delete-product/modal-delete-product.component';

import { ProductsService } from '../../services/products/products.service';
import { AlertConfirmDeleteProductComponent } from '../../components/alert-confirm-delete-product/alert-confirm-delete-product.component';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  displayedColumns: string[] = ['title', 'price', 'description', 'category', 'actions'];
  dataSource : MatTableDataSource<Product>;
  loading: boolean = true
  durationInSeconds = 5;

  @ViewChild(MatPaginator) paginator: MatPaginator;


  constructor(public dialog: MatDialog, public productService: ProductsService, public _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getProducts()
  }

  getProducts(){
    this.productService.getProducts().subscribe((res) => {
      this.dataSource = new MatTableDataSource<Product>(res)
      this.paginator.pageIndex = 0
      this.dataSource.paginator = this.paginator;
    }, error => {
      console.log("error",error)
    }).add(()=>{
      this.loading = false
    })
  }

  deleteProduct(product: Product){
    this.loading = true
    this.productService.deleteProduct(product).subscribe((res) => {
      this.showConfirmProductDeleted(product)
    }, error => {
      console.log("error",error)
    }).add(()=>{
      this.getProducts()
    })
  }

  showConfirmProductDeleted(product: Product) {
    this._snackBar.openFromComponent(AlertConfirmDeleteProductComponent, {
      duration: this.durationInSeconds * 1000,
      data: product,
      verticalPosition: 'top'
    });
  }

  openModalDeleteProduct(product: Product){
    const dialogRef = this.dialog.open(ModalDeleteProductComponent, {
      data : product,
      width: '320px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.deleteProduct(result)
      }
    });
  }

}

