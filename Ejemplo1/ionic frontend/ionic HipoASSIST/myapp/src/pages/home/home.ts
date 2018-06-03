import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PruebaPage } from '../prueba/prueba';
import { RegistracionPage } from '../registracion/registracion';
import { InformacionPage } from '../informacion/informacion';
import { ErrorloginPage } from '../errorlogin/errorlogin';
import { ServiceAddUserProvider } from '../../providers/service-add-user/service-add-user';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  regData = { name:''};
  userExist : any;
  constructor(public navCtrl: NavController, public userLogin: ServiceAddUserProvider) {
  }

    login(){
      
    this.userLogin.LogUser(this.regData).then((result)=>{
      this.userExist = result;
     if (result !=null && this.userExist.name == this.regData.name) {
      this.navCtrl.push(InformacionPage);
     }else{
      this.navCtrl.push(ErrorloginPage);
     }
      
    },
      (error)=>{console.log("Hubo un error en la ejecucion");    
    });
    
   }

  irPagePrueba(){
    this.navCtrl.push(PruebaPage);
  }    

  registarUser(){
    this.navCtrl.push(RegistracionPage);
  }

  logUser()
  {
    this.navCtrl.push(InformacionPage)
  }
    
  
}

