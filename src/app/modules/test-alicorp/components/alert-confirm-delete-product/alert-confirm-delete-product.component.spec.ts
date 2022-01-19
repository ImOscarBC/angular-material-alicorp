import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

import { AlertConfirmDeleteProductComponent } from './alert-confirm-delete-product.component';

describe('AlertConfirmDeleteProductComponent', () => {
  let component: AlertConfirmDeleteProductComponent;
  let fixture: ComponentFixture<AlertConfirmDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatSnackBarModule ],
      declarations: [ AlertConfirmDeleteProductComponent ],
      providers: [
          { provide: MAT_SNACK_BAR_DATA, useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertConfirmDeleteProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
