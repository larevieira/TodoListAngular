import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task.model';
import { StorageService } from './StorageService';




const taskListStorageKey = 'Task_List';


@Injectable({
  providedIn: 'root'
})
export class ListService {

  private  taskList: Task[];
  url = 'http://localhost:8080/todoList';

  constructor(private storageService: StorageService,  private http: HttpClient) {
    this.taskList = storageService.getData(taskListStorageKey);
  }

  getTodoList() {
    return this.taskList;
  }

  findAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.url);
  }

  findById(id: number) : Observable<Task>{
    return this.http.get<Task>(`${this.url}/${id}`);
  }

  save(task: Task): Observable<Task> {
    return this.http.post<Task>(this.url, task);
  }

  delete(id: number) : Observable<Task>{
    return this.http.delete<Task>(`${this.url}/` + id);
  }
  updateItem(task: Task) : Observable<Task>{
    return this.http.put<Task>(`${this.url}/` + task.id , task);
  }
}