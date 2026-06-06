import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-calculadora',
  imports: [CommonModule, FormsModule],
  templateUrl: './calculadora.html',
  styleUrls: ['./calculadora.scss']
})
export class Calculadora {
  numero1 = '';
  numero2 = '';
  resultado: number | null = null;
  operador = '+';
  mensagem = '';

  calcular(operacao: '+' | '-' | '*' | '/') {
    const a = Number(this.numero1);
    const b = Number(this.numero2);

    if (this.numero1 === '' || this.numero2 === '' || isNaN(a) || isNaN(b)) {
      this.mensagem = 'Informe dois números válidos para calcular.';
      this.resultado = null;
      return;
    }

    if (operacao === '/' && b === 0) {
      this.mensagem = 'Divisão por zero não é permitida.';
      this.resultado = null;
      return;
    }

    this.mensagem = '';
    this.operador = operacao;

    switch (operacao) {
      case '+':
        this.resultado = a + b;
        break;
      case '-':
        this.resultado = a - b;
        break;
      case '*':
        this.resultado = a * b;
        break;
      case '/':
        this.resultado = a / b;
        break;
    }
  }

  limpar() {
    this.numero1 = '';
    this.numero2 = '';
    this.resultado = null;
    this.operador = '+';
    this.mensagem = '';
  }

  get expressao() {
    const primeiro = this.numero1 === '' ? '0' : this.numero1;
    const segundo = this.numero2 === '' ? '0' : this.numero2;
    return `${primeiro} ${this.operador} ${segundo}`;
  }
}
