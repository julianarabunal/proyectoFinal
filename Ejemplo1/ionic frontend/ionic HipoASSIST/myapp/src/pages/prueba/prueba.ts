import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { ServiceAddUserProvider } from '../../providers/service-add-user/service-add-user';


@IonicPage()
@Component({
  selector: 'page-prueba',
  templateUrl: 'prueba.html',
})
export class PruebaPage {

  constructor(public navCtrl: NavController, public proveedor : ServiceAddUserProvider) {
  }

  usuarios 

  ionViewDidLoad(){
    this.proveedor.listarUsuarios().subscribe(
      (data)=>{console.log("tetona");this.usuarios = data;},
      (error)=>{console.log("prueba ok¿¿mal");}
    )}

}
