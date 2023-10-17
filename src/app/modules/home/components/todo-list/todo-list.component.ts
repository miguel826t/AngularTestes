import { Component,DoCheck,OnInit } from '@angular/core';
import { Task } from '../../model/task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements DoCheck{

  public taskList: Array<Task> = JSON.parse(localStorage.getItem("list") || '[]');

  constructor(){}
  
  ngOnInit(): void{}

  ngDoCheck(): void {
    this.setLocalStorage();
  }

  public setEmitTask(event: String){
    this.taskList.push({task: event,checked: false});
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

  public setLocalStorage(){
    if(this.taskList){
      this.taskList.sort((first,last) => Number(first.checked) - Number(last.checked));
      localStorage.setItem("list",JSON.stringify(this.taskList));
    }
  }  

    

}
