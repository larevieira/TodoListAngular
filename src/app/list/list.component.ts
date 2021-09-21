import {  Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../model/task.model';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})



export class ListComponent implements OnInit {

  taskList: Task[] = [];
  task : Task= null;
  public form: FormGroup;


  ngOnInit() {
  }

  constructor(private formB: FormBuilder) {
    this.form = this.formB.group({
      description:['', Validators.required]
    })
    this.task = null;
    this.taskList = [];
    this.loadTask();
  }

  addTask() {
    //console.log(newTask);
    const desc = this.form.controls['description'].value;
    const id = this.taskList.length + 1;
    console.log(desc);
    if (this.task != null) {
      this.taskList.push(new Task(desc, false, id));
      this.saveTask();
      this.task = null;
      //this.taskList.push(newTask);
    }else{
      alert("Insira uma tarefa!");
    }
  }
  
  removeTask(index: number) {
    if (index > -1) {
      this.taskList.splice(index, 1);
    }
    this.saveTask();

  }

  editTask(taskUpdate) {
    console.log(taskUpdate);
    
    //this.data = this.data.map(it => {
     // if(index === it.id) it = taskUpdate;
      //return it;
    //})
    //this.taskListService.updateItem(task);

 }

 doneTask(task: Task){
   console.log(task);
   this.saveTask();
   //taskDone= true;
   //this.task.done = task.done;
 }

 saveTask(){
   const save = JSON.stringify(this.taskList);
   localStorage.setItem('taskList', save);
 }

 loadTask(){
   const save = localStorage.getItem('taskList');
   this.taskList = JSON.parse(save);
 }
 //serarchTask(taskSerarch: string){
  //const search = TaskList.find((task, index, array) => task === taskSerarch);
 //}

}