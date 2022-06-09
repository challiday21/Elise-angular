import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private urlApi: string;
  taskId: any;

  constructor(private http: HttpClient) {
    this.urlApi = 'http://localhost:8080';
  }

  getAllTasks(): Observable<Task[]> {
    const token = localStorage.getItem("token");

    return this.http.get<Task[]>(`${this.urlApi}/tasks/names`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }


}
