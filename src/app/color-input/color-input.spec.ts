import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ColorInput } from './color-input';

describe('ColorInput', () => {
  let component: ColorInput;
  let fixture: ComponentFixture<ColorInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ColorInput],
    }).compileComponents();

    fixture = TestBed.createComponent(ColorInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
