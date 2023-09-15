import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: '<h1>satyam{{title}} kumar</h1>',
  styles: [`h1{
    color:blue;
  }`]
})
export class ourComponent {
  title = 'crudAngularProject';
}
