import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorChannel } from './color-channel';

describe('ColorChannel', () => {
  let component: ColorChannel;
  let fixture: ComponentFixture<ColorChannel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorChannel],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorChannel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
