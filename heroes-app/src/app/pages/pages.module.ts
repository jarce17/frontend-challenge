import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MatButtonModule } from '@angular/material/button'
import { MatIconModule } from '@angular/material/icon'
import { MatInputModule } from '@angular/material/input'
import { ReactiveFormsModule } from '@angular/forms'

import { HomeComponent } from './home/home.component'
import { HeroComponent } from './hero/hero.component'

import { ComponentsModule } from '../components/components.module'
import { AppRoutingModule } from '../app-routing.module'
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    ComponentsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
