import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingLoadingComponent } from './ranking-loading.component';

describe('RankingLoadingComponent', () => {
  let component: RankingLoadingComponent;
  let fixture: ComponentFixture<RankingLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankingLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankingLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
