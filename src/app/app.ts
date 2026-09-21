import { Component, inject } from '@angular/core';
import { ColorService } from './color';
import { ColorInput } from './color-input/color-input';
import { ColorChannel } from './color-channel/color-channel';
import { ColorPreview } from './color-preview/color-preview';

@Component({
  imports: [ColorInput, ColorChannel, ColorPreview],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected colorService: ColorService = inject(ColorService);
}
