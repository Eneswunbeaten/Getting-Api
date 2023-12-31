import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialListComponent } from './social-list.component';

describe('SocialListComponent', () => {
  let component: SocialListComponent;
  let fixture: ComponentFixture<SocialListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SocialListComponent]
    });
    fixture = TestBed.createComponent(SocialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
