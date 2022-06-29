import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectcardlistComponent } from './selectcardlist.component';

describe('SelectcardlistComponent', () => {
  let component: SelectcardlistComponent;
  let fixture: ComponentFixture<SelectcardlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectcardlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectcardlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
