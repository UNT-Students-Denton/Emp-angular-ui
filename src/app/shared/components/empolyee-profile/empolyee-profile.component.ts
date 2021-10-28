import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empolyee-profile',
  templateUrl: './empolyee-profile.component.html',
  styleUrls: ['./empolyee-profile.component.scss']
})
export class EmpolyeeProfileComponent implements OnInit {
user:any={
  firstName:'kousikkumar',
  lastName:"Vasireddy",
  gender:'Male',
  DOb:"02-29-1997",
  phNo:"xxx-xxx-xxxx",
  status:'Passed',
  departMent:"Burger King",
  isActive:true,
  salary:100
}
  constructor() { }

  ngOnInit(): void {
  }

}
