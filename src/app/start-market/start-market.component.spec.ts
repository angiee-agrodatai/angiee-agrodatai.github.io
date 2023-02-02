import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartMarketComponent } from './start-market.component';

describe('StartMarketComponent', () => {
  let component: StartMarketComponent;
  let fixture: ComponentFixture<StartMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StartMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StartMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
