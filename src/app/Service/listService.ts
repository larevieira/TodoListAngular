import { Injectable } from '@angular/core';
import { StorageService } from './StorageService';



const taskListStorageKey = 'Task_List';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private  taskList: String[];

  constructor(private storageService: StorageService) {
    this.taskList = storageService.getData(taskListStorageKey);
  }

  getTodoList() {
    return this.taskList;
  }

  saveList() {
    this.storageService.setData(taskListStorageKey, this.taskList);
  }

  
  updateItem(task: String) {
    const index = this.taskList.indexOf(task);
    this.taskList[index] = { ...task};
    this.saveList();
  }



}