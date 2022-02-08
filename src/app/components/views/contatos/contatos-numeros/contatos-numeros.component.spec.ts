import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosNumerosComponent } from './contatos-numeros.component';

describe('ContatosNumerosComponent', () => {
  let component: ContatosNumerosComponent;
  let fixture: ComponentFixture<ContatosNumerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosNumerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosNumerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
