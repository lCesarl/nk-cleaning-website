(function(){"use strict";var e={8122:function(e,n,i){var t=i(5130),o=i(6768);function r(e,n,i,t,r,s){const a=(0,o.g2)("TopbarSection"),c=(0,o.g2)("NavbarSection"),l=(0,o.g2)("HomeSection"),u=(0,o.g2)("ServicesSection"),d=(0,o.g2)("AboutUsSection"),v=(0,o.g2)("ChooseUsSection"),m=(0,o.g2)("ContactSection");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(a),(0,o.bF)(c),(0,o.bF)(l),(0,o.bF)(u),(0,o.bF)(d),(0,o.bF)(v),(0,o.bF)(m)],64)}const s={class:"top-bar"},a=(0,o.Fv)('<div class="scroll-container" data-v-1d397ccc><div class="social-media" data-v-1d397ccc><i class="bi bi-facebook" data-v-1d397ccc></i><i class="bi bi-instagram" data-v-1d397ccc></i><i class="bi bi-whatsapp" data-v-1d397ccc></i></div><div class="contact-info" data-v-1d397ccc><i class="bi bi-telephone-fill" data-v-1d397ccc></i> Hilfe benötigt? +49 172 12345678 <i class="bi bi-envelope-fill" data-v-1d397ccc></i> Schreiben Sie uns: info@nt-cleaning.de </div></div>',1),c=[a];function l(e,n,i,t,r,a){return(0,o.uX)(),(0,o.CE)("div",s,c)}var u={name:"TopbarSection"},d=i(1241);const v=(0,d.A)(u,[["render",l],["__scopeId","data-v-1d397ccc"]]);var m=v,b=i(4232),p=i.p+"img/logo.79f541cd.png";const g=e=>((0,o.Qi)("data-v-538c9f47"),e=e(),(0,o.jt)(),e),f={class:"header"},h={class:"navbar"},k=g((()=>(0,o.Lk)("div",{class:"logo"},[(0,o.Lk)("img",{src:p,alt:"Cleaning Company Logo"})],-1))),L={key:0};function S(e,n,i,r,s,a){return(0,o.uX)(),(0,o.CE)("header",f,[(0,o.Lk)("nav",h,[k,(0,o.Lk)("div",{class:"menu-toggle",onClick:n[0]||(n[0]=(...e)=>a.toggleMenu&&a.toggleMenu(...e))},"☰"),(0,o.Lk)("ul",{class:(0,b.C4)(["nav-links",{active:s.menuActive}])},[(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#home",onClick:n[1]||(n[1]=(0,t.D$)(((...e)=>a.scrollToSection&&a.scrollToSection(...e)),["prevent"]))},"Home")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#services",onClick:n[2]||(n[2]=(0,t.D$)(((...e)=>a.scrollToSection&&a.scrollToSection(...e)),["prevent"]))},"Leistungen")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#about",onClick:n[3]||(n[3]=(0,t.D$)(((...e)=>a.scrollToSection&&a.scrollToSection(...e)),["prevent"]))},"Über uns")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#whyus",onClick:n[4]||(n[4]=(0,t.D$)(((...e)=>a.scrollToSection&&a.scrollToSection(...e)),["prevent"]))},"Vorteile")]),(0,o.Lk)("li",null,[(0,o.Lk)("a",{href:"#contact",onClick:n[5]||(n[5]=(0,t.D$)(((...e)=>a.scrollToSection&&a.scrollToSection(...e)),["prevent"]))},"Kontakt")]),s.isMobile?((0,o.uX)(),(0,o.CE)("li",L,[(0,o.Lk)("button",{class:"quote-btn",onClick:n[6]||(n[6]=(0,t.D$)((e=>a.scrollToSection("#appointment")),["prevent"]))},"Termin vereinbaren")])):(0,o.Q3)("",!0)],2),s.isMobile?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("button",{key:0,class:"quote-btn",onClick:n[7]||(n[7]=(0,t.D$)((e=>a.scrollToSection("#appointment")),["prevent"]))},"Termin vereinbaren"))])])}var w={name:"NavbarSection",data(){return{menuActive:!1,isMobile:!1}},mounted(){window.addEventListener("resize",this.handleResize),this.handleResize()},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{toggleMenu(){this.menuActive=!this.menuActive},handleResize(){this.isMobile=window.innerWidth<1032,!this.isMobile&&this.menuActive&&(this.menuActive=!1)},scrollToSection(e){const n="object"===typeof e&&e.target?e.target.getAttribute("href"):e;if("#appointment"===n)return void alert("Seite ist im Aufbau. Bitte später wieder versuchen!");const i=document.querySelector(n);i&&i.scrollIntoView({behavior:"smooth"}),this.isMobile&&this.menuActive&&(this.menuActive=!1)}}};const C=(0,d.A)(w,[["render",S],["__scopeId","data-v-538c9f47"]]);var E=C,A=i.p+"img/header-person.970917f2.png";const z=e=>((0,o.Qi)("data-v-69e41502"),e=e(),(0,o.jt)(),e),F={id:"home"},T={class:"hero"},y={class:"hero-inner"},I=(0,o.Fv)('<div class="hero-content" data-v-69e41502><div class="text-container" data-v-69e41502><div class="company-tagline" data-v-69e41502>- REINIGUNGSFIRMA</div><h1 class="slogan" data-v-69e41502>Ihr <span class="highlight" data-v-69e41502>professioneller</span> Partner<br data-v-69e41502>für Gebäudereinigung</h1></div><p data-v-69e41502>Exzellente Reinigungsdienstleistungen, die den Glanz Ihrer Geschäftsräume unterstreichen.</p><div class="button-container" data-v-69e41502><button class="appointment-btn" data-v-69e41502>Termin vereinbaren</button></div></div>',1),U={key:0,class:"hero-image"},_=z((()=>(0,o.Lk)("img",{src:A,alt:"Header Person"},null,-1))),R=[_];function x(e,n,i,t,r,s){return(0,o.uX)(),(0,o.CE)("div",F,[(0,o.Lk)("section",T,[(0,o.Lk)("div",y,[I,r.isMobile?(0,o.Q3)("",!0):((0,o.uX)(),(0,o.CE)("div",U,R))])])])}var M={name:"HomeSection",data(){return{isMobile:window.innerWidth<768}},created(){window.addEventListener("resize",this.handleResize)},beforeUnmount(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize(){this.isMobile=window.innerWidth<480}}};const X=(0,d.A)(M,[["render",x],["__scopeId","data-v-69e41502"]]);var W=X;const O=e=>((0,o.Qi)("data-v-64c5653d"),e=e(),(0,o.jt)(),e),j={id:"services"},D={class:"services-section"},P=O((()=>(0,o.Lk)("div",{class:"services-header"},[(0,o.Lk)("h2",null,"Unsere besten Dienstleistungen"),(0,o.Lk)("p",null,"Die besten Reinigungsdienste für Sie")],-1))),K={class:"services-container"},H=["src","alt"],N={class:"service-content"};function Q(e,n,i,t,r,s){return(0,o.uX)(),(0,o.CE)("div",j,[(0,o.Lk)("section",D,[P,(0,o.Lk)("div",K,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.services,(e=>((0,o.uX)(),(0,o.CE)("div",{class:"service-card",key:e.id,"data-aos":"fade-up"},[(0,o.Lk)("img",{src:e.image,alt:e.name,class:"service-image"},null,8,H),(0,o.Lk)("div",N,[(0,o.Lk)("h3",null,(0,b.v_)(e.name),1),(0,o.Lk)("p",null,(0,b.v_)(e.description),1)])])))),128))])])])}var $={name:"ServicesSection",data(){return{services:[{id:1,name:"Büroreinigung",description:"Sorgen Sie für eine optimale Arbeitsumgebung mit glänzenden Oberflächen und reinster Luftqualität – für Effizienz an jedem Arbeitstag.",image:i(9216)},{id:2,name:"Praxisreinigung",description:"Unsere sorgfältige Reinigung erfüllt alle medizinischen Hygienestandards, damit Ihre Patienten und Personal sich sicher fühlen können.",image:i(4445)},{id:3,name:"Fensterreinigung",description:"Genießen Sie den klaren Ausblick! Unsere professionelle Fensterreinigung sorgt für einen glänzenden Eindruck von innen und außen.",image:i(3692)},{id:4,name:"Kitareinigung",description:"Ein sauberes Spielparadies wartet! Wir schaffen ein hygienisches und fröhliches Umfeld für die kleinen Entdecker.",image:i(7068)},{id:5,name:"Treppenhausreinigung",description:"Vom Keller bis zum Dach: Wir sorgen dafür, dass Ihre Treppenhäuser nicht nur sauber sind, sondern auch einen positiven Eindruck hinterlassen.",image:i(4182)},{id:6,name:"Universitätsreinigung",description:"Unsere Unireinigung sorgt für eine frische Lernatmosphäre, die Konzentration und Wohlbefinden fördert – für kluge Köpfe von morgen.",image:i(5987)}]}},computed:{containerClass(){return{"services-container":!0,"flex-column":this.services.length>3}}}};const q=(0,d.A)($,[["render",Q],["__scopeId","data-v-64c5653d"]]);var G=q,V=i.p+"img/aboutme.b1603c1c.png";const B=e=>((0,o.Qi)("data-v-4b17e9ad"),e=e(),(0,o.jt)(),e),J={id:"about"},Z={class:"about-us-section"},Y={class:"about-us-container"},ee=B((()=>(0,o.Lk)("div",{class:"about-us-image"},[(0,o.Lk)("img",{src:V,alt:"Reinigungsbedarf"})],-1))),ne={class:"about-us-content"},ie=B((()=>(0,o.Lk)("p",{class:"about-us-intro"},"ÜBER UNS",-1))),te=B((()=>(0,o.Lk)("h2",null,"Ihr Reinigungsservice im Herzen des Schwarzwalds",-1))),oe=B((()=>(0,o.Lk)("p",null,"Entdecken Sie die Freude an makelloser Sauberkeit und frischer Wohnkultur mit unserem professionellen Team.",-1))),re={class:"about-us-benefits"},se=B((()=>(0,o.Lk)("button",{class:"read-more-btn"},"Termin vereinbaren",-1)));function ae(e,n,i,t,r,s){const a=(0,o.g2)("font-awesome-icon");return(0,o.uX)(),(0,o.CE)("div",J,[(0,o.Lk)("section",Z,[(0,o.Lk)("div",Y,[ee,(0,o.Lk)("div",ne,[ie,te,oe,(0,o.Lk)("ul",re,[(0,o.Lk)("li",null,[(0,o.bF)(a,{class:"fa-icon",icon:"check-circle"}),(0,o.eW)("Zufriedenheit garantiert")]),(0,o.Lk)("li",null,[(0,o.bF)(a,{class:"fa-icon",icon:"check-circle"}),(0,o.eW)("Fachkundiges Reinigungspersonal")]),(0,o.Lk)("li",null,[(0,o.bF)(a,{class:"fa-icon",icon:"check-circle"}),(0,o.eW)("Pflege & Glanz für Ihr Heim")])]),se])])])])}var ce=i(292),le=i(8950),ue=i(2353);le.Yv.add(ue.SGM,ue.gdJ,ue.O0T);var de={name:"AboutUsSection",components:{FontAwesomeIcon:ce.gc}};const ve=(0,d.A)(de,[["render",ae],["__scopeId","data-v-4b17e9ad"]]);var me=ve;const be=e=>((0,o.Qi)("data-v-2a4d5a72"),e=e(),(0,o.jt)(),e),pe={id:"whyus"},ge={class:"choose-us-section"},fe={class:"choose-us-container"},he=be((()=>(0,o.Lk)("div",{class:"choose-us-header"},[(0,o.Lk)("h2",{class:"choose-us-title"},"WARUM SIE UNS WÄHLEN SOLLTEN"),(0,o.Lk)("p",{class:"choose-us-subtitle"},"Ihre Zufriedenheit ist unsere oberste Priorität.")],-1))),ke={class:"choose-us-content"},Le={class:"benefit-item","data-aos":"fade-up","data-aos-delay":"100"};function Se(e,n,i,t,r,s){const a=(0,o.g2)("font-awesome-icon");return(0,o.uX)(),(0,o.CE)("div",pe,[(0,o.Lk)("section",ge,[(0,o.Lk)("div",fe,[he,(0,o.Lk)("div",ke,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(r.benefits,(e=>((0,o.uX)(),(0,o.CE)("div",{class:"benefit-column",key:e.id},[(0,o.Lk)("div",Le,[(0,o.bF)(a,{icon:e.icon,class:"benefit-icon"},null,8,["icon"]),(0,o.Lk)("div",null,[(0,o.Lk)("h3",null,(0,b.v_)(e.title),1),(0,o.Lk)("p",null,(0,b.v_)(e.description),1)])])])))),128))])])])])}le.Yv.add(ue.B9e,ue.Wcv,ue.DX_,ue.a$);var we={name:"ChooseUsSection",components:{FontAwesomeIcon:ce.gc},data(){return{benefits:[{id:1,icon:"medal",title:"Verpflichtung zur Qualität",description:"Unsere Priorität ist es, Ihnen mit detailorientierter Sorgfalt und Expertise ein makellos sauberes Zuhause zu gewährleisten."},{id:2,icon:"thumbs-up",title:"Hoch bewerteter Service",description:"Wir sind bestrebt, unseren Kunden den bestmöglichen Service zu bieten."},{id:3,icon:"clock",title:"Pünktlicher Service",description:"Wir sind immer pünktlich und bereit, die Arbeit zu erledigen."},{id:4,icon:"tags",title:"Bezahlbare Preise",description:"Wir bieten wettbewerbsfähige Preise für alle unsere Dienstleistungen."}]}}};const Ce=(0,d.A)(we,[["render",Se],["__scopeId","data-v-2a4d5a72"]]);var Ee=Ce;const Ae=e=>((0,o.Qi)("data-v-524b1b6a"),e=e(),(0,o.jt)(),e),ze={id:"contact"},Fe={class:"contact-section"},Te={class:"contact-container"},ye=Ae((()=>(0,o.Lk)("h2",{class:"contact-title"},"Kontaktieren Sie uns",-1))),Ie={class:"form-group"},Ue=Ae((()=>(0,o.Lk)("label",{for:"name"},"Name",-1))),_e={class:"form-group"},Re=Ae((()=>(0,o.Lk)("label",{for:"email"},"E-Mail",-1))),xe={class:"form-group"},Me=Ae((()=>(0,o.Lk)("label",{for:"mobile"},"Mobilnummer",-1))),Xe={class:"form-group"},We=Ae((()=>(0,o.Lk)("label",{for:"service"},"Service auswählen",-1))),Oe=Ae((()=>(0,o.Lk)("option",{disabled:"",value:""},"Bitte wählen Sie",-1))),je=["value"],De=Ae((()=>(0,o.Lk)("div",{class:"form-group"},[(0,o.Lk)("button",{type:"submit",class:"submit-button"},"Termin vereinbaren")],-1)));function Pe(e,n,i,r,s,a){return(0,o.uX)(),(0,o.CE)("div",ze,[(0,o.Lk)("section",Fe,[(0,o.Lk)("div",Te,[ye,(0,o.Lk)("form",{onSubmit:n[4]||(n[4]=(0,t.D$)(((...e)=>a.submitForm&&a.submitForm(...e)),["prevent"])),class:"contact-form"},[(0,o.Lk)("div",Ie,[Ue,(0,o.bo)((0,o.Lk)("input",{type:"text",id:"name","onUpdate:modelValue":n[0]||(n[0]=e=>s.contact.name=e),required:""},null,512),[[t.Jo,s.contact.name]])]),(0,o.Lk)("div",_e,[Re,(0,o.bo)((0,o.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":n[1]||(n[1]=e=>s.contact.email=e),required:""},null,512),[[t.Jo,s.contact.email]])]),(0,o.Lk)("div",xe,[Me,(0,o.bo)((0,o.Lk)("input",{type:"tel",id:"mobile","onUpdate:modelValue":n[2]||(n[2]=e=>s.contact.mobile=e),required:""},null,512),[[t.Jo,s.contact.mobile]])]),(0,o.Lk)("div",Xe,[We,(0,o.bo)((0,o.Lk)("select",{id:"service","onUpdate:modelValue":n[3]||(n[3]=e=>s.contact.service=e),required:""},[Oe,((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.services,(e=>((0,o.uX)(),(0,o.CE)("option",{key:e,value:e},(0,b.v_)(e),9,je)))),128))],512),[[t.u1,s.contact.service]])]),De],32)])])])}var Ke={name:"ContactSection",data(){return{contact:{name:"",email:"",mobile:"",service:""},services:["Beratung","Reinigungsdienst","Wartung","Reparatur"]}},methods:{submitForm(){console.log("Kontaktinformationen:",this.contact)}}};const He=(0,d.A)(Ke,[["render",Pe],["__scopeId","data-v-524b1b6a"]]);var Ne=He,Qe={name:"App",components:{TopbarSection:m,NavbarSection:E,HomeSection:W,ServicesSection:G,AboutUsSection:me,ChooseUsSection:Ee,ContactSection:Ne}};const $e=(0,d.A)(Qe,[["render",r]]);var qe=$e,Ge=i(3497),Ve=i.n(Ge);const Be=(0,t.Ef)(qe);Be.mount("#app"),Be.AOS=new(Ve().init)},7068:function(e,n,i){e.exports=i.p+"img/card-kita.86100a77.png"},9216:function(e,n,i){e.exports=i.p+"img/card-officecleaning.b58058d9.png"},4445:function(e,n,i){e.exports=i.p+"img/card-praxiscleaning.08fbfe72.png"},4182:function(e,n,i){e.exports=i.p+"img/card-stairwell.86c41992.png"},5987:function(e,n,i){e.exports=i.p+"img/card-uni.92f5c3c7.png"},3692:function(e,n,i){e.exports=i.p+"img/card-windowcleaning.b7c3ea6c.png"}},n={};function i(t){var o=n[t];if(void 0!==o)return o.exports;var r=n[t]={exports:{}};return e[t].call(r.exports,r,r.exports,i),r.exports}i.m=e,function(){var e=[];i.O=function(n,t,o,r){if(!t){var s=1/0;for(u=0;u<e.length;u++){t=e[u][0],o=e[u][1],r=e[u][2];for(var a=!0,c=0;c<t.length;c++)(!1&r||s>=r)&&Object.keys(i.O).every((function(e){return i.O[e](t[c])}))?t.splice(c--,1):(a=!1,r<s&&(s=r));if(a){e.splice(u--,1);var l=o();void 0!==l&&(n=l)}}return n}r=r||0;for(var u=e.length;u>0&&e[u-1][2]>r;u--)e[u]=e[u-1];e[u]=[t,o,r]}}(),function(){i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,{a:n}),n}}(),function(){i.d=function(e,n){for(var t in n)i.o(n,t)&&!i.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:n[t]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){i.p="/nk-cleaning-website/"}(),function(){var e={524:0};i.O.j=function(n){return 0===e[n]};var n=function(n,t){var o,r,s=t[0],a=t[1],c=t[2],l=0;if(s.some((function(n){return 0!==e[n]}))){for(o in a)i.o(a,o)&&(i.m[o]=a[o]);if(c)var u=c(i)}for(n&&n(t);l<s.length;l++)r=s[l],i.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return i.O(u)},t=self["webpackChunknk_cleaning"]=self["webpackChunknk_cleaning"]||[];t.forEach(n.bind(null,0)),t.push=n.bind(null,t.push.bind(t))}();var t=i.O(void 0,[504],(function(){return i(8122)}));t=i.O(t)})();
//# sourceMappingURL=app.f009ce17.js.map