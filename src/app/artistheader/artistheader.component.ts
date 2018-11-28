import {Component, OnInit, TemplateRef} from '@angular/core';
import {BsModalService, BsModalRef} from "ngx-bootstrap";
import {Commonservices} from "../app.commonservices";
import {Router} from "@angular/router";

@Component({
  selector: 'app-artistheader',
  templateUrl: './artistheader.component.html',
  styleUrls: ['./artistheader.component.css'],
  providers: [Commonservices]
})
export class ArtistheaderComponent implements OnInit {
  modalRef: BsModalRef;

  constructor(private modalService: BsModalService,private router: Router) { }

  ngOnInit() {
  }

  showPopup(template: TemplateRef<any>){
    this.modalRef = this.modalService.show(template);
  }

  closep(){
    this.modalRef.hide();
  }

  gotoSignUp(){
    this.modalRef.hide();
    this.router.navigateByUrl('/signup');
  }

}
