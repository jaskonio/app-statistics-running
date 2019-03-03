import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingDetailComponent } from './ranking-detail.component';

describe('RankingDetailComponent', () => {
  let component: RankingDetailComponent;
  let fixture: ComponentFixture<RankingDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
