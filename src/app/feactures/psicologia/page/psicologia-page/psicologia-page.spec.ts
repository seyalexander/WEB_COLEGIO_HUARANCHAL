import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologiaPage } from './psicologia-page';

describe('PsicologiaPage', () => {
  let component: PsicologiaPage;
  let fixture: ComponentFixture<PsicologiaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PsicologiaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PsicologiaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
