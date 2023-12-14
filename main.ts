interface IConta {
  depositar(valor: number): void;
  sacar(valor: number): void;
}

abstract class Conta implements IConta {
  private _titular: string;
  private _saldo: number;

  constructor(titular: string) {
    this._titular = titular;
    this._saldo = 0;
  }

  get titular(): string {
    return this._titular;
  }

  set titular(titular: string) {
    this._titular = titular;
  }

  get saldo(): number {
    return this._saldo;
  }

  public depositar(valor: number): void {
    if (valor > 0) {
      this._saldo = this._saldo + valor;
    }
  }

  public sacar(valor: number) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo = this._saldo - valor;
    }
  }

  // abstract sacar(valor: number): void;

  // abstract depositar(valor: number): void;
}

class ContaCorrente extends Conta {
  public sacar(valor: number): void {
    let acrescimo = (1 / 100) * valor;
    let valorTotal = valor + acrescimo;
    super.sacar(valorTotal);
  }
}

class ContaPoupanca extends Conta {
  public depositar(valor: number): void {
    let acrescimo = (1 / 100) * valor;
    let valorTotal = valor + acrescimo;
    super.depositar(valorTotal);
  }
}

let conta2 = new ContaCorrente("Paulo");
let conta3 = new ContaPoupanca("Vanderley");

console.log(conta2);
console.log(conta3);

conta2.depositar(200);
conta2.sacar(100);
console.log(conta2.saldo);

conta3.depositar(100);
conta3.sacar(50);
console.log(conta3.saldo);
