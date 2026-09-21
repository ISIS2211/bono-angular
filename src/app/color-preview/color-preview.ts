import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-color-preview',
  styleUrl: './color-preview.css',
  templateUrl: './color-preview.html',
})
export class ColorPreview {
  color = input.required<string>();
  colorGris = input.required<string>();
}
