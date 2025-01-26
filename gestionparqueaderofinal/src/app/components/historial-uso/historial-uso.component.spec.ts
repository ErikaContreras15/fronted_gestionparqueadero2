import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorialUsoComponent } from './historial-uso.component';

describe('HistorialUsoComponent', () => {
  let component: HistorialUsoComponent;
  let fixture: ComponentFixture<HistorialUsoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HistorialUsoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistorialUsoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
