import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FurtherancePage } from './furtherance.page';

describe('FurtherancePage', () => {
  let component: FurtherancePage;
  let fixture: ComponentFixture<FurtherancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurtherancePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FurtherancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
