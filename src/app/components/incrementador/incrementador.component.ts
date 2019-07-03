import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: ['./incrementador.component.css']
})
export class IncrementadorComponent implements OnInit {
  @ViewChild( 'txtProgress', { read: true, static: false }) txtProgress: ElementRef;

  constructor() { }

  @Input() leyenda: string;
  @Input() progreso: number;
  @Output() cambioValor: EventEmitter<number> = new EventEmitter();



  ngOnInit() {
  }

  onChanges( newValue: number) {



    if( newValue >= 100){
      this.progreso = 100;
    } else if(  newValue <= 0 ){
      this.progreso = 0;
    } else {
      this.progreso = newValue;
    }

    this.txtProgress.nativeElement.value = this.progreso;

    this.cambioValor.emit(this.progreso);

    this.txtProgress.nativeElement.focus();
  }
  cambiarValor( valor: any ){

    if ( this.progreso >= 100 && valor > 0) {
      this.progreso = 100;
      return;
    }
    if ( this.progreso <= 0 && valor < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + valor;
    this.cambioValor.emit(this.progreso);
  }

}
