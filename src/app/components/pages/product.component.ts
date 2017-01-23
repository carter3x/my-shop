import { Component } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';


@Component({
  moduleId: module.id,
  selector: 'app-products',
  templateUrl: 'product.component.html',
//   template: `<h1>Hello {{name}}</h1>`,
})

export class ProductComponent  {
  items: FirebaseListObservable<any[]>;
constructor(af: AngularFire) {
    this.items = af.database.list('/items');
  }
}