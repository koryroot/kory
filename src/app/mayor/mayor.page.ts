import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mayor',
  templateUrl: './mayor.page.html',
  styleUrls: ['./mayor.page.scss'],
})
export class MayorPage implements OnInit {

  constructor() { }

  public num1 = 0;
  public num2 = 0;
  public resultado = "";

  ngOnInit() {
  }
  Mayor(){
    if(this.num1 > this.num2)
    {
      this.resultado= "El mayor de los numeros es: "+this.num1
    }
    else if (this.num2 > this.num1)
    {
      this.resultado= "El mayor de los numeros es: "+this.num2
    }
    else
    {
      this.resultado="Ambos numeros son iguales "
    }
  }


}
