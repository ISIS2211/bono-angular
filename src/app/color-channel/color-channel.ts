import { Component, computed, inject, input } from '@angular/core';
import { ColorService } from '../color';

@Component({
  imports: [],
  selector: 'app-color-channel',
  styleUrl: './color-channel.css',
  templateUrl: './color-channel.html',
})
export class ColorChannel {
  private colorService: ColorService = inject(ColorService);

  etiqueta = input.required<string>();
  canal = input.required<'r' | 'g' | 'b'>();

  readonly valor = computed(() => {
    switch (this.canal()) {
      case 'r':
        return this.colorService.r();
      case 'g':
        return this.colorService.g();
      case 'b':
        return this.colorService.b();
    }
  });

  actualizar(evento: Event): void {
    const nuevoValor = Number((evento.target as HTMLInputElement).value);
    this.colorService.establecerCanal(this.canal(), nuevoValor);
  }
}
