import { INFERRED_TYPE } from '@angular/compiler/src/output/output_ast';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent{
  @Input()
  value!: 'X' | 'O';
}
