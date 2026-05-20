import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './produtos-detalhes.html', // apontando para o nome novo do html
  styleUrl: './produtos-detalhes.css'     // apontando para o nome novo do css
})
export class ProdutosDetalhes {
  // Informações do Smartphone
  produto = {
    nome: 'Smartphone Premium X',
    preco: 2499.00,
    descricao: 'Experiência visual incrível com tela AMOLED de 6.7 polegadas. Câmera tripla de 50MP para fotos profissionais em qualquer luz, bateria de longa duração com carregamento ultra-rápido e 256GB de memória interna para guardar tudo o que você precisa.',
    imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop'
  };

  quantidade: number = 1;

  aumentar() {
    this.quantidade++;
  }

  diminuir() {
    if (this.quantidade > 1) {
      this.quantidade--;
    }
  }

  adicionarAoCarrinho() {
    alert(`Sucesso! ${this.quantidade}x ${this.produto.nome} adicionado(s) ao carrinho.`);
  }
}