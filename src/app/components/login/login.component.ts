import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';
import { Users } from '../models/Users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  usuario: string ="";
  contrasena: string ="";
  constructor(private router: Router , private share:ShareDataService) { }

  ngOnInit(): void {
  }
  ingresar(){
    this.share.setNewUser(new Users(this.usuario,this.contrasena));
    this.router.navigateByUrl('/operacion');
  }

}
