import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetalhes } from './produtos-detalhes';

describe('ProdutosDetalhes', () => {
  let component: ProdutosDetalhes;
  let fixture: ComponentFixture<ProdutosDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProdutosDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(ProdutosDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
