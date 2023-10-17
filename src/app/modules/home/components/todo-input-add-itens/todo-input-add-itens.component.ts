import { Component,EventEmitter,OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-todo-input-add-itens',
  templateUrl: './todo-input-add-itens.component.html',
  styleUrls: ['./todo-input-add-itens.component.scss']
})
export class TodoInputAddItensComponent {

  @Output() public emmiiItem = new EventEmitter();

  public addItem: string = "";
  
  constructor(){}

  ngOnInit(): void{

  }

  public submitItem(){

    this.addItem = this.addItem.trim();
    if(this.addItem.length){
      this.emmiiItem.emit(this.addItem);
      this.addItem = "";
    }
    
  }

}
