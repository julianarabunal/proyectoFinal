import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

let apiUrlUsuarios='http://localhost:8080/hipoAssist/persons';

@Injectable()
export class ServiceAddUserProvider {

  constructor(public http: HttpClient) {
    console.log('Hello ServiceAddUserProvider Provider');
  }

  listarUsuarios(){
    return this.http.get(apiUrlUsuarios +'/GetAllList');
  }

  RegistrarUser(usuario){
    
    let options={
      headers:{
        'Content-Type': 'application/json',
        'Accept':'application/json'
      }
    }

    return new Promise(resolve=>{
      this.http.post(apiUrlUsuarios+'/AddNewPerson',JSON.stringify(usuario),options)
      .subscribe(data=>{resolve(usuario);
      })
    })


    }

    LogUser(nombreUsuario){

      let options={
        headers:{
          'Content-Type':'application/json',
          'Accept':'application/json'
        }
      }

      return new Promise(resolve=>{
        this.http.post(apiUrlUsuarios+'/LoadPersonByName',JSON.stringify(nombreUsuario),options)
        .subscribe(
          data=>{
                  resolve(data);
                },(error) => {console.log("error");});
      });

    }
}
