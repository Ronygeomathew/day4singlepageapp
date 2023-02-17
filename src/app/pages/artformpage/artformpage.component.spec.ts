import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtformpageComponent } from './artformpage.component';

describe('ArtformpageComponent', () => {
  let component: ArtformpageComponent;
  let fixture: ComponentFixture<ArtformpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtformpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtformpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
