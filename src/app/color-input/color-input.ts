import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ColorService } from '../color';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-color-input',
  styleUrl: './color-input.css',
  templateUrl: './color-input.html',
})
export class ColorInput {
  private colorService: ColorService = inject(ColorService);

  colorForm: FormGroup<{
    hex: FormControl<string>;
  }> = new FormGroup({
    hex: new FormControl<string>('', {
      nonNullable: true,
      validators: [Validators.required, Validators.pattern(/^#[0-9A-Fa-f]{6}$/)],
    }),
  });

  convertir(): void {
    if (this.colorForm.invalid) return;

    const { hex } = this.colorForm.getRawValue();
    this.colorService.establecerHex(hex);
  }
}
