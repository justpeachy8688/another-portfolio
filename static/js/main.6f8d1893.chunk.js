(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{28:function(e,t,a){},62:function(e,t,a){e.exports=a.p+"static/media/envision.de6aa7c4.png"},63:function(e,t,a){e.exports=a.p+"static/media/lets+Venture.80350441.png"},64:function(e,t,a){e.exports=a.p+"static/media/watchNext-pic2.a0c5bafb.png"},67:function(e,t,a){e.exports=a.p+"static/media/paris.2e250757.png"},72:function(e,t,a){e.exports=a(93)},77:function(e,t,a){},78:function(e,t,a){e.exports=a.p+"static/media/scheduler.930dae6b.png"},79:function(e,t,a){e.exports=a.p+"static/media/team-mate.c9581bc9.png"},80:function(e,t,a){e.exports=a.p+"static/media/Weather.237d407c.png"},93:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(26),c=a.n(r),i=(a(77),a(7)),s=a(10),o=a(11),m=a(12),u=(a(28),a(35)),d=a(9),p=a(24),h=a(36),E=a(71),b=a(18),f=a(21);var g=function(){return l.a.createElement("footer",{className:"footer mt-5"},l.a.createElement(p.a,{fluid:!0},l.a.createElement(b.a,{className:" justify-content-between p-3"},l.a.createElement(f.a,{className:"p-0",md:3,sm:12},"Taylor Sanders"),l.a.createElement(f.a,{className:"p-0 d-flex justify-content-end",md:3},"This site was made by Taylor Sanders."))))},v=a(61);var y=function(e){return l.a.createElement(v.a,{className:"bg-transparent jumbotron-fluid p-0"},l.a.createElement(p.a,{className:"text-center",fluid:!0},l.a.createElement(b.a,{className:"justify-content-center text-align-center"},l.a.createElement(f.a,{className:"pt-5 pb-5 text-center",md:8,sm:12},e.title&&l.a.createElement("h1",{className:"hello font-weight-bolder"},e.title),e.subTitle&&l.a.createElement("h3",{className:"display-4 font-weight-light"},e.subTitle),e.text&&l.a.createElement("h3",{className:"lead font-weight-light"},e.text)))))},N=a(19),x=a(62),k=a.n(x),w=a(63),j=a.n(w),T=(a(78),a(79),a(64)),C=a.n(T),S=(a(80),a(49));var O=function(e){var t=Object(S.useSpring)({opacity:1,from:{opacity:0}});return l.a.createElement(S.animated.div,{className:"t-card-info",style:t},l.a.createElement("p",{className:"t-card-title"},e.title),l.a.createElement("p",{className:"t-card-sub-title"},e.subTitle),l.a.createElement("a",{className:"view",href:e.link,target:"_blank",rel:"noopener noreferrer"},"View"))};var A=function(e){return l.a.createElement(f.a,{classname:"mt-4",xs:12,lg:4},l.a.createElement("div",{className:"d-inline-block t-card",onClick:function(t){return e.click(e.item)}},l.a.createElement("img",{className:"t-card-image",src:e.item.imgSrc,alt:e.item.imgSrc}),e.item.selected&&l.a.createElement(O,{title:e.item.title,subTitle:e.item.subTitle,link:e.item.link})))},H=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={items:[{id:0,title:"WatchNext",subTitle:"Helps you choose what to watch over multiple services.",imgSrc:C.a,link:"https://charvey0.github.io/WatchNext/",selected:!1},{id:1,title:"Lets+Venture",subTitle:"Helps outdoorsy folks connect and socialize.",imgSrc:j.a,link:"https://github.com/noheropage/lets-add-venture",selected:!1},{id:2,title:"Envision",subTitle:"Helps teachers and students connect in the community through Art.",imgSrc:k.a,link:"https://wow-envision.herokuapp.com/",selected:!1}]},e.handleCardClick=function(t,a){console.log(t);var n=Object(N.a)(e.state.items);n[t].selected=!n[t].selected,n.forEach((function(e){e.id!==t&&(n.selected=!1)})),e.setState({items:n})},e.makeItems=function(t){return t.map((function(t){return l.a.createElement(A,{item:t,click:function(a){return e.handleCardClick(t.id,a)},key:t.id})}))},e}return Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(p.a,{className:"justify-content-center pt-5 pb-5"},l.a.createElement(b.a,{className:"justify-content-around"},this.makeItems(this.state.items)))}}]),a}(l.a.Component);var I=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title,subTitle:e.subTitle,text:e.text}),l.a.createElement(H,null))},_=a(65),L=a.n(_),W=a(51),z=a(52);var B=function(){return l.a.createElement("div",{className:"social-container"},l.a.createElement("a",{href:"https://github.com/justpeachy8688",className:"github"},l.a.createElement(W.a,{icon:z.a,size:"5x"})),l.a.createElement("a",{href:"https://www.linkedin.com/in/taylor-n-sanders/",className:"linked-in"},l.a.createElement(W.a,{icon:z.b,size:"5x"})))};var V=function(e){return l.a.createElement(p.a,{fluid:!0},l.a.createElement(b.a,{className:"justify-content-center"},l.a.createElement(f.a,{className:"about-paragraph",md:8,lg:8},e.children)))},D=a(20),F=a(66);var J=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title}),l.a.createElement(V,null,l.a.createElement(D.a,{className:"contact-form",onSubmit:function(e){e.preventDefault(),L.a.sendForm("contact_service","contact_form",e.target,"user_EiHuzOWwHrbBRaArOArbE").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))}},l.a.createElement(D.a.Control,{type:"hidden",name:"contact_number"}),l.a.createElement(D.a.Label,null,"Name"),l.a.createElement(D.a.Control,{type:"text",name:"user_name"}),l.a.createElement(D.a.Label,null,"Email"),l.a.createElement(D.a.Control,{type:"email",name:"user_email"}),l.a.createElement(D.a.Label,null,"Message"),l.a.createElement(D.a.Control,{as:"textarea",rows:3}),l.a.createElement("br",null),l.a.createElement(D.a.Row,null,l.a.createElement(F.a,{type:"submit",value:"Send"},"Send"))),l.a.createElement("br",null),l.a.createElement(b.a,{className:"text-center pt-5"},l.a.createElement(B,null))))},M=a(67),R=a.n(M);var P=function(e){return l.a.createElement("div",null,l.a.createElement(y,{title:e.title}),l.a.createElement(V,null,l.a.createElement(b.a,{className:"m-auto"},l.a.createElement("div",{className:"container justify-content-center"},l.a.createElement("img",{className:"mx-auto about-image",src:R.a,alt:"paris"}))),l.a.createElement(b.a,{className:"about-text"},"Full Stack Developer who studied at the University of Washington. I currently live in Anchorage, Alaska. As I've grown as a developer, I have worked alongside many talented developers and designers who have raised my standards for what's expected of any application. Through these experiences, I've had the opportunity to create memorable products that are not only enjoyable to use but are written in code that's maintainable and easy to understand.")))},U=function(e){Object(o.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={title:"Taylor Sanders",headerLinks:[{title:"Home",path:"/"},{title:"About",path:"/about"},{title:"Contact",path:"/contact"}],home:{title:"Hello;",subTitle:"Welcome to my Page",text:"Checkout some of my work below"},about:{title:"About Me"},contact:{title:"Let's Chat?"}},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(u.a,null,l.a.createElement(p.a,{className:"p-1 main-content",fluid:!0},l.a.createElement(h.a,{className:"navbar-dark",bg:"transparent",expand:"lg"},l.a.createElement(h.a.Brand,null,"Taylor Sanders"),l.a.createElement(h.a.Toggle,{className:"border-0","aria-controls":"navbar-toggle"}),l.a.createElement(h.a.Collapse,{id:"navbar-toggle"},l.a.createElement(E.a,{className:"ml-auto"},l.a.createElement(u.b,{className:"nav-link",to:"/"},"Home"),l.a.createElement(u.b,{className:"nav-link",to:"/about"},"About"),l.a.createElement(u.b,{className:"nav-link",to:"/contact"},"Contact")))),l.a.createElement(d.a,{path:"/",exact:!0,render:function(){return l.a.createElement(I,{title:e.state.home.title,subTitle:e.state.home.subTitle,text:e.state.home.text})}}),l.a.createElement(d.a,{path:"/about",render:function(){return l.a.createElement(P,{title:e.state.about.title})}}),l.a.createElement(d.a,{path:"/contact",render:function(){return l.a.createElement(J,{title:e.state.contact.title})}}),l.a.createElement(g,null)))}}]),a}(l.a.Component);a(92);c.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.6f8d1893.chunk.js.map