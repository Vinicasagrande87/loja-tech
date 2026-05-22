import { Component, OnInit, inject } from '@angular/core';
import { CarrinhoService } from '../../carrinho.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-carrinho',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './carrinho.html',
  styleUrl: './carrinho.css'
})
export class Carrinho implements OnInit {
  private carrinhoService = inject(CarrinhoService);
  
  itens: any[] = [];
  total: number = 0;

  ngOnInit() {
    this.itens = this.carrinhoService.getItens();
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.itens.reduce((acc, item) => acc + (item.preco * item.quantidade), 0);
  }

  excluirItem(index: number) {
    this.carrinhoService.removerItemEspecifico(index);
    this.calcularTotal();
  }

  finalizarCompra() {
    this.carrinhoService.limpar();
    this.itens = [];
    this.total = 0;
  }
}