import { Component } from '@angular/core';


@Component({
  selector: 'app-materialui',
  templateUrl: './materialui.component.html',
  styleUrls: ['./materialui.component.css']
})
export class MaterialuiComponent {
  todolist:any[]=[];
  fnAddTask(val:any){
    this.todolist.push({id:this.todolist.length,name:val})
    console.log(this.todolist);
  }
  fnRemoveTask(id:any){
    this.todolist = this.todolist.filter(item=>item.id!==id);
    console.log(this.todolist);
  }
}
