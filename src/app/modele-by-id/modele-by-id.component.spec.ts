import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeleByIdComponent } from './modele-by-id.component';

describe('ModeleByIdComponent', () => {
  let component: ModeleByIdComponent;
  let fixture: ComponentFixture<ModeleByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModeleByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModeleByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
