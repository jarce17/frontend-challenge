import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './pages/home/home.component'
import { HeroComponent } from './pages/hero/hero.component'

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: '**', component: HomeComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
