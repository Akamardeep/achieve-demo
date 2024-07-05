import{a as c,v as e,w as o,x as h}from"./chunk-3NBVBNCQ.js";import{Z as a,ca as p,da as E}from"./chunk-C6LWXFOC.js";var S=(()=>{let i=class i{constructor(t){this.http=t,this.authService=E(h),this.userId=this.authService.userId()}getGoals(t){let r=o.ACHIEVE_API_HOST+e.GET_GOALS_BY_USERID+"/"+t;return this.http.get(r)}getGoalCount(t){let r=o.ACHIEVE_API_HOST+e.GOAL_COUNT;return this.http.post(r,t)}getAssociates(){let t=o.POWER_HCM_ORG_API+e.GET_ASSOCIATES+"/"+this.userId;return this.http.get(t)}postGoal(t){let r=o.ACHIEVE_API_HOST+e.USER_GOAL;return this.http.post(r,t)}deleteGoal(t){let r=o.ACHIEVE_API_HOST+e.USER_GOAL+"/"+t;return this.http.delete(r)}updateGoals(t,r){let n=o.ACHIEVE_API_HOST+e.USER_GOAL+"/"+t;return this.http.put(n,r)}getUserKra(){let t=o.ACHIEVE_API_HOST+e.USER_KRA+"/"+this.userId;return this.http.get(t)}goalVsKraMapping(t){let r=o.ACHIEVE_API_HOST+e.POST_GOAL_VS_KRA_MAP;return this.http.post(r,t)}getGoalVsKraMapping(t){let r=o.ACHIEVE_API_HOST+e.GET_GOAL_VS_KRA_MAP+"/"+t;return this.http.get(r)}goalVsKraEditMapping(t,r){let n=o.ACHIEVE_API_HOST+e.POST_GOAL_VS_KRA_MAP+"/"+r;return this.http.put(n,t)}};i.\u0275fac=function(r){return new(r||i)(p(c))},i.\u0275prov=a({token:i,factory:i.\u0275fac});let s=i;return s})();var g=(()=>{let i=class i{constructor(t,r){this.http=t,this.authService=r,this.getUserConfigWithOrgId().subscribe(n=>{this.config=n})}getUserConfigWithOrgId(){let t=this.authService.userInfo().orgId,r=`${o.ACHIEVE_API_HOST}${e.GET_USER_CONFIG}/${t}`;return this.http.get(r)}getConfig(){return this.config}};i.\u0275fac=function(r){return new(r||i)(p(c),p(h))},i.\u0275prov=a({token:i,factory:i.\u0275fac,providedIn:"root"});let s=i;return s})();var N=(()=>{let i=class i{constructor(t){this.http=t,this.authService=E(h)}getComments(t=5){let r=o.ACHIEVE_API_HOST+e.GET_ALL_COMMENTS;return this.http.get(r)}getCommentsByGoalId(t){let r=o.ACHIEVE_API_HOST+e.GET_COMMENTS_BY_GOAL_ID+"/"+t;return this.http.get(r)}postCommentByGoalId(t){let r=o.ACHIEVE_API_HOST+e.POST_COMMENT;return this.http.post(r,t)}deleteComment(t){let r=o.ACHIEVE_API_HOST+e.DELETE_COMMENT+"/"+t;return this.http.delete(r)}updateComment(t,r){let n=o.ACHIEVE_API_HOST+e.UPDATE_COMMENT+"/"+t;return this.http.put(n,r)}};i.\u0275fac=function(r){return new(r||i)(p(c))},i.\u0275prov=a({token:i,factory:i.\u0275fac});let s=i;return s})();export{S as a,g as b,N as c};
