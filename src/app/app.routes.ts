import { Routes } from '@angular/router';
import { Vitrine } from './pages/vitrine/vitrine';
import { Carrinho } from './pages/carrinho/carrinho';
import { NaoEncontrado } from './pages/nao-encontrado/nao-encontrado';
import { ProdutosDetalhes } from './pages/produtos-detalhes/produtos-detalhes';

export const routes: Routes = [
    { path: '', redirectTo: 'vitrine', pathMatch: 'full' },
    { path: 'vitrine', component: Vitrine },
    { path: 'carrinho', component: Carrinho },
    { path: 'produtos-detalhes', component: ProdutosDetalhes },
    { path: '**', component: NaoEncontrado }
];