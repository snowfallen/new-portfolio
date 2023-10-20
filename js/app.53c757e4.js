(function(){"use strict";var e={690:function(e,t,a){var n=a(963),i=a(582),o=a(252),c=(a(877),{class:"container",id:"contact"}),s={class:"d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top"},r=(0,o.uE)('<div class="col-md-4 d-flex align-items-center"><a href="/" class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"><svg class="bi" width="30" height="24"><use xlink:href="#bootstrap"></use></svg></a><span class="mb-3 mb-md-0 text-muted">OB</span></div>',1),l={class:"nav col-md-4 justify-content-end list-unstyled d-flex"},d={class:"ms-3"},p={class:"text-muted",href:"https://www.linkedin.com/in/oleksandr-bondarenko-snowfall/"},u={class:"ms-3"},v={class:"text-muted",href:"https://github.com/snowfallen"};function m(e,t,a,n,i,m){var f=(0,o.up)("font-awesome-icon");return(0,o.wg)(),(0,o.iD)("footer",null,[(0,o._)("div",c,[(0,o._)("footer",s,[r,(0,o._)("ul",l,[(0,o._)("li",d,[(0,o._)("a",p,[(0,o.Wm)(f,{icon:"fa-brands fa-linkedin",size:"xl"})])]),(0,o._)("li",u,[(0,o._)("a",v,[(0,o.Wm)(f,{icon:"fa-brands fa-github",size:"xl"})])])])])])])}var f={name:"AppFooter"},g=a(744);const h=(0,g.Z)(f,[["render",m]]);var y=h,b=a(577),k=function(e){return(0,o.dD)("data-v-22e222ba"),e=e(),(0,o.Cn)(),e},_={id:"top-nav"},S=(0,o.uE)('<menu class="header__nav d-none d-md-block" data-v-22e222ba><ul class="header__ul d-flex justify-content-center" data-v-22e222ba><li class="header__li" data-v-22e222ba><a class="header__a" href="#welcome" data-v-22e222ba>Welcome</a></li><li class="header__li" data-v-22e222ba><a class="header__a" href="#skills" data-v-22e222ba>Skills</a></li><li class="header__li" data-v-22e222ba><a class="header__a" href="#experience" data-v-22e222ba>Experience</a></li><li class="header__li" data-v-22e222ba><a class="header__a" href="#contact" data-v-22e222ba>Contact</a></li></ul></menu>',1),w={id:"burger-wrap"},x=k((function(){return(0,o._)("span",null,null,-1)})),D=[x];function M(e,t,a,n,i,c){return(0,o.wg)(),(0,o.iD)("header",null,[(0,o._)("div",_,[S,(0,o._)("div",{class:(0,b.C_)(["nav-menu",{open:e.isMenuOpen}])},[(0,o._)("div",{class:(0,b.C_)(["menu-list",{"list-open":e.isMenuOpen}])},[(0,o._)("ul",null,[(0,o._)("li",null,[(0,o._)("a",{onClick:t[0]||(t[0]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.toggleMenu&&e.toggleMenu.apply(e,t)}),href:"#welcome"},"Home")]),(0,o._)("li",null,[(0,o._)("a",{onClick:t[1]||(t[1]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.toggleMenu&&e.toggleMenu.apply(e,t)}),href:"#skills"},"Skills")]),(0,o._)("li",null,[(0,o._)("a",{onClick:t[2]||(t[2]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.toggleMenu&&e.toggleMenu.apply(e,t)}),href:"#experience"},"Experience")]),(0,o._)("li",null,[(0,o._)("a",{onClick:t[3]||(t[3]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.toggleMenu&&e.toggleMenu.apply(e,t)}),href:"#contact"},"Contact")])])],2),(0,o._)("div",w,[(0,o._)("a",{class:"burger",onClick:t[4]||(t[4]=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return e.toggleMenu&&e.toggleMenu.apply(e,t)})},D)])],2)])])}var P=(0,o.aZ)({name:"AppHeader",data:function(){return{isMenuOpen:!1}},methods:{toggleMenu:function(){this.isMenuOpen=!this.isMenuOpen},closeMenu:function(){this.isMenuOpen=!1}}});const A=(0,g.Z)(P,[["render",M],["__scopeId","data-v-22e222ba"]]);var C=A,T={class:"wrapper"};function L(e,t,a,n,i,c){var s=(0,o.up)("MyWelcome"),r=(0,o.up)("MySkills"),l=(0,o.up)("MyJobHistories");return(0,o.wg)(),(0,o.iD)("div",T,[(0,o.Wm)(s),(0,o.Wm)(r),(0,o.Wm)(l)])}var j=a.p+"img/photo.cd1fe482.jpg",I=function(e){return(0,o.dD)("data-v-30ab0412"),e=e(),(0,o.Cn)(),e},H={class:"container",id:"welcome"},O={class:"container-welcome d-flex flex-column justify-content-center"},z=I((function(){return(0,o._)("div",{class:"img-container"},[(0,o._)("img",{src:j,alt:"img"})],-1)})),E=I((function(){return(0,o._)("h1",null,"Welcome",-1)}));function q(e,t,a,n,i,c){return(0,o.wg)(),(0,o.iD)("div",H,[(0,o._)("div",O,[z,E,(0,o._)("h2",null,(0,b.zw)(e.welcomeMessage.join("")),1)])])}var W=(0,o.aZ)({name:"MyWelcome",data:function(){return{welcomeMessage:[]}},methods:{createWelcomeMessage:function(){var e=this,t="My name Oleksander, I'm a Full-Stack Developer",a=t.split(""),n=0,i=setInterval((function(){n<a.length?(e.welcomeMessage.push(a[n]),n++):clearInterval(i)}),35)}},mounted:function(){this.createWelcomeMessage()}});const J=(0,g.Z)(W,[["render",q],["__scopeId","data-v-30ab0412"]]);var F=J,B=function(e){return(0,o.dD)("data-v-3b723329"),e=e(),(0,o.Cn)(),e},Z={id:"skills"},Q=B((function(){return(0,o._)("h1",null,"My Skills",-1)}));function Y(e,t,a,n,i,c){var s=(0,o.up)("MySkill");return(0,o.wg)(),(0,o.iD)("div",Z,[Q,(0,o.Wm)(s)])}var V=(0,o.uE)('<div class="skills d-flex flex-wrap flex-column gap-5" data-v-c713960c><div class="card-container" data-v-c713960c><div class="card__front d-flex justify-content-center flex-column" data-v-c713960c><h2 data-v-c713960c>Frontend</h2></div><div class="card__back" data-v-c713960c><div data-v-c713960c><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>JavaScript (JS) <span class="tooltip-text" data-v-c713960c>A programming language for creating interactive websites. <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>TypeScript (TS) <span class="tooltip-text" data-v-c713960c>An extension of JavaScript with added type checking. <a href="https://www.typescriptlang.org/docs/" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Vue.js <span class="tooltip-text" data-v-c713960c>A flexible JavaScript framework for building web interfaces. <a href="https://vuejs.org/v2/guide/" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>React <span class="tooltip-text" data-v-c713960c>A library for creating user interfaces in JavaScript. <a href="https://reactjs.org/docs/getting-started.html" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>HTML <span class="tooltip-text" data-v-c713960c>A language for structuring web pages. <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>CSS <span class="tooltip-text" data-v-c713960c>A styling language for web pages. <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>SCSS (Sass) <span class="tooltip-text" data-v-c713960c>An extension of CSS with added features. <a href="https://sass-lang.com/documentation" target="_blank" data-v-c713960c>Documentation</a></span></p></div></div></div></div><div class="card-container" data-v-c713960c><div class="card__front d-flex justify-content-center" data-v-c713960c><h2 data-v-c713960c>Backend</h2></div><div class="card__back" data-v-c713960c><div data-v-c713960c><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>PHP <span class="tooltip-text" data-v-c713960c>A server-side scripting language for web development. <a href="https://www.php.net/manual/en/index.php" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Laravel <span class="tooltip-text" data-v-c713960c>A PHP web application framework. <a href="https://laravel.com/docs" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Symfony <span class="tooltip-text" data-v-c713960c>A PHP web application framework and a set of reusable PHP components. <a href="https://symfony.com/doc/current/index.html" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>SQL <span class="tooltip-text" data-v-c713960c>Structured Query Language used for managing relational databases. <a href="https://dev.mysql.com/doc/" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>NoSQL <span class="tooltip-text" data-v-c713960c>A non-relational database management system. <a href="https://www.mongodb.com/nosql-explained" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Solr <span class="tooltip-text" data-v-c713960c>An open-source search platform. <a href="https://lucene.apache.org/solr/guide/8_8/getting-started.html" target="_blank" data-v-c713960c>Documentation</a></span></p></div></div></div></div></div><div class="skills d-flex flex-wrap mt-5" data-v-c713960c><div class="card-container" data-v-c713960c><div class="card__front d-flex justify-content-center" data-v-c713960c><h2 data-v-c713960c>DevOps and Tools</h2></div><div class="card__back" data-v-c713960c><div data-v-c713960c><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Git <span class="tooltip-text" data-v-c713960c>A version control system for tracking changes in source code. <a href="https://git-scm.com/doc" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Jira <span class="tooltip-text" data-v-c713960c>A popular project management and issue tracking tool. <a href="https://support.atlassian.com/jira-software-cloud/docs/get-started/" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Docker <span class="tooltip-text" data-v-c713960c>A platform for developing, shipping, and running applications in containers. <a href="https://docs.docker.com/" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>AWS (Amazon Web Services) <span class="tooltip-text" data-v-c713960c>A cloud computing platform by Amazon. <a href="https://aws.amazon.com/getting-started/" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>TDD (Test-Driven Development) <span class="tooltip-text" data-v-c713960c>A software development methodology that emphasizes writing tests before code. <a href="https://en.wikipedia.org/wiki/Test-driven_development" target="_blank" data-v-c713960c>Learn More</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>PHPUnit <span class="tooltip-text" data-v-c713960c>A popular testing framework for PHP. <a href="https://phpunit.de/getting-started/phpunit-10.html" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Behat <span class="tooltip-text" data-v-c713960c>A PHP framework for behavior-driven development. <a href="https://docs.behat.org/en/latest/quick_intro.html" target="_blank" data-v-c713960c>Documentation</a></span></p></div><div data-v-c713960c><p class="skill-tooltip" data-v-c713960c>Integration Testing <span class="tooltip-text" data-v-c713960c>A type of testing that checks the interaction between different components of an application. <a href="https://en.wikipedia.org/wiki/Integration_testing" target="_blank" data-v-c713960c>Learn More</a></span></p></div></div></div></div></div>',2),G=[V];function R(e,t,a,n,i,c){return(0,o.wg)(),(0,o.iD)("div",null,G)}var U=(0,o.aZ)({name:"MySkill",data:function(){return{flippedFront:!1,flippedBack:!1,flippedTools:!1}},mounted:function(){var e=this,t=document.querySelectorAll(".card-container");t[0].addEventListener("mouseenter",(function(){var a=t[0].querySelector(".card__back"),n=t[0].querySelector(".card__front");a&&n&&!e.flippedFront&&(a.style.transform="rotateY(0deg)",a.style.zIndex="2",n.style.transform="rotateY(180deg)",n.style.zIndex="-1",setTimeout((function(){e.flippedFront=!0}),300))})),t[0].addEventListener("mouseleave",(function(){var a=t[0].querySelector(".card__back"),n=t[0].querySelector(".card__front");a&&n&&e.flippedFront&&(a.style.transform="rotateY(-180deg)",a.style.zIndex="0",n.style.transform="rotateY(0deg)",n.style.zIndex="1",setTimeout((function(){e.flippedFront=!1}),300))})),t[1].addEventListener("mouseenter",(function(){var a=t[1].querySelector(".card__back"),n=t[1].querySelector(".card__front");a&&n&&!e.flippedBack&&(a.style.transform="rotateY(0deg)",a.style.zIndex="2",n.style.transform="rotateY(180deg)",n.style.zIndex="-1",setTimeout((function(){e.flippedBack=!0}),300))})),t[1].addEventListener("mouseleave",(function(){var a=t[1].querySelector(".card__back"),n=t[1].querySelector(".card__front");a&&n&&e.flippedBack&&(a.style.transform="rotateY(-180deg)",a.style.zIndex="0",n.style.transform="rotateY(0deg)",n.style.zIndex="1",setTimeout((function(){e.flippedBack=!1}),300))})),t[2].addEventListener("mouseenter",(function(){var a=t[2].querySelector(".card__back"),n=t[2].querySelector(".card__front");a&&n&&!e.flippedTools&&(a.style.transform="rotateY(0deg)",a.style.zIndex="2",n.style.transform="rotateY(180deg)",n.style.zIndex="-1",setTimeout((function(){e.flippedTools=!0}),300))})),t[2].addEventListener("mouseleave",(function(){var a=t[2].querySelector(".card__back"),n=t[2].querySelector(".card__front");a&&n&&e.flippedTools&&(a.style.transform="rotateY(-180deg)",a.style.zIndex="0",n.style.transform="rotateY(0deg)",n.style.zIndex="1",setTimeout((function(){e.flippedTools=!1}),300))}))}});const N=(0,g.Z)(U,[["render",R],["__scopeId","data-v-c713960c"]]);var X=N,K=(0,o.aZ)({name:"MySkills",components:{MySkill:X},data:function(){return{skills:["PHP","JS","Laravel","Vue","SQL","NoSQL","Git","Jira","Docker","Symfony","React","TS","Solr","AWS","HTML","CSS","SCSS","TDD","PHPUnit","Behat","Integration Testing"]}}});const $=(0,g.Z)(K,[["render",Y],["__scopeId","data-v-3b723329"]]);var ee=$,te={id:"experience"},ae={class:"container mb-5"},ne={class:"exp"},ie={class:"carousel"};function oe(e,t,a,n,i,c){var s=this,r=(0,o.up)("MyJobHistory");return(0,o.wg)(),(0,o.iD)("div",te,[(0,o._)("div",ae,[(0,o._)("nav",null,[(0,o._)("menu",null,[(0,o._)("li",{onClick:t[0]||(t[0]=function(e){return s.changeSlide(0)}),class:"nav-item"}," ETER-MED "),(0,o._)("li",{onClick:t[1]||(t[1]=function(e){return s.changeSlide(1)}),class:"nav-item"}," Deosite "),(0,o._)("li",{onClick:t[2]||(t[2]=function(e){return s.changeSlide(2)}),class:"nav-item"}," Freelance "),(0,o._)("li",{onClick:t[3]||(t[3]=function(e){return s.changeSlide(3)}),class:"nav-item"}," Promin ")])]),(0,o._)("div",ne,[(0,o._)("div",ie,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.experiences,(function(e){return(0,o.wg)(),(0,o.j4)(r,{key:e,experience:e},null,8,["experience"])})),128))])])])])}var ce={class:"item"},se={class:"text-center"},re={class:"p-3"},le={class:"pb-2"},de={class:"px-3"},pe=(0,o._)("h4",null,"Skills:",-1),ue={class:"py-2 px-3"};function ve(e,t,a,n,i,c){return(0,o.wg)(),(0,o.iD)("div",ce,[(0,o._)("h2",se,(0,b.zw)(a.experience["title"]),1),(0,o._)("h3",re,(0,b.zw)(a.experience["baseInfos"]),1),(0,o._)("h5",le,(0,b.zw)(a.experience["experienceSummary"]),1),(0,o._)("ul",de,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(a.experience["experienceDescription"],(function(e){return(0,o.wg)(),(0,o.iD)("li",{class:"py-2",key:e},(0,b.zw)(e[0]),1)})),128))]),pe,(0,o._)("p",ue,(0,b.zw)(a.experience["skills"]),1)])}var me={name:"MyJobHistory",props:{experience:{type:Array,required:!0}}};const fe=(0,g.Z)(me,[["render",ve]]);var ge=fe,he=(0,o.aZ)({name:"MyJobHistories",components:{MyJobHistory:ge},data:function(){return{experiences:[{titles:"Full Stack Developer",baseInfos:"ETER-MED · Full-time Oct 2022 - Jul 2023 · Gdańsk, Pomorskie, Poland",experienceSummary:"Designed, created and updated a web applications for clinic staff by Laravel and Vue.js:",experienceDescription:[["Created a robust web application using Laravel and Vue.js tailored for clinic staff, enhancing their workflow efficiency. "],["Implemented cloud uploading functionality for file storage and retrieval."],["Integrated Apache Solr to enable efficient searching of files, articles, and categories."],["Wrote Bash scripts to expedite developer tasks."],["Utilized Docker and created a docker-compose files for seamless projects deployment. "],["Configured and ran the projects in Jenkins for automated builds and deployments. "],["Streamlined the email delivery process to enhance website speed and performance."],["Contributed to multiple projects by implementing new features and enhancements. "],["Provided ongoing support and maintenance for legacy projects."],["Actively participated in code reviews to ensure code quality and adherence to best practices."]],skills:"PHP · JavaScript · Laravel · Vue.js · Git · Docker · Jenkins · Front-End Development · Back-End Web Development · Agile Methodologies · Remote Teamwork · Visual Communication · Scrum · AJAX · MySQL · Object-Oriented Programming (OOP) · Cascading Style Sheets (CSS) · HTML · SQL · Bootstrap · Apache Solr · HTML5 · jQuery"},{titles:"Backend Developer",baseInfos:"Deosite / creating desire · Full-time Jan 2022 - Sep 2022 · Gdańsk, Pomorskie, Poland",experienceSummary:"Engaged in the development and modification of online stores:",experienceDescription:[["Developed Symfony controllers, helpers, twig templates, and other components. "],["Developed a custom Magento 2 module to streamline the administration of discount coupons, simplifying the workflow. "],["Modified an existing module for delivery and shipping to meet specific business requirements."],["Utilized the M2E Pro plugin to create over 100 new product templates for the eBay shop, optimizing the listing process. "],["Collaborated with the team to gather requirements, implement new features, and troubleshoot issues."],["Engaged in the planning phase to acquire a comprehensive understanding of the project's requirements and objectives."]],skills:"PHP · JavaScript · Symfony Framework · Git · Docker · Front-End Development · Back-End Web Development · Agile Methodologies · Remote Teamwork · Visual Communication · Written Communication · Scrum · AJAX · MySQL · Object-Oriented Programming (OOP) · Cascading Style Sheets (CSS) · HTML · SQL · Magento 2 · jQuery"},{titles:"Freelance Full-Stack Developer",baseInfos:"Freelance May 2020 - Oct 2022",experienceSummary:"Made many different web projects:",experienceDescription:[["Translated designs from Figma, PSD, and other formats into semantic, accessible, and valid HTML templates using HTML5, CSS3 (SCSS), and JavaScript."],["Developed a robust backend using PHP and utilized Laravel and Vue.js to build a full-featured web application."],["Designed and implemented the frontend and backend components to deliver a seamless user experience."],["Integrated various APIs and third-party services to enhance the functionality of the application."],["Implemented authentication and authorization mechanisms to ensure data security and user privacy."],["Optimized application performance and scalability through efficient database design and query optimization techniques."],["Conducted thorough testing and debugging to ensure the application's stability and reliability."]],skills:"PHP · JavaScript · Laravel · Vue.js · Git · Docker · Jenkins · Front-End Development · Back-End Web Development · Remote Teamwork · Written Communication · AJAX · MySQL · Cascading Style Sheets (CSS) · HTML · SQL · Gulp.js · Scss · Bootstrap · SASS · HTML5 · jQuery"},{titles:"Internet Network Specialist and System Administrator",baseInfos:'AUTO COOPERATIVE "Promin" · Full-time Jan 2016 - Jun 2018 · Cherkasy, Cherkasy, Ukraine',experienceSummary:"Administration of computers and Internet networks:",experienceDescription:[["Implemented of fiber optic connectivity in residential buildings, bringing high-speed internet access to residents."],["Configured and established PPPoE connections on clients' computers, enabling them to connect to the fiber optic network."],["Provided comprehensive setup and configuration services for clients' computers, ensuring optimal performance and functionality."],["Administered and maintained computers running Linux and Windows operating systems, addressing technical issues and ensuring smooth operations."],["Conducted troubleshooting and diagnostic tasks to resolve hardware and software issues, ensuring minimal downtime."],["Assisted clients in software installations, updates, and configuration adjustments to meet their specific requirements."],[" Provided technical support and guidance to clients, resolving technical inquiries and issues in a professional and efficient manner."]],skills:"Visual Communication · Cascading Style Sheets (CSS) · HTML · SQL · Linux · Network Administration · System Administration · Computer Hardware · Transmission Control Protocol (TCP) · Windows · Internet Protocol Suite (TCP/IP) · PPPoE"}]}},methods:{changeSlide:function(e){var t=document.querySelector(".carousel");t.style.transform="translateX(-".concat(100*e,"%)");var a=document.querySelectorAll(".nav-item");a.forEach((function(e){return e.classList.remove("active")})),a[e].classList.add("active")}},mounted:function(){window.addEventListener("scroll",(function(){for(var e=document.querySelectorAll(".nav-item"),t=document.querySelectorAll(".item"),a=0,n=0;n<t.length;n++){var i=t[n].getBoundingClientRect();i.top<=0&&(a=n)}e.forEach((function(e){return e.classList.remove("active")})),e[a].classList.add("active")}))}});const ye=(0,g.Z)(he,[["render",oe],["__scopeId","data-v-b7b32036"]]);var be=ye,ke=(0,o.aZ)({name:"AppMain",components:{MySkills:ee,MyWelcome:F,MyJobHistories:be}});const _e=(0,g.Z)(ke,[["render",L]]);var Se=_e,we=(0,o.aZ)({components:{AppHeader:C,AppFooter:y,AppMain:Se}}),xe=(0,o.aZ)((0,i.pi)((0,i.pi)({},we),{__name:"App",setup:function(e){return function(e,t){return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(C),(0,o.Wm)(Se),(0,o.Wm)(y)],64)}}}));const De=xe;var Me=De,Pe=a(636),Ae=a(810),Ce=a(417),Te=a(24);Pe.vI.add(Ce.BC0,Te.zhw,Te.D9H),(0,n.ri)(Me).component("font-awesome-icon",Ae.GN).mount("#app")}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,n,i,o){if(!n){var c=1/0;for(d=0;d<e.length;d++){n=e[d][0],i=e[d][1],o=e[d][2];for(var s=!0,r=0;r<n.length;r++)(!1&o||c>=o)&&Object.keys(a.O).every((function(e){return a.O[e](n[r])}))?n.splice(r--,1):(s=!1,o<c&&(c=o));if(s){e.splice(d--,1);var l=i();void 0!==l&&(t=l)}}return t}o=o||0;for(var d=e.length;d>0&&e[d-1][2]>o;d--)e[d]=e[d-1];e[d]=[n,i,o]}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p=""}(),function(){var e={143:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var i,o,c=n[0],s=n[1],r=n[2],l=0;if(c.some((function(t){return 0!==e[t]}))){for(i in s)a.o(s,i)&&(a.m[i]=s[i]);if(r)var d=r(a)}for(t&&t(n);l<c.length;l++)o=c[l],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(d)},n=self["webpackChunknew_portfolio"]=self["webpackChunknew_portfolio"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[998],(function(){return a(690)}));n=a.O(n)})();
//# sourceMappingURL=app.53c757e4.js.map