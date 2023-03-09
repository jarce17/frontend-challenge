import { Routes, RouterModule } from '@angular/router'

import { HomeComponent } from './components/home/home.component'
import { HeroComponent } from './components/hero/hero.component'

const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent },
    { path: 'hero/:id', component: HeroComponent },
    { path: '**', component: HomeComponent }
]

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES)
