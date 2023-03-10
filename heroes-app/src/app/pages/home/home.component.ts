import { Component, ViewChild } from '@angular/core'

import { HeroesService } from 'src/app/services/heroes.service'

import { Hero } from '../../models/hero'
import { TableComponent } from '../../components/table/table.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  heroes: Hero[] = []
  isLoading = true

  @ViewChild('heroesTable') heroesTable!: TableComponent

  constructor(private heroesService: HeroesService) {
    this.findAll()
  }

  findAll() {
    this.isLoading = true
    this.heroesService.getHeroes().subscribe((response) => {
      this.heroes = response
      this.isLoading = false
    })
  }
}
