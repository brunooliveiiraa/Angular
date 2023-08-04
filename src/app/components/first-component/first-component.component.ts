import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Matheus';
  age: number = 30;
  Trabalho = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar']
  car = {
    name: "C4 Pallas",
    year: 2019,
  }


Programador: any;

  constructor() {}

  ngOnInit(): void {}
}

