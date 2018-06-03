import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RegistracionPage } from './registracion';

@NgModule({
  declarations: [
    RegistracionPage,
  ],
  imports: [
    IonicPageModule.forChild(RegistracionPage),
  ],
})
export class RegistracionPageModule {}
