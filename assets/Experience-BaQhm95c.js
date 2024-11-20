import{u as n,j as e,C as o}from"./index-CU9JPIX8.js";import{B as m}from"./briefcase-DDVpytsT.js";import{C as c}from"./calendar-qfT8eova.js";const d=[{title:"Customer Service",company:"Pho Nam ATL",period:"June 2023 - Present",type:"Work"},{title:"Summer Camp Counselor",company:"Lake Wenatchee YMCA",period:"June 2024 - August 2024",type:"Work"},{title:"Project Lead & Game Development Programmer",company:"Game Development Projects",period:"June 2022 - Present",type:"Other",description:"Leading game development projects and programming implementation."},{title:"App Development Lead",company:"Mobile Development Projects",period:"June 2023 - Aug 2023",type:"Other",description:"Leading mobile app development and design."}];function h(){const{addProgress:i,progress:t}=n();return e.jsx("section",{className:"py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50",id:"experience",children:e.jsxs("div",{className:"max-w-4xl mx-auto",children:[e.jsxs("div",{className:"flex items-center justify-center gap-4 mb-12",children:[e.jsx(m,{className:"text-blue-400 w-8 h-8"}),e.jsx("h2",{className:"text-4xl font-bold text-center",children:"Quest History"})]}),e.jsx("div",{className:"space-y-8",children:d.map((s,l)=>{var r,a;return e.jsxs("div",{onClick:()=>i({type:"VIEW_EXPERIENCE",id:s.title}),className:`relative bg-gray-800/30 rounded-lg p-8 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer border min-h-[160px] ${(r=t.experiences)!=null&&r.has(s.title)?"border-blue-500":"border-gray-700"}`,children:[!((a=t.experiences)!=null&&a.has(s.title))&&e.jsxs("div",{className:"absolute bottom-3 right-3 bg-blue-500 text-white text-xs px-2 py-1 rounded-full",children:["+",o.EXPERIENCE," XP"]}),e.jsxs("div",{className:"flex justify-between items-start mb-6",children:[e.jsxs("div",{className:"flex-1 mr-8",children:[e.jsx("h3",{className:"text-xl font-semibold text-blue-400 break-normal",children:s.title}),e.jsx("p",{className:"text-gray-400",children:s.company})]}),e.jsxs("div",{className:"flex-shrink-0 flex items-center gap-2 text-gray-400",children:[e.jsx(c,{size:16}),e.jsx("span",{children:s.period})]})]}),s.description&&e.jsx("p",{className:"text-gray-300",children:s.description}),e.jsx("div",{className:"mt-4",children:e.jsx("span",{className:"px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm",children:s.type})})]},l)})})]})})}export{h as default};
