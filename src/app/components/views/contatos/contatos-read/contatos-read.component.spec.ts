import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatosReadComponent } from './contatos-read.component';

describe('ContatosReadComponent', () => {
  let component: ContatosReadComponent;
  let fixture: ComponentFixture<ContatosReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContatosReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContatosReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
