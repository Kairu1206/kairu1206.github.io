import{u as c,j as s,e as n,C as o}from"./index-CU9JPIX8.js";import{G as x}from"./graduation-cap-YGisc_sw.js";import{C as d}from"./calendar-qfT8eova.js";function g(){const{addProgress:i,progress:a}=c();return s.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50",id:"education",children:s.jsxs("div",{className:"max-w-4xl mx-auto",children:[s.jsxs("div",{className:"flex items-center justify-center gap-4 mb-12",children:[s.jsx(x,{className:"text-green-400 w-8 h-8"}),s.jsx("h2",{className:"text-4xl font-bold text-center",children:"Education Quest"})]}),s.jsx("div",{className:"space-y-8",children:n.map((e,l)=>{var t,r;return s.jsxs("div",{onClick:()=>i({type:"VIEW_EDUCATION",id:e.school}),className:`relative bg-gray-800/30 rounded-lg p-8 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer border ${(t=a.education)!=null&&t.has(e.school)?"border-green-500":"border-gray-700"}`,children:[!((r=a.education)!=null&&r.has(e.school))&&s.jsxs("div",{className:"absolute top-2 right-2 bg-blue-500 text-white text-xs px-2 py-1 rounded-full",children:["+",o.EDUCATION," XP"]}),s.jsxs("div",{className:"flex justify-between items-start mb-4",children:[s.jsxs("div",{className:"flex-1",children:[s.jsx("h3",{className:"text-xl font-semibold text-green-400",children:e.school}),s.jsx("p",{className:"text-gray-300",children:e.degree}),e.gpa&&s.jsxs("p",{className:"text-gray-400 mt-2",children:["GPA: ",e.gpa]})]}),s.jsxs("div",{className:"flex items-center gap-2 text-gray-400",children:[s.jsx(d,{size:16}),s.jsx("span",{children:e.period})]})]}),e.description&&s.jsx("p",{className:"text-gray-300 mt-4",children:e.description})]},l)})})]})})}export{g as default};
