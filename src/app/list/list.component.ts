import {  Component, OnInit } from '@angular/core';
import { Task } from '../model/task.model';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})



export class ListComponent implements OnInit {

  taskList: Task[] = [];
  task : String = "";


  ngOnInit() {
  }

  constructor() {
    this.task = '';
    this.taskList = [];
  }

  addTask(newTask: Task) {
    console.log(newTask);
    if (this.task != "") {
      this.taskList.push(newTask);
      this.task = "";
    }else{
      alert("Insira uma tarefa!");
    }
  }
  
  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }

  }

  editTask(taskUpdate) {
    console.log(taskUpdate);
    
    //this.data = this.data.map(it => {
     // if(index === it.id) it = taskUpdate;
      //return it;
    //})
    //this.taskListService.updateItem(task);

 }

 completeTask(): void{

 }

 //serarchTask(taskSerarch: string){
  //const search = TaskList.find((task, index, array) => task === taskSerarch);
 //}

}