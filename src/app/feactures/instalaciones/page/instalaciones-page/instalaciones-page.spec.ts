import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionesPage } from './instalaciones-page';

describe('InstalacionesPage', () => {
  let component: InstalacionesPage;
  let fixture: ComponentFixture<InstalacionesPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InstalacionesPage],
    }).compileComponents();

    fixture = TestBed.createComponent(InstalacionesPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
