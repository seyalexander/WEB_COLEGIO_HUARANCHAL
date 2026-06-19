import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AniversarioPage } from './aniversario-page';

describe('AniversarioPage', () => {
  let component: AniversarioPage;
  let fixture: ComponentFixture<AniversarioPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AniversarioPage],
    }).compileComponents();

    fixture = TestBed.createComponent(AniversarioPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
