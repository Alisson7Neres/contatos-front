import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosNumerosDeleteComponent } from './contatos-numeros-delete.component';

describe('ContatosNumerosDeleteComponent', () => {
  let component: ContatosNumerosDeleteComponent;
  let fixture: ComponentFixture<ContatosNumerosDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosNumerosDeleteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosNumerosDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
