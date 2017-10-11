import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesBuscadosComponent } from './clientes-buscados.component';

describe('ClientesBuscadosComponent', () => {
  let component: ClientesBuscadosComponent;
  let fixture: ComponentFixture<ClientesBuscadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesBuscadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesBuscadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
