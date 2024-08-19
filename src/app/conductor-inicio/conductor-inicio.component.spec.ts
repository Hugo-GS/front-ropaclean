import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorInicioComponent } from './conductor-inicio.component';

describe('ConductorInicioComponent', () => {
  let component: ConductorInicioComponent;
  let fixture: ComponentFixture<ConductorInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConductorInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConductorInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
