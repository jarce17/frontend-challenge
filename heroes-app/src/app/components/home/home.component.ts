import { Component, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'

import Swal from 'sweetalert2'

import { HeroesService } from 'src/app/services/heroes.service'

import { Hero } from '../../models/hero'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {
  heroes: Hero[] = []
  filteredHeroes: Hero[] = []
  displayedColumns: string[] = ['name', 'height', 'superpower', 'actions']
  dataSource = new MatTableDataSource<Hero>([])
  isLoading = true

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private heroesService: HeroesService) {
    this.findAll()
  }

  findAll() {
    this.isLoading = true
    this.heroesService.getHeroes().subscribe((response) => {
      this.heroes = response
      this.filteredHeroes = response
      this.dataSource = new MatTableDataSource<Hero>(this.heroes)
      this.dataSource.paginator = this.paginator
      this.isLoading = false
    })
  }

  ngOnInit(): void { }

  applyFilter(event: Event) {
    this.heroesService.findHeroes(event, this.dataSource)
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  handleOnClickDeleteHero(selectedHero: Hero) {
    Swal.fire({
      title: '¿Estas seguro de que quieres eliminar este heroe?',
      text: "No podrás revertir este cambio.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Sí, bórralo!',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        await this.deleteHero(selectedHero)
      }
    })
  }

  deleteHero(hero: Hero) {
    return new Promise(() => {
      this.heroesService.deleteHero(hero.id).subscribe({
        complete: () => {
          this.findAll()
          Swal.fire(
            '¡Eliminado!',
            'El heroe fue eliminado exitosamente.',
            'success'
          )
        },
        error: () => Swal.fire(
          '¡Error!',
          'El heroe no pudo ser eliminado.',
          'error'
        )
      })
    })
  }
}
