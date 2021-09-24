import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task } from '../model/task.model';
import { ListService } from '../Service/listService';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})



export class ListComponent implements OnInit {

  taskList: Task[] = [];
  task: Task;
  public form: FormGroup;

  constructor(private formB: FormBuilder, private taskService: ListService) {
    this.form = this.formB.group({
      description: ['', Validators.required]
    })
    this.task = null;
    this.taskList = [];
  }

  ngOnInit() {
    this.task = new Task();

    this.taskService.findAll().subscribe(
      response => {
        console.log(this.taskList)
        this.taskList = response;
      }
    );
  }

  createTask() {

    this.task.description = this.form.controls['description'].value;
    this.task.done = false;

    if (!this.task.id) {
      this.taskService.save(this.task).subscribe(
        data => {
          console.log(data);
          this.load();
          this.task.description='';
        }
      )
    } else {
      this.taskService.updateItem(this.task).subscribe(data => {
        this.task = {id:undefined, description:'', done:false};
        console.log(data);
        this.load();
      });
    }
  }

  removeTask(task: Task) {

    this.taskService.delete(task.id).subscribe(
      data => {

        this.load();
      }
    )
  }

  load() {
    this.taskService.findAll().subscribe(
      data => {
        this.taskList = data;
      }
    )
  }

  editTask(taskUpdate) {
    this.task = taskUpdate;
    console.log(taskUpdate);
  }

  doneTask(taskDone: Task){
    taskDone.done = true;
    this.task = taskDone;

    this.taskService.updateItem(this.task).subscribe(data => {
      this.task = {id:undefined, description:'', done:false};
      console.log(data);
      this.load();
    });
  }

  unDoneTask(taskDone: Task){
    taskDone.done = false;
    this.task = taskDone;

    this.taskService.updateItem(this.task).subscribe(data => {
      this.task = {id:undefined, description:'', done:false};
      console.log(data);
      this.load();
    });
  }

}