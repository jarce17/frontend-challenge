import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core'
import { MatPaginator } from '@angular/material/paginator'
import { MatTableDataSource } from '@angular/material/table'
import { Hero } from 'src/app/models/hero'
import { HeroesService } from 'src/app/services/heroes.service'
import Swal from 'sweetalert2'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  @Input() set heroes(array: Hero[]){
    this._heroes=array
    this.filteredHeroes = this._heroes
    this.dataSource = new MatTableDataSource<Hero>(this._heroes)
    this.dataSource.paginator = this.paginator
  }
  @Output() onDeleteHero = new EventEmitter<boolean>()

  _heroes: Hero[] = []
  dataSource!: MatTableDataSource<Hero>
  filteredHeroes: Hero[] = []
  displayedColumns: string[] = ['name', 'height', 'superpower', 'actions']

  @ViewChild(MatPaginator) paginator!: MatPaginator

  constructor(private heroesService: HeroesService) { }

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
          this.onDeleteHero.emit(true)
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
