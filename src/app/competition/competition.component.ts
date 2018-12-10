import {Component, OnInit, TemplateRef} from '@angular/core';
import {Commonservices} from "../app.commonservices";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {Router} from "@angular/router";
import {Http} from "@angular/http";
import {moment} from "ngx-bootstrap/chronos/test/chain";
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css'],
  providers: [Commonservices]
})
export class CompetitionComponent implements OnInit {
  modalRef: BsModalRef;
  public serverurl;
  public fileurl;
  public competitionlist;

  constructor(private modalService: BsModalService,private router: Router,private _commonservices: Commonservices,private _http: Http,private sanitizer:DomSanitizer) {
    this.serverurl=_commonservices.url;
    this.fileurl=_commonservices.fileurl;
    this.getCompetitionList();
  }

  ngOnInit() {
  }

  getCompetitionList(){
    var link =this.serverurl+'competitionlist';
    var data = {type: 'active'};

    this._http.post(link, data)
        .subscribe(res => {
          var result = res.json();
          this.competitionlist = result.res;
          console.log(this.competitionlist);
        },error => {
          console.log("Oooops!");
        });

  }

  getDateT(timeu){
    return moment.unix(timeu).format('Do MMM, YYYY');
  }

  getbgimg(img){
    return this.sanitizer.bypassSecurityTrustStyle('url('+this.fileurl+img+')');
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
