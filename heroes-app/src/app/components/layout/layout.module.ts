import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'

import { APP_ROUTING } from 'src/app/app.routes'

import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    APP_ROUTING
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class LayoutModule { }
