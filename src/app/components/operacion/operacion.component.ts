import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from 'src/app/services/share-data.service';
import { SaludoComponent } from '../saludo/saludo.component';

@Component({
  selector: 'app-operacion',
  templateUrl: './operacion.component.html',
  styleUrls: ['./operacion.component.scss']
})
export class OperacionComponent implements OnInit,AfterViewInit {
  @ViewChild('saludo1') saludar1 : SaludoComponent = new SaludoComponent();
  @ViewChild('saludo2') saludar2 : SaludoComponent = new SaludoComponent();
  usuario: string ="";
  constructor(private share: ShareDataService, private router:Router) { }

  ngOnInit(): void {
    this.share.currentuser.subscribe(x => {
      this.usuario = x.usuario;
      if(x.usuario ==''&& x.contrasena==''){
        this.router.navigateByUrl('/');
      }
    });
  }
  ngAfterViewInit(): void{
    this.saludar1.configurarSaludo( "Hola Amigo " + this.usuario +" :)");
    this.saludar1.modoSaludo(0);

    this.saludar2.configurarSaludo(" Que ondas " + this.usuario +" :)");
    this.saludar2.modoSaludo(1);
  }
}

