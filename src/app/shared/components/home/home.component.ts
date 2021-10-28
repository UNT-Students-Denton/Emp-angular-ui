import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {TooltipPosition} from '@angular/material/tooltip';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dept:any[]=[
    { 
      dept_name: "Fuzzys Taco Shop",
      file_name: "/assets/dining_images/fuzzys2.png",
      class_name: "t-card"

    },
    {
      dept_name: "Chick-Fil-A",
      file_name: "/assets/dining_images/chickfila.jpg",
      class_name: "t-card"
    },
    {
      dept_name: "Burger King",
      file_name: "/assets/dining_images/burger_king.jpg",
      class_name: "t-card"
    },
    {
      dept_name: "Cafeteria Dining", 
      file_name: "/assets/dining_images/food-court.png",
      class_name: "t-card"
    },
    {
      dept_name: "Assistantship",
      file_name: "/assets/dining_images/UNT Student-2.png",
      class_name: "t-card"
    },
    {
      dept_name: "Tech Assistant",
      file_name: "/assets/dining_images/UNT Student-3.png",
      class_name: "t-card"
    }
  ]
 

  constructor() { }

  ngOnInit(): void {
    this.buildFlexArray();
  }
buildFlexArray(){
  if(this.dept.length/4!==0){
    let extraItems=Math.round(this.dept.length%4);
    for(let i=0;i<extraItems;i++){
      this.dept.push({dept_name:"",file_name:"",class_name:""})
    }
    
  }
}
}
