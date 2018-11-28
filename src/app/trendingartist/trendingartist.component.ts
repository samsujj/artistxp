import {Component, OnInit, TemplateRef} from '@angular/core';
import {Commonservices} from "../app.commonservices";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Router} from "@angular/router";

@Component({
  selector: 'app-trendingartist',
  templateUrl: './trendingartist.component.html',
  styleUrls: ['./trendingartist.component.css'],
  providers: [Commonservices]
})
export class TrendingartistComponent implements OnInit {
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
