(this["webpackJsonpmore-eyes-plz"]=this["webpackJsonpmore-eyes-plz"]||[]).push([[0],{100:function(e,t,a){},106:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(12),c=a.n(o),i=(a(100),a(15)),l=a.n(i),s=a(19),m=a(10),u=a(144),p=a(147),d=a(155),f=a(41),h=a(166),b=a(11),g=a(154),E=a(168),v=a(156),w=a(157),x=a(150),y=a(170),k=a(88),j=a(149),O=a(158),N=a(159),S=a(87),C=a(148),z=a(151),T=a(152),_=a(114),F=a(169),G=a(167),M=a(153),L=a(73),I=a.n(L),A=a(74),R=a.n(A),P=a(75),U=a.n(P),H=a(72),B=a.n(H),W=Object(u.a)((function(e){return{header:{paddingLeft:0},"MuiCardContent-root":{"&:last-child":{paddingBottom:0}},labelContainer:{flexFlow:"row wrap","& > *":{margin:e.spacing(.5,1,.5,0)}},searchTags:{margin:e.spacing(0,0,"8px",0)}}}));function J(e){var t=e.filterState,a=W(),o=Object(p.a)("(max-width:960px)"),c=Object(n.useMemo)((function(){return 0===t.searchString.length?t.tags:t.tags.filter((function(e){return e.name.includes(t.searchString)}))}),[t.searchString,t.tags]),i=o?null:r.a.createElement("div",null,r.a.createElement(C.a,{className:a.header,title:"\ud83d\udd16 Tags/Filter"}),r.a.createElement(j.a,null));return r.a.createElement(x.a,{elevation:0},r.a.createElement(z.a,{className:a["MuiCardContent-root"]},i,r.a.createElement(T.a,null,r.a.createElement(_.a,{className:a.labelContainer,disableGutters:!0},r.a.createElement(G.a,{id:"tag-search",className:a.searchTags,onChange:function(e){t.setSearchString(e.target.value.toLowerCase())},placeholder:"Search Tags",variant:"outlined",InputProps:{startAdornment:r.a.createElement(M.a,{position:"start"},r.a.createElement(B.a,null))},fullWidth:!0,size:"small",onClick:function(e){t.setSearchString(e.target.value)}}),c.sort((function(e,t){return e.color<t.color?-1:1})).map((function(e,a){var n,o="default";"f50057"===e.color?(n=r.a.createElement(I.a,null),o="secondary"):"555555"===e.color?n=r.a.createElement(R.a,null):"3f51b5"===e.color&&(n=r.a.createElement(U.a,null),o="primary");var c=t.activeTags.has(e.name)?"default":"outlined";return r.a.createElement(F.a,{key:a,label:e.name,icon:n,variant:c,color:o,onClick:function(){var a=new Set(t.activeTags),n=!1;a.has(e.name)?(a.delete(e.name),n=!1):(a.add(e.name),n=!0),t.setActiveTags(a);var r=Object(S.a)(t.labels);if(n)r.push(e.name.toLowerCase()),t.setLabels(r);else if(!n){var o=r.filter((function(t){return t!==e.name}));t.setLabels(o)}}})}))))))}var D=a(22),q=a.n(D),Y=a(47),K=a.n(Y),Q=a(76),V=a.n(Q),X=a(59),Z=a.n(X);a(51);function $(){return r.a.createElement("div",{className:"logo",style:{height:"auto",flexFlow:"row nowrap",justifyContent:"center"}},r.a.createElement("h2",{className:"color-text",style:{fontSize:"30px"}},r.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40")),r.a.createElement("h2",{className:"color-text",style:{fontSize:"40px",marginTop:"5px"}},"MEEP"))}function ee(){return r.a.createElement("div",{className:"logo",style:{height:"auto",flexFlow:"row nowrap",justifyContent:"center"}},r.a.createElement("h2",{className:"color-text",style:{fontSize:"30px"}},r.a.createElement("span",{role:"img","aria-label":"eyes"},"\ud83d\udc40")))}var te=a(3),ae=Object(u.a)((function(e){return{root:{overflowY:"scroll"},closeBtn:{float:"right"},"icon-hover":{transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",borderRadius:"50%","&:hover":{backgroundColor:"#f5f5f5","& > *":{color:"#3f51b5"}}},menu:{marginTop:"70px"},"menu-item":{minWidth:"200px",transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","&:hover":{backgroundColor:"rgba(63, 81, 181, .05)"}},"MuiMenuItem-root":{display:"flex",flexFlow:"column nowrap",alignItems:"flex-start"},signUpButton:{margin:e.spacing(0,.5)},loginButton:{margin:e.spacing(0,.5),color:"white",borderColor:"white"},popover:{pointerEvents:"none"},paper:{padding:e.spacing(0,1)},expand:{transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","&:hover":{backgroundColor:"white","& > *":{color:"#3f51b5"}}},expandOpen:{}}}));function ne(e){var t=ae(),a=Object(p.a)("(max-width:960px)"),o=Object(p.a)("(max-width:600px)"),c=Object(n.useState)(null),i=Object(m.a)(c,2),l=i[0],s=i[1],u=Object(n.useState)(null),h=Object(m.a)(u,2),S=h[0],C=h[1],z=Object(n.useState)(null),T=Object(m.a)(z,2),_=T[0],F=T[1],G=Object(n.useState)(!1),M=Object(m.a)(G,2),L=M[0],I=M[1],A=Object(n.useState)(null),R=Object(m.a)(A,2),P=R[0],U=R[1],H=o?null:a?r.a.createElement(g.a,{color:"inherit",href:"https://github.com/marketplace/actions/meep-scanner"},r.a.createElement(q.a,{style:{marginLeft:"8px"}})," "):r.a.createElement(g.a,{variant:"outlined",color:"inherit",href:"https://github.com/marketplace/actions/meep-scanner"},"GitHub MarketPlace ",r.a.createElement(q.a,{style:{marginLeft:"8px"}})," "),B=function(){C(null)},W=function(){F(null)},D=function(){U(null)},Y=Boolean(S),Q=Boolean(_),X=Boolean(P),ne=Y?"simple-popover":void 0,re=o?null:r.a.createElement(d.a,{item:!0,className:t["icon-hover"],"aria-owns":Q?"mouse-over-popover":void 0,"aria-haspopup":"true",color:"secondary",onMouseEnter:function(e){F(e.currentTarget)},onMouseLeave:W,onClick:function(){return window.location.href="https://twitter.com/moreeyesplz"}},r.a.createElement(K.a,{className:"nav-icon"}),r.a.createElement(E.a,{className:t.popover,classes:{paper:t.paper},open:Q,anchorEl:_,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:W,disableRestoreFocus:!0},r.a.createElement(f.a,{variant:"caption"},"Follow Us Twitter!"))),oe=o?null:r.a.createElement(d.a,{item:!0,className:t["icon-hover"],"aria-owns":Y?"mouse-over-popover":void 0,"aria-haspopup":"true",color:"secondary",onMouseEnter:function(e){C(e.currentTarget)},onMouseLeave:B,onClick:function(){return window.location.href="https://github.com/marketplace/actions/meep-scanner"}},r.a.createElement(q.a,{className:"nav-icon"}),r.a.createElement(E.a,{className:t.popover,classes:{paper:t.paper},open:Y,anchorEl:S,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"},onClose:B,disableRestoreFocus:!0},r.a.createElement(f.a,{variant:"caption"},"GitHub Actions Marketplace"))),ce=o?r.a.createElement(v.a,{className:t["menu-item"],onClick:function(){return window.location.href="".concat(e.userURL)}},"Follow us on Twitter"):null,ie=o?r.a.createElement(v.a,{className:t["menu-item"],onClick:function(){return window.location.href="".concat(e.userURL)}},"MEEP GitHub Marketplace "):null,le=o?r.a.createElement(ee,null):r.a.createElement($,null),se=a&&e.filterState?r.a.createElement("div",null,r.a.createElement(w.a,{className:Object(te.a)(t.expand,Object(b.a)({},t.expandOpen,L)),onClick:function(e){I(!L),U(e.currentTarget)},"aria-expanded":L,"aria-label":"filter by tags",color:"inherit"},r.a.createElement(V.a,null)),r.a.createElement(E.a,{id:ne,open:X,anchorEl:P,onClose:D,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"center"}},r.a.createElement(x.a,{className:t.root},r.a.createElement(w.a,{className:t.closeBtn,onClick:D},r.a.createElement(Z.a,null)),r.a.createElement(J,{filterState:e.filterState})))):null,me=e.isUserActive?r.a.createElement(d.a,{container:!0,alignItems:"center",spacing:0},r.a.createElement(d.a,{item:!0,xs:3,onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},le),r.a.createElement(d.a,{item:!0,xs:9,container:!0,alignItems:"center",justify:"flex-end",wrap:"nowrap",spacing:3},se,oe,re,r.a.createElement(d.a,{item:!0},r.a.createElement(y.a,{src:e.avatarURL,alt:e.username,"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){s(e.currentTarget)}}),r.a.createElement(k.a,{className:t.menu,anchorEl:l,keepMounted:!0,open:Boolean(l),onClose:function(){var t;s(null),0===(null===(t=e.filterState)||void 0===t?void 0:t.searchString.length)&&e.filterState.setSearchString("")},anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"}},r.a.createElement(v.a,{className:t["MuiMenuItem-root"],onClick:function(){return window.location.href="".concat(e.userURL)}},r.a.createElement(f.a,{variant:"button"},"Logged in as"),r.a.createElement(f.a,{variant:"h6"},e.username,r.a.createElement("span",{role:"img","aria-label":"crown emoji"},"\ud83d\udc51"))),r.a.createElement(j.a,null),r.a.createElement(v.a,{className:t["menu-item"],onClick:function(){return window.location.href="".concat(e.userURL)}},"My GitHub Profile"),ie,ce,r.a.createElement(v.a,{className:t["menu-item"],onClick:function(){localStorage.clear(),window.location.reload()}},"LOGOUT"))))):r.a.createElement(d.a,{container:!0,alignItems:"center"},r.a.createElement(d.a,{item:!0,xs:3,onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},r.a.createElement($,null)),r.a.createElement(d.a,{item:!0,xs:9,container:!0,alignItems:"center",justify:"flex-end",spacing:3},r.a.createElement(d.a,{item:!0},H),r.a.createElement(d.a,{item:!0},r.a.createElement(g.a,{variant:"contained",color:"secondary",href:"https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c"},"Login"))));return r.a.createElement(O.a,null,r.a.createElement(N.a,null,me))}function re(e){return r.a.createElement("div",{className:"logo",style:{height:"".concat(e.height)}},r.a.createElement("h2",{className:"color-text",style:{fontSize:"".concat(e.meepFontSize)}},"MEEP"),r.a.createElement("h1",{className:"name"},r.a.createElement("mark",{className:"highlight",style:{fontSize:"".concat(e.textFontSize)}},"more eyes, plz!")))}var oe=a(160),ce=a(161),ie=a(77),le=a.n(ie),se=Object(u.a)((function(e){return{header:{fontSize:"1.5rem",fontWeight:"bold","&:hover":{color:"#3f51b5"}},labelContainer:{"& > *":{margin:e.spacing(.5,1,.5,0)}},popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)},"popover-text":{fontSize:"12px"},"card-action":{display:"flex"},comments:{transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","&:hover":{color:"#f50057"}},user:{transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","&:hover":{color:"#f50057"}},avatar:{border:"1px solid #bdbdbd",transition:"background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms","&:hover":{border:" 1px solid #f50057"}},expand:{marginTop:"-50px",float:"right",transform:"rotate(0deg)",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{float:"right",transform:"rotate(180deg)"},details:{margin:e.spacing(0,2)}}}));function me(e){var t=se(),a=Object(n.useState)(!1),o=Object(m.a)(a,2),c=o[0],i=o[1],l={};return e.tagData.forEach((function(e){return l["".concat(e.name)]="".concat(e.color)})),r.a.createElement(x.a,null,r.a.createElement(oe.a,{className:t["card-action"],onClick:function(){return window.location.href=e.url}},r.a.createElement(z.a,{style:{width:"100%"}},r.a.createElement(d.a,{spacing:8,container:!0,wrap:"nowrap"},r.a.createElement(d.a,{item:!0,xs:1,spacing:1,container:!0},r.a.createElement(d.a,{item:!0},r.a.createElement(y.a,{className:t.avatar,src:e.user.avatar,alt:e.user.name,onClick:function(){return window.location.href=e.user.url}})),r.a.createElement(d.a,{item:!0})),r.a.createElement(d.a,{item:!0,xs:11,direction:"column",wrap:"nowrap",sm:!0,container:!0},r.a.createElement(d.a,{item:!0,spacing:2,container:!0},r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(f.a,null,r.a.createElement("span",{className:t.user,onClick:function(){return window.location.href=e.user.url}},e.user.name),r.a.createElement("span",{role:"img","aria-label":"eyes",style:{padding:"6px"}},"\ud83d\udc40"),"meeped on ",function(e){var t=e.split("T")[0].split("-"),a=t[0],n=t[1],r="",o=t[2];switch(n){case"01":r="Jan";break;case"02":r="Feb";break;case"03":r="Mar";break;case"04":r="Apr";break;case"05":r="May";break;case"06":r="Jun";break;case"07":r="Jul";break;case"08":r="Aug";break;case"09":r="Sep";break;case"10":r="Oct";break;case"11":r="Nov";break;case"12":r="Dec"}return"".concat(r," ").concat(o,", ").concat(a)}(e.createdAt))),r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(f.a,{className:t.header,variant:"h5"},e.title.split(/(\n)/)[0])),r.a.createElement(d.a,{className:t.labelContainer,item:!0,xs:12},e.tags.map((function(e,t){var a=e.toLowerCase(),n="default",o=l[a];return"f50057"===o?n="secondary":"3f51b5"===o&&(n="primary"),r.a.createElement(F.a,{key:t,label:e,color:n,variant:"outlined",size:"small",disabled:!0})})))))))),r.a.createElement(w.a,{className:Object(te.a)(t.expand,Object(b.a)({},t.expandOpen,c)),onClick:function(){i(!c)},"aria-expanded":c,"aria-label":"show more",color:"primary"},r.a.createElement(le.a,null)),r.a.createElement(ce.a,{in:c,timeout:"auto",unmountOnExit:!0},r.a.createElement(z.a,{className:t.details},r.a.createElement(f.a,null,function(e){return e.split(/(\n)/).slice(1).join("")}(e.title)))))}var ue=a(90),pe=Object(u.a)((function(e){return{header:{margin:e.spacing("28px",0)},divider:{margin:e.spacing("28px",0)},container:{padding:"16px",backgroundColor:"#f5f5f5"}}}));function de(){var e=pe();return r.a.createElement(ue.a,{elevation:0,className:e.container},r.a.createElement(f.a,{variant:"h5",className:e.header},r.a.createElement("span",{role:"img","aria-label":"sparkle"},"\u2728")," Code of Conduct"),r.a.createElement(j.a,null),r.a.createElement("div",{className:e.divider}),r.a.createElement(f.a,{variant:"h6"},"Offering a set of eyes?"),r.a.createElement(T.a,null,r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"1. Offer feedback and advice graciously")),r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"2. Give justifications for why something should be done a particular way")),r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"3. Exhibit patience and remember that asking for help is in and of itself an act of courage"))),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"h6"},"Requesting another set of eyes?"),r.a.createElement(T.a,null,r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"1. Respect the time of people offering feedback")),r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"2. Avoid getting defensive")),r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"3. Understand that those giving you feedback are not perfect"))),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"h6"},"General Commit Thread Rules"),r.a.createElement(T.a,null,r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"1. Refrain from posting any content that is NSFW, racist, profane, or discriminatory toward any people group")),r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"2. Avoid posting any personal or identifying information of yourself or others")),r.a.createElement(_.a,{disableGutters:!0},r.a.createElement(f.a,null,"3. Do not post any recruitment messages, spam, or ads"))))}var fe=a(162),he=a(163),be=a(164);function ge(){return r.a.createElement("div",{className:"logo",style:{height:"auto",margin:"10px"}},r.a.createElement("h1",{className:"name",style:{height:"auto"}},r.a.createElement("mark",{className:"highlight",style:{fontSize:"1.5rem"}},"more eyes, plz!")))}var Ee=a(78),ve=a.n(Ee),we=Object(u.a)((function(e){var t;return{image:{height:"260px"},text:{marginTop:"10px"},closeButton:{float:"right"},buttonContainer:Object(b.a)({justifyContent:"flex-end"},e.breakpoints.down("sm"),{justifyContent:"center"}),headerText:(t={},Object(b.a)(t,e.breakpoints.down("sm"),{fontSize:"25px"}),Object(b.a)(t,e.breakpoints.down("xs"),{fontSize:"20px"}),t)}}));function xe(){var e=we(),t=Object(n.useState)("block"),a=Object(m.a)(t,2),o=a[0],c=a[1],i=Object(p.a)("(max-width:960px)")?null:r.a.createElement("div",{style:{display:"flex",alignItems:"center"}},r.a.createElement(f.a,{className:e.text,variant:"h5"},"Welcome to the "),r.a.createElement(ge,null),r.a.createElement(f.a,{className:e.text,variant:"h5"},"community!"));return r.a.createElement(x.a,{style:{display:"".concat(o)}},r.a.createElement(z.a,null,r.a.createElement(w.a,{className:e.closeButton,"aria-label":"delete",onClick:function(){c("none")}},r.a.createElement(Z.a,null)),i,r.a.createElement(f.a,{className:e.headerText},"Start getting more eyes on your code by adding ",r.a.createElement(fe.a,{style:{color:"#f50057"},href:"https://github.com/marketplace/actions/meep-scanner"},"MEEP Scanner")," from the GitHub store.")),r.a.createElement(he.a,{className:e.image,image:ve.a,onClick:function(){return window.location.href="https://github.com/marketplace/actions/meep-scanner"}}),r.a.createElement(be.a,{className:e.buttonContainer},r.a.createElement(g.a,{variant:"contained",color:"primary",size:"large",href:"https://github.com/marketplace/actions/meep-scanner"},"Our GitHub Actions Page")))}var ye=a(165),ke=a(60),je=a.n(ke),Oe=Object(u.a)((function(e){return{footer:{paddingTop:"10px",width:"100%",height:"250px",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"space-evenly",backgroundColor:"white",position:"relative"},fab:{float:"right",position:"absolute",top:"-30px"},button:{padding:e.spacing(3),margin:e.spacing(6,0,2,0),fontSize:"1.25em"},buttonIcon:{paddingLeft:"10px"},iconContainer:{display:"flex"},gitLinks:{"&:hover":{color:"#f50057"}}}}));function Ne(e){var t=Oe(),a=e.isUserActive?r.a.createElement("div",{className:t.footer,style:{height:"125px",marginTop:"100px"}},r.a.createElement(ye.a,{"aria-label":"Go To Top",className:t.fab,color:"secondary",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},r.a.createElement(je.a,null)),r.a.createElement("div",{className:t.iconContainer},r.a.createElement(w.a,{color:"primary","aria-label":"GitHub Marketplace",component:"span",onClick:function(){return window.location.href="https://github.com/marketplace/actions/meep-scanner"}},r.a.createElement(q.a,null)),r.a.createElement(w.a,{color:"primary","aria-label":"Twitter Profile",component:"span",onClick:function(){return window.location.href="https://twitter.com/moreeyesplz"}},r.a.createElement(K.a,null))),r.a.createElement(f.a,null," ",r.a.createElement("span",{className:t.gitLinks,onClick:function(){return window.location.href="https://github.com/jeremyong"}},"jeremyong")," | ",r.a.createElement("span",{className:t.gitLinks,onClick:function(){return window.location.href="https://github.com/duchess-toffee"}},"duchess-toffee")," ")):r.a.createElement("div",{className:t.footer},r.a.createElement(ye.a,{"aria-label":"Go To Top",className:t.fab,color:"secondary",onClick:function(){return window.scrollTo({top:0,left:0,behavior:"smooth"})}},r.a.createElement(je.a,null)),r.a.createElement(g.a,{variant:"outlined",color:"secondary",className:t.button,href:"https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c"},"Join with GitHub ",r.a.createElement(q.a,{className:t.buttonIcon,fontSize:"large"})),r.a.createElement("div",{className:t.iconContainer},r.a.createElement(w.a,{color:"primary","aria-label":"GitHub Marketplace",component:"span",onClick:function(){return window.location.href="https://github.com/marketplace/actions/meep-scanner"}},r.a.createElement(q.a,null)),r.a.createElement(w.a,{color:"primary","aria-label":"Twitter Profile",component:"span",onClick:function(){return window.location.href="https://twitter.com/moreeyesplz"}},r.a.createElement(K.a,null))),r.a.createElement(f.a,null," ",r.a.createElement("span",{className:t.gitLinks,onClick:function(){return window.location.href="https://github.com/jeremyong"}},"jeremyong")," | ",r.a.createElement("span",{className:t.gitLinks,onClick:function(){return window.location.href="https://github.com/duchess-toffee"}},"duchess-toffee")," "));return r.a.createElement("div",null,a)}var Se=a(40),Ce=a(16),ze=a(48),Te={owner:"moreeyesplz",repo:"meeps"},_e=function(){function e(t){Object(Ce.a)(this,e),this.data_=null,this.user_="",this.commit_url_="",this.commit_message_="";var a=t.body.split("\n");3===a.length&&(this.data_=t,this.user_=a[0],this.commit_url_=a[1],this.commit_message_=atob(a[2]))}return Object(ze.a)(e,[{key:"id",get:function(){return this.data_.id}},{key:"url",get:function(){return this.data_.url}},{key:"labels",get:function(){return this.data_.labels.map((function(e){return e.name}))}},{key:"user",get:function(){return this.user_}},{key:"avatar",get:function(){return this.data_.user.avatar_url}},{key:"user_url",get:function(){return this.data_.user.html_url}},{key:"commit_url",get:function(){return this.commit_url_}},{key:"commit_message",get:function(){return this.commit_message_}},{key:"created_at",get:function(){return this.data_.created_at}}]),e}(),Fe=function(){function e(t){Object(Ce.a)(this,e),this.issues={},this.octokit=void 0,this.octokit=t}return Object(ze.a)(e,[{key:"fetch",value:function(){var e=Object(s.a)(l.a.mark((function e(){var t,a,n,r,o,c,i,s=arguments;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]?s[0]:[],a=this.octokit.issues.listForRepo,e.next=4,a(Object(Se.a)(Object(Se.a)({},Te),{},{state:"open",labels:t,sort:"created",direction:"desc",creator:"themeepbot[bot]"}));case 4:for(n=e.sent,r=n.data,o=[],c=0;c!==r.length;++c)null!==(i=new _e(r[c])).data_&&(this.issues[i.id]=i,o.push(i.id));return e.abrupt("return",o);case 9:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"get",value:function(e){return this.issues[e]}}]),e}(),Ge=a(79),Me=a.n(Ge),Le=Object(u.a)((function(e){return{"center-container":{margin:e.spacing(15,"auto",0,"auto")},logo:{display:"flex",justifyContent:"center"},noResultsContainer:{opacity:".3",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"space-around",height:"100%"},noResultsImg:{width:"80%"}}}));function Ie(e){var t=Le(),a=Object(p.a)("(max-width:960px)"),o=Object(p.a)("(max-width:600px)"),c=Object(n.useState)([]),i=Object(m.a)(c,2),u=i[0],b=i[1],g=Object(n.useState)([]),E=Object(m.a)(g,2),v=E[0],w=E[1],x=Object(n.useState)("Anonymous"),y=Object(m.a)(x,2),k=y[0],j=y[1],O=Object(n.useState)(""),N=Object(m.a)(O,2),S=N[0],C=N[1],z=Object(n.useState)(""),T=Object(m.a)(z,2),_=T[0],F=T[1],G=Object(n.useState)(!0),M=Object(m.a)(G,2),L=M[0],I=M[1],A=Object(n.useState)([]),R=Object(m.a)(A,2),P=R[0],U=R[1],H=Object(n.useState)(""),B=Object(m.a)(H,2),W=B[0],D=B[1],q=Object(n.useState)(new Set),Y=Object(m.a)(q,2),K=Y[0],Q=Y[1],V=Object(n.useMemo)((function(){return new Fe(e.octokit)}),[e.octokit]);Object(n.useEffect)((function(){var e=function(){var e=Object(s.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,V.fetch(u);case 2:t=e.sent,w(t),I(!1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();I(!0),e()}),[u,V]),Object(n.useEffect)((function(){(function(){var t=Object(s.a)(l.a.mark((function t(){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.octokit.issues.listLabelsForRepo({owner:"moreeyesplz",repo:"meeps",per_page:100});case 2:a=t.sent,U(a.data.map((function(e){return{name:e.name,color:e.color}})));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e.octokit]),Object(n.useEffect)((function(){e.octokit&&e.octokit.users.getAuthenticated().then((function(e){j(e.data.login),C(e.data.avatar_url),F(e.data.html_url)}))}),[e.octokit]);for(var X={setLabels:b,labels:u,tags:P,searchString:W,setSearchString:D,activeTags:K,setActiveTags:Q},Z=[],$=0;$!==v.length;++$){var ee=V.get(v[$]);ee&&Z.push(r.a.createElement(d.a,{item:!0,key:$},r.a.createElement(me,{title:null===ee||void 0===ee?void 0:ee.commit_message,url:ee.commit_url,tags:ee.labels,user:{avatar:ee.avatar,name:ee.user,url:ee.user_url},createdAt:ee.created_at,tagData:P})))}var te=0!==Z.length||L?Z:r.a.createElement("div",{className:t.noResultsContainer},r.a.createElement("img",{className:t.noResultsImg,src:Me.a,alt:"no results found"}),r.a.createElement(f.a,{variant:"h4"},"No Results Found")),ae=a?null:r.a.createElement(d.a,{item:!0,direction:"column",xs:3,spacing:2,container:!0},r.a.createElement(d.a,{item:!0},r.a.createElement("div",{className:t.logo},r.a.createElement(re,{meepFontSize:o?"3rem":a?"5rem":"6rem",textFontSize:o?"1rem":a?"1.4rem":"1.7rem"}))),r.a.createElement(d.a,{item:!0},r.a.createElement(de,null))),oe=a?null:r.a.createElement(d.a,{item:!0,direction:"column",xs:4,spacing:2,container:!0},r.a.createElement(d.a,{item:!0},r.a.createElement(J,{filterState:X}))),ce=a?r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(re,{meepFontSize:o?"6rem":"8rem",textFontSize:o?"2rem":"3rem",height:o?"180px":"250px"})):null,ie=o?null:r.a.createElement(d.a,{item:!0,xs:12},r.a.createElement(xe,null)),le=a?12:8,se=a?12:9;return r.a.createElement("div",null,r.a.createElement(ne,{isUserActive:!0,username:k,avatarURL:S,userURL:_,filterState:X}),r.a.createElement(h.a,{className:t["center-container"],maxWidth:"lg"},r.a.createElement(d.a,{wrap:"nowrap",alignItems:"flex-start",justify:"space-between",container:!0},ae,r.a.createElement(d.a,{item:!0,xs:se,spacing:2,direction:"column",wrap:"nowrap",container:!0},ce,ie,r.a.createElement(d.a,{item:!0,xs:12,justify:"space-between",spacing:0,container:!0},r.a.createElement(d.a,{item:!0,direction:"column",xs:le,spacing:1,justify:"flex-start",container:!0},te),oe)))),r.a.createElement(Ne,{isUserActive:!0}))}a(106);function Ae(e){return r.a.createElement("div",{className:"login-logo"},r.a.createElement("h2",{className:"login-color-text",style:{fontSize:"".concat(e.meepFontSize)}},"MEEP"),r.a.createElement("h1",{className:"login-name"},r.a.createElement("mark",{className:"login-highlight",style:{fontSize:"".concat(e.textFontSize)}},"more eyes, plz!")))}var Re=a(80),Pe=a.n(Re),Ue=a(81),He=a.n(Ue),Be=a(82),We=a.n(Be),Je=Object(u.a)((function(e){var t,a,n;return{mainCard:(t={marginTop:"50px",display:"flex",flexFlow:"column nowrap",alignItems:"center",justifyContent:"space-evenly",height:"1200px"},Object(b.a)(t,e.breakpoints.down("sm"),{height:"900px",justifyContent:"space-around"}),Object(b.a)(t,e.breakpoints.down("xs"),{marginTop:"0px",height:"600px",justifyContent:"space-around"}),t),headerText:Object(b.a)({fontWeight:"bold",textAlign:"left",fontSize:"2.5rem"},e.breakpoints.down("md"),{fontSize:"2rem",textAlign:"center"}),bodyText:Object(b.a)({lineHeight:"2.5rem",fontSize:"1.4rem",paddingTop:"28px",fontWeight:100},e.breakpoints.down("md"),{fontSize:"1.25rem"}),container:{display:"flex",flexFlow:"column nowrap",alignItems:"center","& > div:nth-child(odd)":{backgroundColor:"#f5f5f5"}},cardContainer:(a={display:"flex",alignItems:"center",justifyContent:"space-between",padding:"100px",maxWidth:"1280px"},Object(b.a)(a,e.breakpoints.down("sm"),{flexFlow:"column-reverse nowrap"}),Object(b.a)(a,e.breakpoints.down("xs"),{padding:"30px"}),a),cardText:Object(b.a)({display:"flex",flexFlow:"column",width:"35%"},e.breakpoints.down("sm"),{width:"100%"}),image:(n={width:"60%"},Object(b.a)(n,e.breakpoints.down("sm"),{width:"100%",padding:"20px"}),Object(b.a)(n,e.breakpoints.down("xs"),{width:"100%"}),n),button:Object(b.a)({padding:e.spacing(3),fontSize:"1.25em"},e.breakpoints.down("sm"),{padding:e.spacing(2),fontSize:"1em"}),buttonIcon:{paddingLeft:"10px"},logoText:{fontFamily:"'Jura', san-serif",display:"inline-block",lineHeight:"0em",paddingBottom:".4em",marginRigh:"8px",fontWeight:"bold",fontSize:"1.5rem","&:hover":{backgroundColor:"turquoise"}},purple:{color:"#3f51b5",fontWeight:"bold"}}}));function De(){var e=Je(),t=Object(p.a)("(max-width:960px)"),a=Object(p.a)("(max-width:600px)"),n=a?null:r.a.createElement("img",{className:e.image,src:Pe.a,alt:"More Eyes, Plz! eyes"}),o=a?null:r.a.createElement(ne,{isUserActive:!1});return r.a.createElement("div",null,o,r.a.createElement(ue.a,{className:e.mainCard,elevation:0},r.a.createElement(Ae,{meepFontSize:a?"7rem":t?"15rem":"20rem",textFontSize:a?"2rem":t?"4.5rem":"6.5rem"}),r.a.createElement(g.a,{variant:"contained",color:"primary",className:e.button,href:"https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c"},"Sign In with GitHub ",r.a.createElement(q.a,{className:e.buttonIcon,fontSize:"large"}))),r.a.createElement("div",{className:e.container},r.a.createElement(x.a,{className:e.cardContainer,elevation:0},r.a.createElement(z.a,{className:e.cardText},r.a.createElement(f.a,{className:e.headerText},"Get community feedback on your commits."),r.a.createElement(f.a,{className:e.bodyText},"Are you starting your coding journey? Experienced but venturing into unfamiliar territory?"),r.a.createElement(f.a,{className:e.bodyText},r.a.createElement(fe.a,{href:"https://moreeyesplz.com/"},r.a.createElement("mark",{className:e.logoText},"more eyes, plz!"))," is a new service powered by ",r.a.createElement(fe.a,{color:"secondary",href:"https://github.com/features/actions"},"Github Actions")," to crowdsource feedback, suggestions, and insight on your commits.")),r.a.createElement("img",{className:e.image,src:He.a,alt:"More Eyes, Plz! eyes"})),r.a.createElement(x.a,{className:e.cardContainer,elevation:0},n,r.a.createElement(z.a,{className:e.cardText},r.a.createElement(f.a,{className:e.headerText},"Get Started"),r.a.createElement(f.a,{className:e.bodyText},"1. ",r.a.createElement(fe.a,{color:"secondary",href:"https://github.com/login/oauth/authorize?client_id=ac67cef96ff2922c4a3c"},"Sign in with GitHub."),r.a.createElement("br",null),"2. Install the ",r.a.createElement(fe.a,{color:"secondary",href:"https://github.com/marketplace/actions/meep-scanner"},"MEEP scanner action")," on a repo you want eyes on.",r.a.createElement("br",null),'3. Write "',r.a.createElement("span",{className:e.purple},"[MEEP]"),'" in any commit message.'),r.a.createElement(f.a,{className:e.bodyText},"The commit will show up as a post on this website, and ",r.a.createElement("span",{className:e.purple},"themeepbot")," will comment to let you know eyes are coming."),r.a.createElement(f.a,{className:e.bodyText},"Don't forget to ",r.a.createElement("span",{className:e.purple},"say thanks!")))),r.a.createElement(x.a,{className:e.cardContainer,elevation:0},r.a.createElement(z.a,{className:e.cardText},r.a.createElement(f.a,{className:e.headerText},"Provide Feedback"),r.a.createElement(f.a,{className:e.bodyText},"Filter by tags and click a post to go directly to the Github commit. Comment on specific lines of code, or comment in the general commit thread. Please be ",r.a.createElement("span",{className:e.purple},"courteous")," in providing your feedback!")),r.a.createElement("img",{className:e.image,src:We.a,alt:"More Eyes, Plz! eyes"}))),r.a.createElement(Ne,{isUserActive:!1}))}var qe=function(e){var t=e.octokit?r.a.createElement(Ie,{octokit:e.octokit}):r.a.createElement(De,null);return r.a.createElement("div",null,t)},Ye=a(86),Ke=new URL(document.location.href).searchParams.get("access_token");Ke&&(localStorage.setItem("GitHub Access Token",Ke),window.history.replaceState(null,"","/")),Ke||(Ke=localStorage.getItem("GitHub Access Token"));var Qe=Ke?new Ye.a({auth:Ke}):null;c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(qe,{octokit:Qe})),document.getElementById("root"))},51:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/github-actions.059fe3bf.jpg"},79:function(e,t,a){e.exports=a.p+"static/media/undraw_not_found_60pq.abc2b3f8.svg"},80:function(e,t,a){e.exports=a.p+"static/media/more-eyes-plz-demo.d79fb717.jpg"},81:function(e,t,a){e.exports=a.p+"static/media/undraw_online_test_gba7.208b007e.svg"},82:function(e,t,a){e.exports=a.p+"static/media/undraw_design_team_af2y.b5fc4bfd.svg"},95:function(e,t,a){e.exports=a(112)}},[[95,1,2]]]);
//# sourceMappingURL=main.610085d8.chunk.js.map