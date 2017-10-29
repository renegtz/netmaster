import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletarpagoComponent } from './completarpago.component';

describe('CompletarpagoComponent', () => {
  let component: CompletarpagoComponent;
  let fixture: ComponentFixture<CompletarpagoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompletarpagoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompletarpagoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
