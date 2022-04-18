import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRepoComponent } from './find-repo.component';

describe('FindRepoComponent', () => {
  let component: FindRepoComponent;
  let fixture: ComponentFixture<FindRepoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindRepoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRepoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
