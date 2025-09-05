import{j as o}from"./jsx-runtime-D_zvdyIk.js";import{r as n}from"./iframe-DTjfDjp8.js";import{r as _}from"./index-BcN6cv3d.js";import{B as A}from"./index-DgBa7J_E.js";import{I as R}from"./index-FcYoSEB-.js";import"./preload-helper-D9Z9MdNV.js";import"./index-DJfxTKJO.js";/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P=r=>r.replace(/^([A-Z])|[\s-_]+(\w)/g,(t,a,s)=>s?s.toUpperCase():a.toLowerCase()),C=r=>{const t=P(r);return t.charAt(0).toUpperCase()+t.slice(1)},v=(...r)=>r.filter((t,a,s)=>!!t&&t.trim()!==""&&s.indexOf(t)===a).join(" ").trim(),E=r=>{for(const t in r)if(t.startsWith("aria-")||t==="role"||t==="title")return!0};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var L={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=n.forwardRef(({color:r="currentColor",size:t=24,strokeWidth:a=2,absoluteStrokeWidth:s,className:d="",children:l,iconNode:p,...c},u)=>n.createElement("svg",{ref:u,...L,width:t,height:t,stroke:r,strokeWidth:s?Number(a)*24/Number(t):a,className:v("lucide",d),...!l&&!E(c)&&{"aria-hidden":"true"},...c},[...p.map(([h,f])=>n.createElement(h,f)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b=(r,t)=>{const a=n.forwardRef(({className:s,...d},l)=>n.createElement($,{ref:l,iconNode:t,className:v(`lucide-${q(C(r))}`,`lucide-${r}`,s),...d}));return a.displayName=C(r),a};/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],T=b("chevron-down",D);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]],j=b("circle-x",B);/**
 * @license lucide-react v0.542.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I=[["path",{d:"m21 21-4.34-4.34",key:"14j7rj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]],z=b("search",I),N=({options:r,withSearch:t,multiple:a,renderOption:s,withPortal:d})=>{const[l,p]=n.useState(!1),[c,u]=n.useState(""),[h,f]=n.useState([]),[w,k]=n.useState(null),S=r.filter(e=>e.label.toLowerCase().includes(c.toLowerCase())),O=e=>{a?f(i=>i.some(m=>m.id===e.id)?i.filter(m=>m.id!==e.id):[...i,e]):(k(e),p(!1))},x=e=>a?h.some(i=>i.id===e.id):w?.id===e.id,y=o.jsxs("div",{className:"absolute w-full bg-white border mt-1 rounded-sm shadow-md z-[1100]",children:[t&&o.jsxs("div",{className:"border-b p-2 flex items-center",children:[o.jsx(z,{className:"text-gray-400"}),o.jsx(R,{className:"w-full pl-2 outline-none",value:c,onChange:e=>u(e.target.value)}),c&&o.jsx(j,{className:"text-gray-500 cursor-pointer",onClick:()=>u("")})]}),o.jsx("div",{className:"flex flex-col",children:S.map(e=>o.jsx(A,{onClick:()=>O(e),className:x(e)?"bg-gray-200":"",children:s?s(e,x(e)):e.label},e.id))})]});return o.jsxs("div",{className:"relative",children:[o.jsxs("div",{className:"border rounded-sm p-2 flex justify-between items-center cursor-pointer border-gray-400 hover:border-gray-500",onClick:()=>p(e=>!e),children:[o.jsx("div",{className:"flex gap-2",onClick:e=>e.stopPropagation(),children:a?h.map(e=>o.jsxs("div",{className:" bg-gray-100 gap-1 p-2 rounded-4xl flex items-center",children:[e.label,o.jsx(j,{size:18,onClick:()=>{f(i=>i.filter(m=>m.id!==e.id))}})]},e.id)):w?.label}),o.jsx(T,{})]}),l&&(d?_.createPortal(y,document.body):y)]})};N.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{options:{required:!0,tsType:{name:"Array",elements:[{name:"Option"}],raw:"Option[]"},description:""},withSearch:{required:!1,tsType:{name:"boolean"},description:""},multiple:{required:!1,tsType:{name:"boolean"},description:""},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(option: Option, isSelected: boolean) => React.ReactNode",signature:{arguments:[{type:{name:"Option"},name:"option"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactReactNode",raw:"React.ReactNode"}}},description:""},withPortal:{required:!1,tsType:{name:"boolean"},description:""}}};const X={title:"Components/Form",component:N,tags:["autodocs"],argTypes:{multiple:{control:"boolean"},withSearch:{control:"boolean"},withPortal:{control:"boolean"}}},U=[{id:1,label:"Apple",value:"apple"},{id:2,label:"Banana",value:"banana"},{id:3,label:"Orange",value:"orange"},{id:4,label:"Mango",value:"mango"},{id:5,label:"Grapes",value:"grapes"}],g={args:{options:U,multiple:!0,withSearch:!1,withPortal:!0}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    options,
    multiple: true,
    withSearch: false,
    withPortal: true
  }
}`,...g.parameters?.docs?.source}}};const H=["Dropdown"];export{g as Dropdown,H as __namedExportsOrder,X as default};
