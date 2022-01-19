import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { Product } from '../../interfaces/products.interface';

@Component({
  selector: 'app-alert-confirm-delete-product',
  templateUrl: './alert-confirm-delete-product.component.html',
  styleUrls: ['./alert-confirm-delete-product.component.scss']
})
export class AlertConfirmDeleteProductComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: Product) { }

  ngOnInit(): void {
  }

}
