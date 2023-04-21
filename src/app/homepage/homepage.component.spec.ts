import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule]
    })
      .compileComponents();
  });


  it('should create', () => {
    const fixture = TestBed.createComponent(HomepageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

});
