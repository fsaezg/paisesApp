import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
    `
      tbody {
        background-color: #f2cf07;
        background-image: linear-gradient(315deg, #f2cf07 0%, #55d284 74%);
      }
    `
  ]
})
export class PaisTablaComponent implements OnInit {

  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
