import{d as a,r as d,a as p,b as o,i as r,u as s,o as i}from"./vue.esm-bundler.93e1dd44.js";import{_ as c,H as t}from"./HelloWorld.fbcc7a1f.js";/* empty css               */const m={class:"worlds"},g={class:"world"},u={class:"world"},n=a({__name:"HelloWorlds",props:{msg:null},setup(e){return d(0),(y,v)=>(i(),p("div",m,[o("div",g,[r(s(t),{msg:`${e.msg} message 1`},null,8,["msg"])]),o("div",u,[r(s(t),{msg:`${e.msg} message 2`},null,8,["msg"])])]))}});var l=c(n,[["__scopeId","data-v-74b1a9fe"]]);n.__docgenInfo={exportName:"default",displayName:"HelloWorlds",description:"",tags:{},props:[{name:"msg",required:!0,type:{name:"string"}}]};var H={parameters:{storySource:{source:`import HelloWorlds from './HelloWorlds.vue';\r
\r
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/HelloWorlds',\r
  component: HelloWorlds,\r
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
  argTypes: {\r
    msg: 'Inner:',\r
  },\r
};\r
\r
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args\r
const Template = (args) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { HelloWorlds },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    return { args };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: '<HelloWorlds v-bind="args" />',\r
});\r
\r
export const Default = Template.bind({});\r
// More on args: https://storybook.js.org/docs/vue/writing-stories/args\r
Default.args = {\r
  msg: 'Wrapping',\r
};\r
\r
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:23},startBody:{col:17,line:14},endBody:{col:2,line:23}}}}},title:"Example/HelloWorlds",component:l,argTypes:{msg:"Inner:"}};const _=e=>({components:{HelloWorlds:l},setup(){return{args:e}},template:'<HelloWorlds v-bind="args" />'}),f=_.bind({});f.args={msg:"Wrapping"};const x=["Default"];export{f as Default,x as __namedExportsOrder,H as default};
//# sourceMappingURL=HelloWorlds.stories.1d0826c5.js.map
