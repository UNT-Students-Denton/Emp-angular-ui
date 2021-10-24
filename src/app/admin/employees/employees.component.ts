import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator,PageEvent } from '@angular/material/paginator';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  // MatPaginator Output
  pageEvent: PageEvent;
  Employees:any[]=ELEMENT_DATA;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: MatTableDataSource<any>;
  searchString:any="";
  constructor() { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.Employees);
  
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
}
