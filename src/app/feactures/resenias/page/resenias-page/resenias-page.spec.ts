import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReseniasPage } from './resenias-page';

describe('ReseniasPage', () => {
  let component: ReseniasPage;
  let fixture: ComponentFixture<ReseniasPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReseniasPage],
    }).compileComponents();

    fixture = TestBed.createComponent(ReseniasPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
