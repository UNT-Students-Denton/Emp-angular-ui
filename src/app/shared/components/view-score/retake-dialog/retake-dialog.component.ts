import { Router } from "@angular/router";
import { MatDialog} from "@angular/material/dialog";
import { AuthService } from "src/app/shared/services/auth.service";
import { Component} from '@angular/core';
@Component({
    selector: 'retake-dialog.component',
    templateUrl: './retake-dialog.component.html',
    styleUrls: ['retake-dialog.component.scss']
  })
  export class RetakeDialog {
    constructor(public dialog: MatDialog,
      private router: Router,
      private authService: AuthService) { }
    close(){
      this.dialog.closeAll();
    }
    redirectToQuiz(){
      this.dialog.closeAll();
      this.router.navigateByUrl('app/quiz')
    }
  }
  
  

  