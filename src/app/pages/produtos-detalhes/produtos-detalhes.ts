import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarrinhoService } from '../../carrinho.service'; // <-- Caminho corrigido para a sua estrutura

@Component({
  selector: 'app-produtos-detalhes',
  standalone: true,
  imports: [],
  templateUrl: './produtos-detalhes.html',
  styleUrl: './produtos-detalhes.css'
})
export class ProdutosDetalhes implements OnInit {
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private carrinhoService = inject(CarrinhoService);
  
  produto: any;
  quantidade: number = 1;

  listaProdutos = [
    { id: 1, nome: 'Smartphone Premium X', preco: 2499.00, imagem: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&h=500&fit=crop', desc: 'Tela AMOLED de 6.7 polegadas e câmera tripla.' },
    { id: 2, nome: 'Fone de Ouvido Bluetooth', preco: 299.00, imagem: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop', desc: 'Cancelamento de ruído ativo e 40h de bateria.' },
    { id: 3, nome: 'Mouse Gamer Sem Fio', preco: 150.00, imagem: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500&h=500&fit=crop', desc: 'Alta precisão com sensor óptico de 16000 DPI.' },
    { id: 4, nome: 'Notebook Ultra Slim', preco: 4500.00, imagem: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500&h=500&fit=crop', desc: 'Processador de última geração, 16GB RAM e SSD 512GB.' }
  ];

  ngOnInit() {
    const idDaUrl = Number(this.route.snapshot.paramMap.get('id'));
    this.produto = this.listaProdutos.find(p => p.id === idDaUrl);
  }

  aumentar() { this.quantidade++; }
  diminuir() { if (this.quantidade > 1) this.quantidade--; }

  adicionarAoCarrinho() {
    if (this.produto) {
      this.carrinhoService.adicionar(this.produto, this.quantidade);
      this.router.navigate(['/carrinho']);
    }
  }
}