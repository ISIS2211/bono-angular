import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-color-channel',
  styleUrl: './color-channel.css',
  templateUrl: './color-channel.html',
})
export class ColorChannel {
  etiqueta = input.required<string>();
  valor = input.required<number>();
}
