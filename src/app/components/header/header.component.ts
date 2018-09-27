//Sin esto nuestra clase HeaderComponent seria una clase comun y corriente, s enecesita decorarla para que funcione como un component
import { Component } from '@angular/core';
import { Template } from '../../../../node_modules/@angular/compiler/src/render3/r3_ast';

//Decorador
@Component({
	//como va a cargar (cuando lo necesite usar, asi se invoca)
	selector: 'app-header',
	//Se genera un archivo Html del mismo nombre y ahi ponemso todo el html, aqui solo lo referenciamos.
	templateUrl: './header.component.html'
})
export //las clases del modulo que se van a usar deben tener "export" sino, no se van a ver
class HeaderComponent {}
