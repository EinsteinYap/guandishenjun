import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZhangfeiComponent } from './zhangfei.component';

describe('ZhangfeiComponent', () => {
  let component: ZhangfeiComponent;
  let fixture: ComponentFixture<ZhangfeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZhangfeiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZhangfeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
