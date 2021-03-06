import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../type/pokemon.types'

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons: Pokemon [] = [];

  constructor(private httpClient: HttpClient) {
    this.carregarPokemons();
  }

  async carregarPokemons() {
    const requisicao = await this.httpClient
      .get<any>('https://pokeapi.co/api/v2/pokemon?limit=905')
      .toPromise();

    this.pokemons = requisicao.results;
    console.log(requisicao.results);

  }
}
