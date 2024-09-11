import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent {
  value1: number = 0;
  value2: number = 0;
  operator: string = '+';
  result: number | string = 0;

  calculate() {
    if (this.value1 === undefined || this.value2 === undefined) {
      this.result = 'Erro: Valores não definidos';
      return;
    }
    
    switch (this.operator) {
      case '+':
        this.result = this.value1 + this.value2;
        break;
      case '-':
        this.result = this.value1 - this.value2;
        break;
      case '*':
        this.result = this.value1 * this.value2;
        break;
      case '/':
        this.result = this.value2 !== 0 ? this.value1 / this.value2 : 'Erro: Divisão por zero';
        break;
      default:
        this.result = 'Erro: Operação inválida';
    }


    if (typeof this.result === 'number' && (isNaN(this.result) || !isFinite(this.result))) {
      this.result = 'Erro: Resultado inválido';
    }
  }

  clear() {
    this.value1 = 0;
    this.value2 = 0;
    this.operator = '+';
    this.result = 0;
  }
}
