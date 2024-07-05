import{i as y}from"./chunk-3NBVBNCQ.js";import{Dc as _,Kc as M,Ob as d,Pb as p,Sa as m,Wa as o,Wb as x,Xa as u,Xb as C,Z as f,ia as g,j as c,nb as l,ra as h,rb as w,xb as r,yb as a,zb as v}from"./chunk-C6LWXFOC.js";var V=e=>({"slide-in":e}),A=(()=>{let t=class t{constructor(s){this.sanitizer=s,this.svgs={tick:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="url(#paint0_linear_6026_35252)"/>
          <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          <defs>
          <linearGradient id="paint0_linear_6026_35252" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#48CA93"/>
          <stop offset="1" stop-color="#48BACA"/>
          </linearGradient>
          </defs>
          </svg>`,dustbin:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="url(#paint0_linear_6026_35280)"/>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7526 6.75V7.33333H16.6693V8.5H16.0859V16.0833C16.0859 16.725 15.5609 17.25 14.9193 17.25H9.08594C8.44427 17.25 7.91927 16.725 7.91927 16.0833V8.5H7.33594V7.33333H10.2526V6.75H13.7526ZM9.08594 16.0833H14.9193V8.5H9.08594V16.0833ZM10.2526 9.66667H11.4193V14.9167H10.2526V9.66667ZM13.7526 9.66667H12.5859V14.9167H13.7526V9.66667Z" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_6026_35280" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#48CA93"/>
          <stop offset="1" stop-color="#48BACA"/>
          </linearGradient>
          </defs>
          </svg>`,warning:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="url(#paint0_linear_6026_35161)"/>
          <path d="M12 9V14" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <circle cx="12" cy="17" r="1" fill="white"/>
          <defs>
          <linearGradient id="paint0_linear_6026_35161" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#DBA948"/>
          <stop offset="0.0001" stop-color="#FFC46B"/>
          <stop offset="1" stop-color="#FFA318"/>
          </linearGradient>
          </defs>
        </svg>`,cross:`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="6" fill="url(#paint0_linear_6026_35312)"/>
          <path d="M15 9.00002L9 15M8.99997 9L14.9999 15" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
          <defs>
          <linearGradient id="paint0_linear_6026_35312" x1="12" y1="0" x2="12" y2="24" gradientUnits="userSpaceOnUse">
          <stop stop-color="#E88B76"/>
          <stop offset="1" stop-color="#CA5048"/>
          </linearGradient>
          </defs>
          </svg>`}}ngOnChanges(){this.svgCode=this.sanitizer.bypassSecurityTrustHtml(this.svgs[this.svgType])}};t.\u0275fac=function(i){return new(i||t)(u(y))},t.\u0275cmp=g({type:t,selectors:[["app-notification-alert"]],inputs:{title:"title",alertClass:"alertClass",message:"message",isVisible:"isVisible",svgType:"svgType"},standalone:!0,features:[h,x],decls:8,vars:9,consts:[["role","alert",3,"ngClass"],[1,"d-flex","align-items-center","ps-2","pe-3"],[3,"innerHTML"],[1,"alert-contents"],[1,"alert-title","m-0"],[1,"m-0"]],template:function(i,n){i&1&&(r(0,"div",0)(1,"div",1),v(2,"div",2),a(),r(3,"div",3)(4,"p",4),d(5),a(),r(6,"p",5),d(7),a()()()),i&2&&(w("alert ",n.alertClass," m-0 d-flex p-2"),l("ngClass",C(7,V,n.isVisible)),o(2),l("innerHTML",n.svgCode,m),o(3),p(n.title),o(2),p(n.message))},dependencies:[M,_],styles:[".alert[_ngcontent-%COMP%]{width:25%;position:fixed;top:-100px;left:50%;transform:translate(-50%);z-index:1050}.slide-in[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_slideIn .5s forwards;top:25px}@keyframes _ngcontent-%COMP%_slideIn{0%{transform:translate(-50%) translateY(-100%)}to{transform:translate(-50%) translateY(0)}}.alert-contents[_ngcontent-%COMP%] > p[_ngcontent-%COMP%]{color:#27303a}.alert-title[_ngcontent-%COMP%]{font-weight:500}.alert-success[_ngcontent-%COMP%]{background-color:#f6fff9;border:1px solid #48C1B5}.alert-danger[_ngcontent-%COMP%]{background-color:#fff5f3;border:1px solid #F4B0A1}.alert-warning[_ngcontent-%COMP%], .alert-delete[_ngcontent-%COMP%]{background-color:#fffcf3;border:1px solid #F4E1A4}"]});let e=t;return e})();var P=(()=>{let t=class t{constructor(){this.notificationSource=new c,this.notification$=this.notificationSource.asObservable()}showNotification(s,i,n,b){this.notificationSource.next({title:s,message:i,isVisible:!0,svgType:n,alertClass:b}),setTimeout(()=>{this.notificationSource.next({isVisible:!1})},3e3)}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=f({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();export{A as a,P as b};
