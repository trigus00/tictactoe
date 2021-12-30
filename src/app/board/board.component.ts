import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  square!: any[]; 
  xIsNext!: boolean;
  winner!:string;
  constructor() { }

  ngOnInit(): void {
    this.newGame; 
  }
  newGame(){
    this.square = Array(9).fill(null);
    this.winner = '';
    this.xIsNext = true;
  }
  get player(){
    return this.xIsNext ? 'X':'O';
  }
  makeMove(idx:number){
    if(!this.square[idx]){
      this.square.splice(idx,1,this.player);
      this.xIsNext = !this.xIsNext;
    }
    this.winner = this.calculateWinner();
  }
  calculateWinner(){
    // winning the games 
      const lines = [
        // horizontal lines 
        [0,1,2], 
        [3,4,5],
        [6,7,8],
        // vertical lines 
        [0,3,6],
        [1,4,7],
        [2,5,8],
        // diagonal lines 
        [0,4,8],
        [2,4,6]
      ];
      for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        
        if (this.square[a] && this.square[a] === this.square[b] &&this.square[a] === this.square[c]){
          return this.square[a];
        }  
      return null;
    }
  }
  
}
