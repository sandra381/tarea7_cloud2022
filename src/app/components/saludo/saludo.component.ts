import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  saludo: string ="";
  displayoption: boolean = false;
  modo: number = 0;
  constructor() { }
  ngOnInit(): void {
  }

  configurarSaludo(saludo:string){
    this.saludo=saludo;
  }
  modoSaludo(modo:number){
    this.modo = modo;
  }
  saludar(){
    if(this.modo == 0){
      alert(this.saludo);
    }else{
      this.displayoption=true;
    }
  }
}
