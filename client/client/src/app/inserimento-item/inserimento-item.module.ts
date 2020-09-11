import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InserimentoItemPageRoutingModule } from './inserimento-item-routing.module';

import { InserimentoItemPage } from './inserimento-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InserimentoItemPageRoutingModule
  ],
  declarations: [InserimentoItemPage]
})
export class InserimentoItemPageModule {}
