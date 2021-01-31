import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  display: string = '0';
  stack: number = 0;
  operation: string = '';
  cleanOnNextNumber: boolean = false;
  isDec: boolean = false;

  clic_Num(event: any){
    if (this.display == '0') {
       this.display = event.target.outerText;
    } else if (this.cleanOnNextNumber) {
       this.display = event.target.outerText;
    } else {
        this.display = this.display.trim() + event.target.outerText.trim();
    }
    this.cleanOnNextNumber = false;
  }

  clic_AC(event: any){
    this.display = '0';
    this.stack = 0;
  }

  clic_Dec(event: any){
    if (this.display == '0') {
      this.display = '0.';
    } else if (this.cleanOnNextNumber) {
      this.display = event.target.outerText;
    }
  }
  
  clic_Per(event: any){
    if (this.display != '0') {
      this.display = '' + (+this.display/100);
      this.operation = '';
      this.stack = 0;
      this.cleanOnNextNumber = true;
    } 
  }

  clic_Sig(event: any){
    if (this.display != '0') {
      this.display = '' + (+this.display * -1);
    } 
  }

  clic_Igual(event: any){
      // console.log(this.display + this.operation + this.stack + '=');
      if (this.operation.trim() == '+') {
        this.display = '' + (this.stack + +this.display);
      } else if (this.operation.trim() == '-') {
        this.display = '' + (this.stack - +this.display);
      } else if (this.operation.trim() == '×') {
        this.display = '' + (this.stack * +this.display);
      } else if (this.operation.trim() == '÷') {
        this.display = '' + (this.stack / +this.display);
      } else {
        this.display = 'Error'
      }
      // console.log(this.display),
      this.operation = '';
      this.stack = 0;
      this.cleanOnNextNumber = true;
  }
  clic_Ope(event: any) {
      this.stack = +this.display;
      this.operation = event.target.outerText;
      this.cleanOnNextNumber = true;
      console.log(event);
  }
  
  estiloBotao (){
   return {
      backgroundColor: 'white',
      color: 'blue'
    };
  }


}
