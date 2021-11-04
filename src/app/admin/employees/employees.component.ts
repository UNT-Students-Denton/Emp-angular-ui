import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EmployeeTransferComponent } from 'src/app/shared/components/employee-transfer/employee-transfer.component';
import { SharedService } from 'src/app/shared/services/shared.service';


@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  pageSize = 10;
  pageSizeOptions: number[] = [];
  // MatPaginator Output
  pageEvent: PageEvent;
  Employees:any[]=[];
  displayedColumns: string[] = ['ID', 'Name','Start Date', 'Department', 'Score','Phone Number','Actions'];
  dataSource: MatTableDataSource<any>;
  searchString:any="";
  constructor(private sharedService:SharedService,
    private router:Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.Employees);
    this.getEmployees();
  
  }
  getEmployees(){
    
this.sharedService.getEmployes().subscribe(res=>{
  if(res.status=="Success"){
    console.log(res)
   this.Employees=res.data;
   this.dataSource = new MatTableDataSource(this.Employees);
   this.setPageSizeOptions();
  }

})
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
}
onPage(event:any){
  console.log("pageevent"+event)
}
sortData(sort:Sort){
  let field=sort.active;
  if(sort.direction=='asc'){
    this.Employees=this.Employees.sort((a,b)=>a[field]>b[field]?1:-1);
  }else{
    this.Employees=this.Employees.sort((a,b)=>a[field]>b[field]?-1:1);

  }
  this.dataSource.data=this.Employees;
}
applyFilter(filterValue: string) {
  this.dataSource.filter = filterValue.trim().toLowerCase();
  console.log(this.dataSource.filter);
  if (this.dataSource.paginator) {
    this.dataSource.paginator.firstPage();
  }
}
setPageSizeOptions(){
  if(this.Employees.length<=10){
    this.pageSizeOptions.push(10);
  }else{
    for(let i=0;i<Math.round(this.Employees.length/10);i++){
      this.pageSizeOptions.push((i+1)*10);
    }
  }
}
buildAddress(){

}
viewProfile(employee:any){
  if(employee && 
    employee.Emp_Id){
  this.router.navigateByUrl(`/app/profile/${employee.Emp_Id}`);
  }
}
openDialog() {
  const dialogRef = this.dialog.open(EmployeeTransferComponent,{height:'190px',width:'325px'});

  dialogRef.afterClosed().subscribe(result => {
    console.log(`Dialog result: ${result}`);
  });
}
}

