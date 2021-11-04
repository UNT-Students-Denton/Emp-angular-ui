import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-transfer',
  templateUrl: './employee-transfer.component.html',
  styleUrls: ['./employee-transfer.component.scss']
})
export class EmployeeTransferComponent implements OnInit {
  dropDownItems: any[] = [
    { value: 'Louis Vuitton', viewValue: 'Louis Vuitton' },
    { value: 'Gucci', viewValue: 'Gucci' },
    { value: 'Prada', viewValue: 'Prada' },
    { value: 'Chanel', viewValue: 'Chanel' },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  transfer(){

  }
}
