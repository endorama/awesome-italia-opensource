"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[237],{9305:(e,t,a)=>{a.r(t),a.d(t,{default:()=>f});var r=a(7294),l=a(6588),s=(a(6146),a(6493),a(6367)),i=a(7488),o=a(8650),n=a(5600),c=a(9403);const m=JSON.parse('{"data":[{"name":"Pytorch Deep Learning","repository_platform":"github","repository_url":"https://github.com/Atcold/pytorch-Deep-Learning","site_url":"https://atcold.github.io/pytorch-Deep-Learning/","type":"learning","license":"Creative Commons","tags":["python","jupyter notebook","deep learning","pytorch"]},{"name":"IO App","repository_platform":"github","repository_url":"https://github.com/pagopa/io-app","site_url":"https://io.italia.it","type":"app","license":"EUPL-1.2","tags":["typescript","app","android","ios"]},{"name":"Italiaremote","repository_platform":"github","repository_url":"https://github.com/italiaremote/awesome-italia-remote","site_url":"https://italiaremote.com/companies","type":"community","license":"Undefined","tags":["awesome","remote work"]},{"name":"Arduino","repository_platform":"github","repository_url":"https://github.com/arduino/Arduino","site_url":"https://www.arduino.cc/en/software/","type":"tool","license":"GPL-2.0","tags":["css","bootstrap","javascript"]},{"name":"Redis","repository_platform":"github","repository_url":"https://github.com/redis/redis","site_url":"https://redis.io","type":"tool","license":"BSD-3-Clause","tags":["c","database"]},{"name":"Bootstrap Italia","repository_platform":"github","repository_url":"https://github.com/italia/bootstrap-italia","site_url":"https://developers.italia.it","type":"library","license":"BSD-3-Clause","tags":["css","bootstrap","javascript"]},{"name":"Pyxis","repository_platform":"github","repository_url":"https://github.com/primait/pyxis","type":"library","license":"Undefined","tags":["design system","elm","typescript"]},{"name":"Nuvolaris","repository_platform":"github","repository_url":"https://github.com/nuvolaris/nuvolaris","type":"faas","license":"Apache-2.0","tags":["go","python","serverless","startup"]}]}');function p(){const[e,t]=(0,r.useState)(null),[a,l]=(0,r.useState)(null),[p,u]=(0,r.useState)(""),[d,h]=(0,r.useState)(!0);(0,r.useEffect)((()=>{t(y(m)),h(!1),f()}),[]);const y=e=>[...e.data||[]].map((e=>(e.date=new Date(e.date),e))),b=()=>{f()},g=e=>{const t=e.target.value;let r={...a};r.global.value=t,l(r),u(t)},f=()=>{l({global:{value:null,matchMode:s.a6.CONTAINS},name:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},type:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},license:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.STARTS_WITH}]},tags:{operator:s.pg.AND,constraints:[{value:null,matchMode:s.a6.CONTAINS}]}}),u("")},E=r.createElement("div",{className:"flex justify-content-between"},r.createElement(c.z,{type:"button",icon:"pi pi-filter-slash",label:"Clear",className:"p-button-outlined",onClick:b}),r.createElement("span",{className:"p-input-icon-left"},r.createElement("i",{className:"pi pi-search"}),r.createElement(n.o,{value:p,onChange:g,placeholder:"Keyword Search"})));return r.createElement("div",{className:"datatable-filter-demo"},r.createElement("div",{className:"card"},r.createElement(i.w,{value:e,paginator:!0,showGridlines:!0,className:"p-datatable-customers",rows:20,dataKey:"id",filters:a,filterDisplay:"menu",loading:d,responsiveLayout:"scroll",globalFilterFields:["name","repository_platform"],header:E,emptyMessage:"No projects found."},r.createElement(o.s,{field:"name",header:"Name",body:e=>r.createElement(r.Fragment,null,r.createElement("a",{href:e.site_url},e.name)),filter:!0,filterPlaceholder:"Search by name",style:{minWidth:"20em"}}),r.createElement(o.s,{field:"repository_platform",body:e=>r.createElement(r.Fragment,null,r.createElement("a",{href:e.repository_url},e.repository_platform)),header:"Repository Platform",style:{minWidth:"10em"}}),r.createElement(o.s,{field:"type",header:"Type",filter:!0,filterPlaceholder:"Search by type",style:{minWidth:"10em"}}),r.createElement(o.s,{field:"license",header:"License",filter:!0,filterPlaceholder:"Search by license",style:{minWidth:"20em"}}),r.createElement(o.s,{field:"tags",header:"Tags",filter:!0,filterPlaceholder:"Search by tags",style:{minWidth:"55em"},body:e=>e.tags.join(", ")}))))}var u=a(3291);const d="wrapper_m3th",h="form_input_z9lC",y="subscribe_pLww",b="notice_ltfh";function g(){const[e,t]=(0,u.cI)("xoqbqong");return e.succeeded?r.createElement("p",null,"Thanks for joining!"):r.createElement("div",{className:d},r.createElement("form",{onSubmit:t},r.createElement("div",{className:"form-input"},r.createElement("input",{id:"email",type:"email",name:"email",placeholder:"Email Address",className:h,required:!0}),r.createElement(u.p8,{prefix:"Email",field:"email",errors:e.errors}),r.createElement("button",{type:"submit",disabled:e.submitting,className:y},"Subscribe"),r.createElement("div",{className:b},r.createElement("input",{type:"checkbox",name:"subscribe",value:"newsletter",required:!0}),r.createElement("span",null,"I agree to my email address being stored and uses to recieve monthly newsletter.")))))}function f(){return r.createElement(l.Z,{title:"Home",wrapperClassName:"layout",description:"Italia Opensource is a list of open source projects created by Italian companies or developers. The repository intends to give visibility to open source projects and stimulate the community to contribute to growing the ecosystem."},r.createElement("main",{className:"main"},r.createElement("section",{className:"wrapper"},r.createElement("div",{className:"content"},r.createElement("header",null,r.createElement("h1",null,"Italia Opensource")),r.createElement("section",null,r.createElement("p",null,"Italia Opensource is a list of open source projects created by Italian companies or developers.",r.createElement("br",null),"The repository intends to give visibility to open source projects and stimulate the community to contribute to growing the ecosystem."),r.createElement(p,null)))),r.createElement("section",{className:"wrapper"},r.createElement("div",{className:"content"},r.createElement("header",null,r.createElement("h1",null,"Subscribe Us")),r.createElement("section",null,r.createElement("p",null,"The newsletter will be dedicated to keeping you updated on new open source projects in the Italian community and events around the country.")),r.createElement("footer",null,r.createElement(g,null))))))}}}]);