import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertConfirmDeleteProductComponent } from './alert-confirm-delete-product.component';

describe('AlertConfirmDeleteProductComponent', () => {
  let component: AlertConfirmDeleteProductComponent;
  let fixture: ComponentFixture<AlertConfirmDeleteProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertConfirmDeleteProductComponent ]
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
