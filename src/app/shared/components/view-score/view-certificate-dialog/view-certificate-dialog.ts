import { Router } from "@angular/router";
import { MatDialog} from "@angular/material/dialog";
import { AuthService } from "src/app/shared/services/auth.service";
import { Component} from '@angular/core';
@Component({
    selector: 'view-certificate-dialog.component',
    templateUrl: './view-certificate-dialog.component.html',
    styleUrls: ['view-certificate-dialog.scss']
  })
  export class ViewCertificateDialog {
    constructor(public dialog: MatDialog,
        private router: Router,
        private authService: AuthService) { }
    close(){
      this.dialog.closeAll();
    }
    redirectToCertificate(){
      this.close();
        this.router.navigateByUrl('app/certificate');
      }
  }