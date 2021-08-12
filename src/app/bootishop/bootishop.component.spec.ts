import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BootishopComponent } from './bootishop.component';

describe('BootishopComponent', () => {
  let component: BootishopComponent;
  let fixture: ComponentFixture<BootishopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BootishopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BootishopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
