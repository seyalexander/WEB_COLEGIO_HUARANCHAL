import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiosPage } from './premios-page';

describe('PremiosPage', () => {
  let component: PremiosPage;
  let fixture: ComponentFixture<PremiosPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PremiosPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PremiosPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
