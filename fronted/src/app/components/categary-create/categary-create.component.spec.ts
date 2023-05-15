import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategaryCreateComponent } from './categary-create.component';

describe('CategaryCreateComponent', () => {
  let component: CategaryCreateComponent;
  let fixture: ComponentFixture<CategaryCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategaryCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategaryCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
