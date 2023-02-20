import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MacdonaldsCareerPage } from './macdonalds-career.page';

describe('MacdonaldsCareerPage', () => {
  let component: MacdonaldsCareerPage;
  let fixture: ComponentFixture<MacdonaldsCareerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MacdonaldsCareerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MacdonaldsCareerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
