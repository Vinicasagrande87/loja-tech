import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  private itensCarrinho: any[] = [];

  adicionar(produto: any, quantidade: number) {
    // Procura se o produto já existe no carrinho
    const itemExistente = this.itensCarrinho.find(item => item.id === produto.id);

    if (itemExistente) {
      // Se já existe, apenas soma a nova quantidade
      itemExistente.quantidade += quantidade;
    } else {
      // Se não existe, adiciona o novo item completo ao carrinho
      this.itensCarrinho.push({
        id: produto.id,
        nome: produto.nome,
        preco: produto.preco,
        imagem: produto.imagem,
        quantidade: quantidade
      });
    }
  }

  getItens() {
    return this.itensCarrinho;
  }

  // Remove apenas um item específico clicado
  removerItemEspecifico(index: number) {
    this.itensCarrinho.splice(index, 1);
  }

  limpar() {
    this.itensCarrinho = [];
  }
}