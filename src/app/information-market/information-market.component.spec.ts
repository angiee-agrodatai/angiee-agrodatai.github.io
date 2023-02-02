import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformationMarketComponent } from './information-market.component';

describe('InformationMarketComponent', () => {
  let component: InformationMarketComponent;
  let fixture: ComponentFixture<InformationMarketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformationMarketComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformationMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
