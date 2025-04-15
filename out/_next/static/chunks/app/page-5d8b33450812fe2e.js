(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{5212:(e,t,s)=>{"use strict";s.d(t,{default:()=>b});var i=s(5155),a=s(2115);let l=e=>{let{selectedTab:t,setSelectedTab:s}=e;return(0,i.jsx)("nav",{className:"fixed bottom-0 bg-black z-10 backdrop-blur-md w-full md:absolute md:top-0 md:bottom-auto right-0 md:bg-ligthwhite md:z-{-1} border-b border-l border-ligthwhite rounded-bl-lg w-[55%] md:w-[45%]",children:(0,i.jsx)("ul",{className:"flex justify-evenly gap-2 py-4 w-full",children:["About me","Skills","Portfolio"].map(e=>(0,i.jsx)("li",{className:"text-grey-text text-xs truncate text-nowrap sm:text-sm hover:cursor-pointer ".concat(t===e?"text-primary":""),onClick:()=>s(e),children:e},e))})})},r=e=>{let{title:t,timelineItems:s,liCSS:a={marginBottom:"20px"}}=e;if(!(s.length<1))return(0,i.jsxs)("div",{className:"mt-5",children:[(0,i.jsx)("h3",{className:"text-white font-bold text-md",children:t}),(0,i.jsx)("ul",{className:"ml-5 mt-3 relative border-l border-gray-500",children:null==s?void 0:s.map((e,t)=>(0,i.jsxs)("li",{className:"ml-4",style:a,children:[(0,i.jsx)("div",{className:"absolute mt-1.5 -left-1.5 bg-primary rounded-full w-3 h-3"}),(0,i.jsx)("time",{className:"text-primary text-xs md:text-sm",children:e.period}),(0,i.jsx)("h3",{className:"text-white-text font-semibold mb-1 md:mb-0 text-sm md:text-md",children:e.title}),e.quote&&(0,i.jsx)("blockquote",{className:"italic font-semibold text-gray-900",children:(0,i.jsxs)("p",{className:"text-gray-400 text-xs md:text-md text-base",children:['"',e.quote,'"']})}),(0,i.jsx)("p",{className:"text-gray-400 text-xs md:text-md text-base",children:e.description})]},t))})]})},n=()=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"text-grey-text text-sm md:text-md",children:"As a recent graduate in Industrial Engineering with a focus on Computer Science, I am exploring opportunities to expand my skill set and deepen my knowledge. I believe in continuous learning and strive to stay updated with the latest technologies and industry trends. I am excited to collaborate with others and contribute to innovative projects."}),(0,i.jsx)(r,{title:"Experience",timelineItems:[{title:"iCure internship - IoT software engineering",period:"January - June 2024",quote:"Design and implementation of an IoT solution for medical data collection.",description:""},{title:"OnePoint internship - software development",period:"March - April 2021",description:'IoT extension to the "OneRoom" project, built by MIC Mons to showcase AI\'s power in a playful manner.'}]}),(0,i.jsx)(r,{title:"Education",timelineItems:[{title:"Computer Science",period:"September 2022 - June 2024",description:"ECAM Brussels Engineering School"},{title:"Industrial Engineer",period:"September 2018 - June 2022",description:"ECAM Brussels Engineering School"}],liCSS:{marginBottom:"12px"}})]}),o=e=>{let{title:t,skills:s}=e;if(!((null==s?void 0:s.length)<1))return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:"font-semibold text-white mt-5 mb-3 text-sm md:text-md",children:t}),(0,i.jsx)("div",{className:"bg-ligthgrey-bg border border-ligthwhite rounded-md py-2 px-5 text-xs md:text-sm",children:null==s?void 0:s.map((e,t)=>(0,i.jsxs)("div",{className:"my-4",children:[(0,i.jsx)("label",{className:"font-medium text-white-text mb-1 mr-1.5",children:e.name}),(0,i.jsxs)("label",{className:"text-white-text text-sm mb-1",children:[e.percentage,"%"]}),(0,i.jsx)("div",{className:"bg-ligthwhite rounded-2xl w-full h-1",children:(0,i.jsx)("div",{className:"bg-linear-to-r from-cyan-500 to-primary h-full rounded-2xl",style:{width:"".concat(e.percentage,"%")}})})]},t))})]})};var c=s(9432);let d=[(0,i.jsx)(c.ptC,{color:"#3776AB",size:36},1),(0,i.jsx)(c.$gB,{color:"#E34F26",size:36},2),(0,i.jsx)(c.jrh,{color:"#1572B6",size:36},3),(0,i.jsx)(c.AeH,{color:"#F7DF1E",size:36},4),(0,i.jsx)(c.GWR,{color:"#61DAFB",size:36},5),(0,i.jsx)(c.h47,{color:"#DD0031",size:36},6),(0,i.jsx)(c.weV,{color:"#092E20",size:36},7),(0,i.jsx)(c.kjk,{color:"#6DB33F",size:36},8),(0,i.jsx)(c.z33,{color:"#4479A1",size:36},9),(0,i.jsx)(c.$pK,{color:"#47A248",size:36},10),(0,i.jsx)(c.tih,{color:"#2496ED",size:36},11),(0,i.jsx)(c.tev,{color:"#326CE5",size:36},12),(0,i.jsx)(c.fZk,{color:"#FF6C37",size:36},13)],m=()=>(0,i.jsx)("div",{className:"w-full overflow-hidden py-4",children:(0,i.jsxs)("div",{className:"animate-scroll flex gap-10",children:[d.map((e,t)=>(0,i.jsx)("div",{className:"text-3xl text-white inline-block hover:scale-110 transition-transform",children:e},t)),d.map((e,t)=>(0,i.jsx)("div",{className:"text-3xl text-white inline-block hover:scale-110 transition-transform",children:e},"dupe-".concat(t)))]})}),x=()=>(0,i.jsxs)("div",{className:"",children:[(0,i.jsx)(m,{}),(0,i.jsx)(o,{title:"Languages",skills:[{name:"Python",percentage:"80"},{name:"Java",percentage:"70"},{name:"HTML/CSS",percentage:"85"},{name:"Javascript",percentage:"70"}]}),(0,i.jsx)(o,{title:"Frameworks",skills:[{name:"React",percentage:"80"},{name:"Angular",percentage:"70"},{name:"Django",percentage:"65"},{name:"Spring boot",percentage:"70"}]}),(0,i.jsx)(o,{title:"Databases",skills:[{name:"MySQL",percentage:"90"},{name:"Mongodb",percentage:"75"}]}),(0,i.jsx)(o,{title:"Tools",skills:[{name:"Docker",percentage:"80"},{name:"Kubernetes",percentage:"80"},{name:"Postman",percentage:"85"}]})]});var h=s(6766),p=s(9911),g=function(e){return e.WEB="Web Development",e.MOBILE="Mobile dev",e.CLOUD_AND_INFRA="Cloud & infrastructure",e.IOT="IOT",e}({});let u=e=>{let{project:t}=e,[s,l]=(0,a.useState)(!1);return(0,i.jsxs)("div",{className:"min-w-[300px] max-w-[400px] mb-6",children:[(0,i.jsx)("div",{className:"relative w-full h-[220px]",onClick:()=>l(!0),children:(0,i.jsx)(h.default,{src:t.imagePath,alt:"image-".concat(t.title),fill:!0,className:"object-cover rounded-lg"})}),s&&(0,i.jsx)("div",{className:"fixed inset-0 z-50 bg-black/80 flex justify-center items-center",onClick:()=>l(!1),children:(0,i.jsx)("div",{className:"relative w-[90vw] max-w-[800px] h-[50vh]",children:(0,i.jsx)(h.default,{src:t.imagePath,alt:"image-".concat(t.title,"-large"),fill:!0,className:"object-contain rounded-lg"})})}),(0,i.jsxs)("div",{className:"flex justify-between items-center",children:[(0,i.jsx)("h2",{className:"text-semibold text-white-text mt-3",children:t.title}),(null==t?void 0:t.githubLink)&&(0,i.jsx)(p.hL4,{className:"text-primary",onClick:()=>{var e;return window.location.href=null!=(e=t.githubLink)?e:""}})]}),(0,i.jsx)("p",{className:"text-grey-text text-sm",children:t.description}),(0,i.jsx)("div",{className:"flex flex-wrap gap-2 mt-2",children:t.technologies.map((e,t)=>(0,i.jsx)("p",{className:"text-xs py-0.5 px-3 border border-ligthwhite rounded-sm text-white-text bg-grey-bg",children:e},t))})]})},j=()=>{let e=["All","Web Development","Mobile dev","IOT","Cloud & infrastructure"],[t,s]=(0,a.useState)("All"),[l,r]=(0,a.useState)([]),n=[{title:"Makassar management",imagePath:"/images/projects/makassar_management/orders.png",description:"Management SAAS for a bags business. Allows to manage clients, products, orders and their invoices.",technologies:["HTML","CSS","React.js","Ktor","MongoDB","JWT"],githubLink:"https://github.com/Nathanb-ecam/makassar-management-frontend.git",categories:[g.WEB]},{title:"AI Gallery",imagePath:"/images/projects/AI_gallery/clusters.png",description:"Gallery app that stores images and allows to perform detection (humans/animals) and face clustering.",technologies:["HTML","CSS","React.js","Python","Django","PostgreSQL","yolov3","DBSCAN"],githubLink:"https://github.com/Nathanb-ecam/AI_smart_gallery.git",categories:[g.WEB]},{title:"IoT device configurator",imagePath:"/images/projects/IoT_thesis/android_app.png",description:"An android app handling the configuration of IoT devices, by passing credentials through Bluetooth Low Energy.",technologies:["Android Studio","Jetpack compose","BLE"],githubLink:"https://github.com/Nathanb-ecam/netty-mqtt-loadtester.git",categories:[g.MOBILE,g.IOT]},{title:"IoT loadtest/monitoring",imagePath:"/images/projects/IoT_thesis/grafana.png",description:"GCP deployment of the IoT infrastructure, with monitoring of services and MQTT broker. Implementation of a loadtesting microservice to simulate a fleet of devices.",technologies:["GCP","GKE","Kubernetes","Prometheus","Grafana","Kotlin","Ktor","MQTT","EMQX","Netty"],githubLink:"https://github.com/Nathanb-ecam/netty-mqtt-loadtester.git",categories:[g.CLOUD_AND_INFRA,g.IOT]},{title:"Fast food order app",imagePath:"/images/projects/android_order_app/android_restaurant.png",description:"An android app that allows users to place orders, by selecting menus and extras.",technologies:["Android Studio","Jetpack compose","BLE","Coil"],githubLink:"https://github.com/Nathanb-ecam/android_restaurant_order.git",categories:[g.MOBILE]},{title:"IoT telemetry",imagePath:"/images/projects/IoT_telemetry/iot_telemetry_ui.png",description:"An IoT monitoring solution displaying real time humidity/temperature sensors data.",technologies:["MQTT","C/C++","Arduino","LoraWan","HTML","CSS","Node.js","Express","socket.io","JWT"],githubLink:"https://github.com/Nathanb-ecam/IoT_telemetry_app.git",categories:[g.IOT]}];return(0,a.useEffect)(()=>{if("All"===t)return void r(n);r(n.filter(e=>e.categories.includes(t)))},[t]),(0,i.jsxs)("div",{className:"text-grey-text",children:[e.length>0&&(0,i.jsx)("ul",{className:"flex gap-5 whitespace-nowrap overflow-scroll py-1 mb-5",children:e.map((e,a)=>(0,i.jsx)("li",{className:"\n              hover:cursor-pointer\n              text-sm\n              ".concat(t===e&&"text-primary","\n              "),onClick:()=>s(e),children:e},a))}),(0,i.jsx)("div",{className:"flex justify-center flex-wrap gap-5",children:l.map((e,t)=>(0,i.jsx)(u,{project:e},t))})]})},b=()=>{let[e,t]=(0,a.useState)("About me");return(0,i.jsxs)("div",{className:"relative overflow-hidden bg-grey-bg flex-1 px-5 border border-ligthwhite rounded-2xl",children:[(0,i.jsx)(l,{selectedTab:e,setSelectedTab:t}),(0,i.jsxs)("section",{className:"w-full",children:[(0,i.jsxs)("div",{className:"title mt-[20px]",children:[(0,i.jsx)("div",{className:"text-xl md:text-3xl font-bold text-white-text",children:e}),(0,i.jsx)("div",{className:"line bg-primary mt-2 mb-5 rounded w-[50px] h-[5px]"})]}),(0,i.jsxs)("div",{className:"content overflow-scroll pb-10",children:["About me"===e&&(0,i.jsx)(n,{}),"Skills"===e&&(0,i.jsx)(x,{}),"Portfolio"===e&&(0,i.jsx)(j,{})]})]})]})}},6270:(e,t,s)=>{"use strict";s.d(t,{default:()=>c});var i=s(5155),a=s(6766);s(2115);var l=s(4408),r=s(9911),n=s(1013),o=s(2515);let c=()=>(0,i.jsxs)("div",{className:"flex flex-row flex-wrap gap-5 items-center md:flex-col md:w-[280px] md:max-w-[280px] bg-grey-bg px-5 border border-ligthwhite rounded-2xl md:sticky top-[40px] h-fit",children:[(0,i.jsxs)("div",{className:"flex flex-col flex-1 items-center",children:[(0,i.jsx)("div",{className:"relative mt-15 mb-2 bg-ligthgrey-bg flex justify-center items-center w-[150px] h-[150px] rounded-lg ",children:(0,i.jsx)(a.default,{src:"/images/me.jpeg",alt:"cover picture",fill:!0,className:"object-cover rounded-lg"})}),(0,i.jsx)("div",{className:"text-xl md:text-2xl font-bold text-white-text md:mb-2",children:"Nathan Buchin"}),(0,i.jsx)("div",{className:"text-[10px] md:text-xs bg-ligthwhite mt-1 rounded py-[4px] px-[8px] text-white-text",children:"Software Engineer"})]}),(0,i.jsx)("div",{className:"my-10 md:w-full md:h-[1px] rounded bg-ligthwhite"}),(0,i.jsxs)("div",{className:"mt-10 md:mt-0 flex flex-col justity-center flex-1 gap-5",children:[(0,i.jsxs)("div",{className:"flex items-center gap-4",children:[(0,i.jsx)(l.ep0,{className:"text-primary text-xl"}),(0,i.jsxs)("div",{className:"field-wrapper",children:[(0,i.jsx)("div",{className:"uppercase text-xs text-grey-text",children:"email"}),(0,i.jsx)("div",{className:"text-white-text",children:"nath.buchin@gmail.com"})]})]}),(0,i.jsxs)("div",{className:"row flex items-center gap-4",children:[(0,i.jsx)(o.Dum,{className:"text-primary text-xl"}),(0,i.jsxs)("div",{className:"field-wrapper",children:[(0,i.jsx)("div",{className:"uppercase text-xs text-grey-text",children:"phone"}),(0,i.jsx)("div",{className:"text-white-text",children:"+32 493 16 70 77"})]})]}),(0,i.jsxs)("div",{className:"row flex items-center gap-4",children:[(0,i.jsx)(n.o9J,{className:"text-primary text-xl"}),(0,i.jsxs)("div",{className:"field-wrapper",children:[(0,i.jsx)("div",{className:"uppercase text-xs text-grey-text",children:"location"}),(0,i.jsx)("div",{className:"text-white-text",children:"Brussels, Belgium"})]})]}),(0,i.jsxs)("div",{className:"row flex items-center gap-4",children:[(0,i.jsx)(l.Nb0,{className:"text-primary text-xl"}),(0,i.jsxs)("div",{className:"field-wrapper",children:[(0,i.jsx)("div",{className:"uppercase text-xs text-grey-text",children:"birthday"}),(0,i.jsx)("div",{className:"text-white-text",children:"November 16, 1999"})]})]})]}),(0,i.jsxs)("div",{className:"  text-grey-text text-xl my-5 mx-auto py-2 px-5 w-full rounded flex justify-center gap-3",children:[(0,i.jsx)("a",{href:"https://github.com/Nathanb-ecam",children:(0,i.jsx)(r.hL4,{})}),(0,i.jsx)("a",{href:"https://www.linkedin.com/in/nathan-buchin-993295223",children:(0,i.jsx)(r.QEs,{})})]})]})},8295:(e,t,s)=>{Promise.resolve().then(s.bind(s,5212)),Promise.resolve().then(s.bind(s,6270))}},e=>{var t=t=>e(e.s=t);e.O(0,[362,479,512,711,520,751,441,684,358],()=>t(8295)),_N_E=e.O()}]);