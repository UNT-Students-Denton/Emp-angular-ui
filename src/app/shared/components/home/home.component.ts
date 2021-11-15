import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth.service';
import { SharedService } from '../../services/shared.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  dept: any[] = [
    {
      dept_name: "Fuzzys Taco Shop",
      file_name: "/assets/dining_images/fuzzys2.png",
      class_name: "t-card"

    },
    {
      dept_name: "Chick-fil-a",
      file_name: "/assets/dining_images/chickfila.jpg",
      class_name: "t-card"
    },
    {
      dept_name: "Burger-King",
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

  userInfo: any = {};
  subscriptions: Subscription[] = [];
  constructor(private authService: AuthService,
    private sharedService: SharedService) {
    this.userInfo = this.authService.getUserInfo();
  }

  ngOnInit(): void {
    this.buildFlexArray();
    this.getDepartMent();
  }
  //Build row data for flex style
  buildFlexArray() {
    if (this.dept.length / 4 !== 0) {
      let extraItems = Math.round(this.dept.length % 4);
      for (let i = 0; i < extraItems; i++) {
        this.dept.push({ dept_name: "", file_name: "", class_name: "" })
      }

    }
  }
  //Fetch employee department by department Id
  getDepartMent() {
    let args: any = {};
    args["Dept_Id"] = this.userInfo.Dept_Id;
    this.subscriptions.push(this.sharedService.getDepartMent(args).subscribe(res => {
      if (res.status == "Success") {
        this.dept = this.dept.filter(resp => resp.dept_name.toLowerCase() == res.data.Dept_Name.toLowerCase());
        localStorage.setItem("department", this.dept[0]['dept_name']);
      }
    }))


  }
  ngOnDestroy() {
    this.subscriptions.forEach(res => {
      if (res) {
        res.unsubscribe();
      }
    })
  }
}
