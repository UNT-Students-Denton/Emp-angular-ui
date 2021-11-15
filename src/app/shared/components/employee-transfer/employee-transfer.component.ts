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
    { value: 1, viewValue: 'Fuzzys Taco Shop' },
    { value: 2, viewValue: 'Chick-fil-a' },
    { value: 3, viewValue: 'Burger-King' },
    { value: 4, viewValue: 'Cafeteria' },
    { value: 6, viewValue: 'Assistantship' },
    { value: 5, viewValue: 'Tech Assistants' },
  ];
  statusOptions: any[] = [
    { value: '', viewValue: 'Select' },
    { value: 'Not Completed', viewValue: 'Not Completed' },
    { value: 'Completed', viewValue: 'Completed' }
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
      this.dropDownItems=this.dropDownItems.filter(s=>s.value!==data.Dept_Id)

    }
  }

  ngOnInit(): void {
  }
  transferRequest(){
    let args:any={};
    args["Emp_Id"]=this.data.Emp_Id;
    args["transfer_department"]=(this.dropDownItems.filter(x=>x.viewValue==this.transferDept)[0]["value"]).toString();;
    args["is_transfer_request"]=true;
    this.subscriptions.push(this.sharedService.requestTransfer(args).subscribe(res=>{
      if(res.status=='Success'){
        this.dialogRef.close();
      }else{
     this.errorMsg="Error in Transfering Employee"
      }
    },error=>{
      this.errorMsg="Error in Transfering Employee"

    }))
  }
  
  transfer(isTransfer:boolean){
    let args:any={};
    args["Dept_Id"]=this.data.Dept_Id;
    args["User_Id"]=this.data.User_Id;
    if(isTransfer){
      args["Dept_Id"]=parseInt(this.data.transfer_department);
      args["transfer_department"]=null;
      args["is_transfer_request"]=0;
    }else{
      args["Dept_Id"]=this.dropDownItems.filter(x=>x.viewValue==this.transferDept)[0]["value"];

    }
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
    args["Emp_Id"]=this.data.Emp_Id;
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
