import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


import { EmployeeTransferComponent } from 'src/app/shared/components/employee-transfer/employee-transfer.component';
import { SharedService } from 'src/app/shared/services/shared.service';
import { constants } from 'src/app/shared/constants/constant';
import { AuthService } from 'src/app/shared/services/auth.service';


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
  Employees: any[] = [];
  displayedColumns: string[] = ['ID', 'Name', 'Start Date', 'Department', 'Score', 'Phone Number', 'Status', 'Actions'];
  dataSource: MatTableDataSource<any>;
  searchString: any = "";
  isPrint: boolean = false;
  certificateData: any = {};
  certificate: boolean = false;
  departMentConstants: any = constants.departments;
  userInfo: any;

  constructor(private sharedService: SharedService,
    private router: Router,
    public dialog: MatDialog,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.Employees);
    this.userInfo = this.authService.getUserInfo();
    this.getEmployees();

  }
  //fetch all the employees
  getEmployees() {
    let args: any = {};
    this.sharedService.getEmployes().subscribe(res => {
      if (res.status == "Success") {
        console.log(res)
        this.Employees = res.data.filter((x: any) => x.Dept_Id == this.userInfo.Dept_Id);
        this.dataSource = new MatTableDataSource(this.Employees);
        this.setPageSizeOptions();
        this.dataSource.paginator = this.paginator;

      }

    })
  }
  ngAfterViewInit() {
  }
  // run when we click pagenation
  onPage(event: any) {
    console.log("pageevent" + event)
  }
  //sorting function
  sortData(sort: Sort) {
    let field = sort.active;
    if (sort.direction == 'asc') {
      this.Employees = this.Employees.sort((a, b) => a[field] > b[field] ? 1 : -1);
    } else {
      this.Employees = this.Employees.sort((a, b) => a[field] > b[field] ? -1 : 1);

    }
    this.dataSource.data = this.Employees;
  }
  //global search
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  //set page sizeoptions
  setPageSizeOptions() {
    if (this.Employees.length <= 10) {
      this.pageSizeOptions.push(10);
    } else {
      for (let i = 0; i < Math.round(this.Employees.length / 10); i++) {
        this.pageSizeOptions.push((i + 1) * 10);
      }
    }
  }
  //navigate profile page
  viewProfile(employee: any) {
    if (employee &&
      employee.Emp_Id) {
      this.router.navigateByUrl(`/app/profile/${employee.Emp_Id}`);
    }
  }
  //accept the transfer request by clicking bell icon
  acceptRequest(item: any) {
    item.isConfirm = true;
    const dialogRef = this.dialog.open(EmployeeTransferComponent, { height: '170px', width: '325px', data: item });
    dialogRef.afterClosed().subscribe(result => {
      this.getEmployees();
      console.log(`Dialog result: ${result}`);
    });
  }
  //open dialog for transfer request
  openDialog(data: any) {
    const dialogRef = this.dialog.open(EmployeeTransferComponent, { height: '190px', width: '325px', data: data });

    dialogRef.afterClosed().subscribe(result => {
      this.getEmployees();
      console.log(`Dialog result: ${result}`);
    });
  }
  //print the certificate 
  print(employee: any) {
    this.certificateData = employee;
    this.certificate = true;
    setTimeout(() => {
      this.isPrint = true;
      window.print();
      setTimeout(() => {
        this.isPrint = false;
        this.certificate = false;
      }, 500)
    }, 1000);
  }
  //open the dialog for changing the employee status
  changeStatus(item: any) {
    item.isChangeStatus = true;
    const dialogRef = this.dialog.open(EmployeeTransferComponent, { height: '190px', width: '325px', data: item });
    dialogRef.afterClosed().subscribe(result => {
      this.getEmployees();
      console.log(`Dialog result: ${result}`);
    });
  }
}

