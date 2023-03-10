import { Component } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router'

import Swal from 'sweetalert2'

import { HeroesService } from '../../services/heroes.service'

import { Hero } from '../../models/hero'

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  heroForm: FormGroup
  hero: Hero | undefined
  id = ''
  isNewHero = true
  isLoading = false

  constructor(formBuilder: FormBuilder,
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.heroForm = formBuilder.group({
      name: [null, Validators.required],
      height: [null, Validators.required],
      superpower: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id') || ''
    if (this.id !== 'new') {
      this.isNewHero = false
      this.heroesService.getHero(this.id).subscribe({
        next: (hero: Hero) => {
          this.hero = hero
          this.hero.id = this.id
          this.setForm()
        },
        error: () =>
          Swal.fire({
            title: 'Error!',
            text: 'No fue posible cargar los datos de este heroe.',
            icon: 'error',
            confirmButtonText: 'Ok'
          }),
        complete: () => this.isLoading = false
      })
    }
  }

  setForm() {
    this.heroForm.patchValue(this.hero || {})
  }

  saveHeroe() {
    const hero = this.heroForm.value
    this.isLoading = true
    hero.id = this.id
    hero.name = hero.name.toLocaleUpperCase()
    this.heroesService[this.isNewHero ? 'addHero' : 'updateHero'](hero).subscribe({
      complete: () => {
        this.isLoading = false
        Swal.fire({
          title: '¡Genial!',
          text: 'El cambio se registró existosamente.',
          icon: 'success',
          showConfirmButton: false,
          timer: 2000
        })
        this.router.navigate(["/"]).then(() => { })
      },
      error: () => {
        this.isLoading = false
        Swal.fire({
          title: '¡Error!',
          text: 'No fue posible guardar los datos de este heroe.',
          icon: 'error',
          confirmButtonText: 'Ok'
        })
      }
    })
  }
}
