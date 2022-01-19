import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { ProductsComponent } from './products.component';

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  const product = {
    id: 0,
    title: '',
    price: 1,
    description: '',
    category: '',
    image: '',
    rating: {
      rate: 1,
      count: 1
    }
  }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientModule, MatDialogModule, MatSnackBarModule],
      declarations: [ ProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getProducts', async () => {
    await component.getProducts()
    expect(component.loading).toBe(true);
  });

  it('deleteProduct', async () => {
    await component.deleteProduct(product)
    expect(component.loading).toBe(true);
  });

  it('showConfirmProductDeleted', () => {
    component.showConfirmProductDeleted(product)
  });

  it('openModalDeleteProduct', () => {
    component.openModalDeleteProduct(product)
  });
});
