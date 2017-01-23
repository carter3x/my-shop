import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-jumbotron',
  templateUrl: 'jumbotron.component.html',
//   template: `<h1>Hello {{name}}</h1>`,
})
export class JumbotronComponent  {

    private jbtHeading: string;
    private jbtText: string;
    private jbtBtnText: string;
    private jbtBtnUrl: string;

    constructor(){
    this.jbtHeading = 'Sample Shop';
    this.jbtText = 'Welcome to the online shop';
    this.jbtBtnText = 'View Products';
    this.jbtBtnUrl ='/about';
}


}