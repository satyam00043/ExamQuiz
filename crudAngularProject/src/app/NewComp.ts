import {Component} from '@angular/core';

@Component({

    selector:'app-got',
    template:'<h1>laure ka{{title}} component {{troup*troup}}</h1>',
    styles:[`h1{
        color:green;
    }`]


})
export class newe{
    title ='sabse pajhle aapko component banane me jo lagega';
    troup=4;
    goup=8;
}