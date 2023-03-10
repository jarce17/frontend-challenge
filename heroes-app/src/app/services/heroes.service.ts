import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { MatTableDataSource, MatTableDataSourcePaginator } from '@angular/material/table'
import { delay, map } from 'rxjs'

import { Hero } from '../models/hero'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private url = 'https://fir-udemy-6ad73-default-rtdb.firebaseio.com/heroes'

  constructor(private http: HttpClient) { }

  addHero(hero: Hero) {
    return this.http.post(`${this.url}.json`, hero).pipe(
      map((response: any) => {
        hero.id = response.name
        return hero
      })
    )
  }

  updateHero(hero: Hero) {
    const heroExistent = { ...hero }

    return this.http.put(`${this.url}/${hero.id}.json`, heroExistent)
  }

  deleteHero(id: string) {
    return this.http.delete(`${this.url}/${id}.json`)
  }

  getHero(id: string) {
    return this.http.get<Hero>(`${this.url}/${id}.json`)
  }

  getHeroes() {
    return this.http.get<Array<Hero>>(`${this.url}.json`)
      .pipe(map(this.createArray), delay(0))
  }
  private createArray(heroesObj: Array<Object>) {
    const heroes: Hero[] = []

    Object.keys(heroesObj).forEach((key: any) => {
      if (key !== 'undefined') {
        const heroe: any = heroesObj[key]
        heroe.id = key
        heroes.push(heroe)
      }
    })
    return heroes
  }

  deleteHeroe(id: string) {
    return this.http.delete(`${this.url}/${id}.json`)
  }

  findHeroes(filterValue: string, dataSource: MatTableDataSource<Hero, MatTableDataSourcePaginator>){
    dataSource.filterPredicate = (data: any) => {
      return data.name.toLowerCase().includes(filterValue)
    }
    dataSource.filter = filterValue
  }
}
