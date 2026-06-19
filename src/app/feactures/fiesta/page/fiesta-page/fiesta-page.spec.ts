import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiestaPage } from './fiesta-page';

describe('FiestaPage', () => {
  let component: FiestaPage;
  let fixture: ComponentFixture<FiestaPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiestaPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FiestaPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
