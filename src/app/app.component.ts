import { Component } from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";
import {environment} from '../environments/environment';
import {Title} from '@angular/platform-browser';
declare  var $: any;

declare const FB: any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // title = 'app works!';
  public url;
  constructor(private router: Router,private titleService: Title) {}

  ngOnInit() {

    this.router.events.subscribe(val=> {
      if (val instanceof NavigationEnd) {
        let curUrlTree = this.router.parseUrl(this.router.url);
        this.url=this.router.url;
        $('.artistxphul li').removeClass('active');

        if(this.router.routerState.snapshot.root.firstChild.routeConfig.path == 'trending-artist'){
            $('.artistxphul .trartistli').addClass('active');
        }else if(this.router.routerState.snapshot.root.firstChild.routeConfig.path == 'competition'){
            $('.artistxphul .commpli').addClass('active');
        }else if(this.router.routerState.snapshot.root.firstChild.routeConfig.path == 'signup' || this.router.routerState.snapshot.root.firstChild.routeConfig.path == 'signup/:uname' || this.router.routerState.snapshot.root.firstChild.routeConfig.path == 'signup/:uname/:mediaid'){
            $('.artistxphul .signupli').addClass('active');
        }else{
            $('.artistxphul .homeli').addClass('active');
        }

          if (!!val.url && val.url.match(/^\/#/)) {
              this.router.navigate([val.url.replace('/#', '')]);
          }

      }
    });

      FB.init({
          appId      : '906815096194208',
          cookie     : false,
          xfbml      : true,  // parse social plugins on this page
          version    : 'v2.5' // use graph api version 2.5
      });

      if (environment.production) {
          if (location.protocol === 'http:') {
              window.location.href = location.href.replace('http', 'https');
          }
      }

  }
}
