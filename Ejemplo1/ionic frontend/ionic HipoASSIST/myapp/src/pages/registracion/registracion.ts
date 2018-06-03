import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { ServiceAddUserProvider } from '../../providers/service-add-user/service-add-user';

@IonicPage()
@Component({
  selector: 'page-registracion',
  templateUrl: 'registracion.html',
})
export class RegistracionPage {

  regData = { name:'', age:'' };


  constructor(public navCtrl: NavController, public serviceAdd: ServiceAddUserProvider) {
  }

  register(){
    this.serviceAdd.RegistrarUser(this.regData).then((result)=>
    {
      this.navCtrl.pop();
    },(error)=>{ console.log("error al agregar");
    });
  }

}
