import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InserimentoItemPage } from './inserimento-item.page';

describe('InserimentoItemPage', () => {
  let component: InserimentoItemPage;
  let fixture: ComponentFixture<InserimentoItemPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InserimentoItemPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InserimentoItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
