import{H as e}from"./HelloWorld.fbcc7a1f.js";import"./vue.esm-bundler.93e1dd44.js";var a={parameters:{storySource:{source:`import HelloWorld from './HelloWorld.vue';\r
\r
// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export\r
export default {\r
  title: 'Example/HelloWorld',\r
  component: HelloWorld,\r
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes\r
  argTypes: {\r
    msg: 'Basic message!',\r
  },\r
};\r
\r
// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args\r
const Template = (args) => ({\r
  // Components used in your story \`template\` are defined in the \`components\` object\r
  components: { HelloWorld },\r
  // The story's \`args\` need to be mapped into the template through the \`setup()\` method\r
  setup() {\r
    return { args };\r
  },\r
  // And then the \`args\` are bound to your component with \`v-bind="args"\`\r
  template: '<HelloWorld v-bind="args" />',\r
});\r
\r
export const Default = Template.bind({});\r
// More on args: https://storybook.js.org/docs/vue/writing-stories/args\r
Default.args = {\r
  msg: 'Default message!',\r
};\r
\r
export const Other = Template.bind({});\r
Other.args = {\r
  ...Default.args,\r
  msg: 'Other message?',\r
};\r
`,locationsMap:{default:{startLoc:{col:17,line:14},endLoc:{col:2,line:23},startBody:{col:17,line:14},endBody:{col:2,line:23}},other:{startLoc:{col:17,line:14},endLoc:{col:2,line:23},startBody:{col:17,line:14},endBody:{col:2,line:23}}}}},title:"Example/HelloWorld",component:e,argTypes:{msg:"Basic message!"}};const r=t=>({components:{HelloWorld:e},setup(){return{args:t}},template:'<HelloWorld v-bind="args" />'}),o=r.bind({});o.args={msg:"Default message!"};const n=r.bind({});n.args={...o.args,msg:"Other message?"};const d=["Default","Other"];export{o as Default,n as Other,d as __namedExportsOrder,a as default};
//# sourceMappingURL=HelloWorld.stories.1715d97d.js.map
