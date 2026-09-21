import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ColorService {
  private _hex = signal<string>('#000000');
  readonly hex = this._hex.asReadonly();

  readonly r = computed(() => parseInt(this._hex().slice(1, 3), 16));
  readonly g = computed(() => parseInt(this._hex().slice(3, 5), 16));
  readonly b = computed(() => parseInt(this._hex().slice(5, 7), 16));

  readonly gris = computed(() => Math.round((this.r() + this.g() + this.b()) / 3));

  readonly hexGris = computed(() => {
    const canal = this.gris().toString(16).padStart(2, '0');
    return `#${canal}${canal}${canal}`;
  });

  establecerHex(nuevoHex: string): void {
    this._hex.set(nuevoHex);
  }
}
