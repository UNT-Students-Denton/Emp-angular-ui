import { Component, Inject, OnInit, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { EmployeesComponent } from 'src/app/admin/employees/employees.component';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-employee-transfer',
  templateUrl: './employee-transfer.component.html',
  styleUrls: ['./employee-transfer.component.scss']
})
export class EmployeeTransferComponent implements OnInit {
  subscriptions:Subscription[]=[];
  dropDownItems: any[] = [
    { value: '', viewValue: 'Select' },
    { value: 'Fuzzys Taco Shop', viewValue: 'Fuzzys Taco Shop' },
    { value: 'Chick-fil-a', viewValue: 'Chick-fil-a' },
    { value: 'Burger-King', viewValue: 'Burger-King' },
    { value: 'Cafeteria', viewValue: 'Cafeteria' },
    { value: 'Assistantship', viewValue: 'Assistantship' },
    { value: 'Tech Assistants', viewValue: 'Tech Assistants' },
  ];
  statusOptions: any[] = [
    { value: '', viewValue: 'Select' },
    { value: 'In-Complete', viewValue: 'In-Complete' },
    { value: 'Complete', viewValue: 'Complete' }
  ];
  transferDept:any="Select";
  errorMsg:any="";
  constructor( public dialogRef: MatDialogRef<EmployeesComponent>,
     @Optional() @Inject(MAT_DIALOG_DATA) public data: Data,
  private sharedService:SharedService) {
    if(data["isChangeStatus"]){
      this.dropDownItems=this.statusOptions;
      this.dropDownItems=this.dropDownItems.filter(s=>s.value!==data.Training_Status)

    }else{
      this.dropDownItems=this.dropDownItems.filter(s=>s.value!==data.Dept_Name)

    }
  }

  ngOnInit(): void {
  }
  transfer(){
    let args:any={};
    args["Dept_Id"]=this.data.Dept_Id;
    args["Dept_Name"]=this.transferDept;
    args["isTransfer"]=true;
    this.subscriptions.push(this.sharedService.transferEmployee(args).subscribe(res=>{
      if(res.status=='Success'){
        this.dialogRef.close();
      }else{
     this.errorMsg="Error in Transfering Employee"
      }
    },error=>{
      this.errorMsg="Error in Transfering Employee"

    }))
  }
  statusChange(){
    let args:any={};
    args["Emp_Id"]=this.data.Dept_Id;
    args["Training_Status"]=this.transferDept;
    this.subscriptions.push(this.sharedService.updateEmployee(args).subscribe(res=>{
      if(res.status=='Success'){
        this.dialogRef.close();
      }else{
     this.errorMsg="Error in Changing Employee Status";
      }
    },error=>{
      this.errorMsg="Error in Changing Employee Status";

    }))
  }
  ngOnDestroy(){
    this.subscriptions.forEach(res=>{
      if(res){
        res.unsubscribe();
      }
    })
  }
}
