import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuanyuComponent } from './guanyu.component';

describe('GuanyuComponent', () => {
  let component: GuanyuComponent;
  let fixture: ComponentFixture<GuanyuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuanyuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuanyuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
