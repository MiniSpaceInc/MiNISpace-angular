import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSearchFormComponent } from './events-search-form.component';

describe('EventsSearchFormComponent', () => {
  let component: EventsSearchFormComponent;
  let fixture: ComponentFixture<EventsSearchFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsSearchFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EventsSearchFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
