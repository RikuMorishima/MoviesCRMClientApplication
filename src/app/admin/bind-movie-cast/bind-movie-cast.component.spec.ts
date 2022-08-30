import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindMovieCastComponent } from './bind-movie-cast.component';

describe('BindMovieCastComponent', () => {
  let component: BindMovieCastComponent;
  let fixture: ComponentFixture<BindMovieCastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindMovieCastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindMovieCastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
