import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-transfer',
  templateUrl: './employee-transfer.component.html',
  styleUrls: ['./employee-transfer.component.scss']
})
export class EmployeeTransferComponent implements OnInit {
  dropDownItems: any[] = [
    { value: 'Fuzzys Taco Shop', viewValue: 'Fuzzys Taco Shop' },
    { value: 'Chick-fil-a', viewValue: 'Chick-fil-a' },
    { value: 'Burger-King', viewValue: 'Burger-King' },
    { value: 'Cafeteria', viewValue: 'Cafeteria' },
    { value: 'Assistantship', viewValue: 'Assistantship' },
    { value: 'Tech Assistants', viewValue: 'Tech Assistants' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  transfer(){

  }
}
