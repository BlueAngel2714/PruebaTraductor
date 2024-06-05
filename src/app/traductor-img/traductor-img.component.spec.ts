import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TraductorImgComponent } from './traductor-img.component';

describe('TraductorImgComponent', () => {
  let component: TraductorImgComponent;
  let fixture: ComponentFixture<TraductorImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TraductorImgComponent]
    });
    fixture = TestBed.createComponent(TraductorImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
