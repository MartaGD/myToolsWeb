import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZenbakiJokoaComponent } from './zenbaki-jokoa.component';

describe('ZenbakiJokoaComponent', () => {
  let component: ZenbakiJokoaComponent;
  let fixture: ComponentFixture<ZenbakiJokoaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZenbakiJokoaComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZenbakiJokoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
