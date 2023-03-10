import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTooltip } from '@angular/material/tooltip';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PaginatorComponent } from './paginator.component';

describe('PaginatorComponent', () => {
  let component: PaginatorComponent;
  let fixture: ComponentFixture<PaginatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MatPaginatorModule, BrowserAnimationsModule],
      declarations: [ PaginatorComponent, MatPaginator, MatTooltip ]
    })

    fixture = TestBed.createComponent(PaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
