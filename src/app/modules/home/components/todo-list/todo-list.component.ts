import { Component,OnInit } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {

  public taskList: Array<Task> = [];

  constructor(){}

  ngOnInit(): void{

  }

  public deleteItem(event: number){
    this.taskList.splice(event,1);
  }

  public deleteAll(){
    const confirm = window.confirm("Deseja realmente deletar tudo?");
    if(confirm){
      this.taskList = [];
    }
    
  }

}
