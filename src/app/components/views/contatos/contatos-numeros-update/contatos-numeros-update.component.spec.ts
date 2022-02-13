import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosNumerosUpdateComponent } from './contatos-numeros-update.component';

describe('ContatosNumerosUpdateComponent', () => {
  let component: ContatosNumerosUpdateComponent;
  let fixture: ComponentFixture<ContatosNumerosUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosNumerosUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosNumerosUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
