import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { HeroesService } from '../../services/heroes.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TableComponent } from '../../components/table/table.component';
import { ComponentsModule } from '../../components/components.module';
import { PaginatorComponent } from '../../components/paginator/paginator.component';
import { MatPaginatorModule, MatPaginator } from '@angular/material/paginator';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  //const service = new HeroesService(new HttpClient())

  /* beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    //component = new HomeComponent(service)
  }); */

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ComponentsModule, HttpClientModule, MatPaginatorModule],
      declarations: [ HomeComponent, MatPaginator ],
      providers: [HeroesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /* it('Init: Debe cargar los héroes', () => {
    spyOn(service, 'getHeroes').and.returnValues()

    component.findAll()
  }) */
});
