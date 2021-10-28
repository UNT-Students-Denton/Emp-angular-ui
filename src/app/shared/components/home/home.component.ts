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
      class_name: "fuzzys-card"

    },
    {
      dept_name: "Chick-Fil-A",
      file_name: "/assets/dining_images/chickfila.jpg",
      class_name: "chick-fil-a-card"
    },
    {
      dept_name: "Burger King",
      file_name: "/assets/dining_images/burger_king.jpg",
      class_name: "burger-king-card"
    },
    {
      dept_name: "Cafeteria Dining", 
      file_name: "/assets/dining_images/food-court.png",
      class_name: "cafeteria-card"
    },
    {
      dept_name: "Assistantship",
      file_name: "/assets/dining_images/UNT Student-2.png",
      class_name: "assistants-card"
    },
    {
      dept_name: "Tech Assistant",
      file_name: "/assets/dining_images/UNT Student-3.png",
      class_name: "technical-card"
    }
  ]
  positionOptions:TooltipPosition[] = ['below', 'above', 'left', 'right'];
  position = new FormControl(this.positionOptions[0]);

  constructor() { }

  ngOnInit(): void {
  }

}
