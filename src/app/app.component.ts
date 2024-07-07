import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  inputTaskValue: string = '';
  tasks: { id: number; task: string; isCompleted: boolean }[] = [];
  isComplete: boolean = false;

  addTask(e: any, task: string) {
    e.preventDefault();
    if (!task) return;
    const id = Date.now();
    const newTask = { id, task, isCompleted: false };
    this.tasks.push(newTask);
  }

  deleteTask(task: number) {
    this.tasks = this.tasks.filter((t) => t.id !== task);
  }

  completeTask(id: number) {
    const findTask = this.tasks.findIndex((task) => task.id === id);
    this.tasks[findTask].isCompleted = true;
  }

  onHandleInput(e: any) {
    if (!e) return;
    this.inputTaskValue = e.target.value;
  }

  totalTask() {
    return this.tasks.length;
  }

  totalPendingTask() {
    return this.tasks.filter((task) => !task.isCompleted).length;
  }

  totalCompletedTask() {
    return this.tasks.filter((task) => task.isCompleted).length;
  }
}
