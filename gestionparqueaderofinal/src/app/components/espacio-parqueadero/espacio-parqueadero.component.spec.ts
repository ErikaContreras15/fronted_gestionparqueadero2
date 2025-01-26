import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspacioParqueaderoComponent } from './espacio-parqueadero.component';

describe('EspacioParqueaderoComponent', () => {
  let component: EspacioParqueaderoComponent;
  let fixture: ComponentFixture<EspacioParqueaderoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspacioParqueaderoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EspacioParqueaderoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
