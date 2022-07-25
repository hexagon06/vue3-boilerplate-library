// This is the root file from where the package will be generated.
export { default as HelloWorld } from './components/HelloWorld.vue';
export { default as HelloWorld2 } from './components/HelloWorld2.vue';
// import static stylesheets so that rollup will inlcude this in the package
// note that scss variables need to be imported using the vite.config.ts
import './styles/shared.css';
