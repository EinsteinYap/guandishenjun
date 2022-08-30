import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiubeiComponent } from './liubei.component';

describe('LiubeiComponent', () => {
  let component: LiubeiComponent;
  let fixture: ComponentFixture<LiubeiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiubeiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiubeiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
