import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-vitrine',
  standalone: true,
  imports: [RouterModule], // <-- IMPORTANTE: adicionado aqui para habilitar o routerLink
  templateUrl: './vitrine.html',
  styleUrl: './vitrine.css',
})
export class Vitrine {}