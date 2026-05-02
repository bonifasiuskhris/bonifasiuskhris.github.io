import"../chunks/DsnmJJEf.js";import{i as Qe}from"../chunks/C5CKA0lx.js";import{k as Te,p as Xe,o as Ze,aG as et,aH as tt,aI as at,h as ot,aE as re,a as b,b as nt,f as k,t as w,s as V,m as G,i as e,aC as it,ab as s,$ as rt,c as n,r as o,d as i,j as _,e as Me}from"../chunks/DorO-AfT.js";import{i as j,s as st,a as lt}from"../chunks/D2t5Mpjk.js";import{e as se,i as le}from"../chunks/YIF20Z2I.js";import{h as ct}from"../chunks/BdpKg4bX.js";import{s as H}from"../chunks/IcmVBQ66.js";import{a as dt,s as t,t as ut}from"../chunks/DQlgQG5M.js";import{p as pt,b as vt}from"../chunks/D8OtpdMg.js";function ht(y,C,a,K){var q=y.__style;if(Te||q!==C){var r=dt(C);(!Te||r!==y.getAttribute("style"))&&(r==null?y.removeAttribute("style"):y.style.cssText=r),y.__style=C}return K}function mt(y){return function(...C){var a=C[0];return a.preventDefault(),y?.apply(this,C)}}function gt({params:y}){const a={"building-scalable-web-applications":{title:"Building Scalable Web Applications with Modern JavaScript",slug:"building-scalable-web-applications",excerpt:"Explore best practices and architectural patterns for creating maintainable and scalable web applications using modern JavaScript frameworks and tools.",content:`
# Building Scalable Web Applications with Modern JavaScript

In today's fast-paced digital landscape, building scalable web applications is more crucial than ever. As applications grow in complexity and user base, developers need to adopt architectural patterns and best practices that ensure maintainability and performance.

## Understanding Scalability

Scalability isn't just about handling more users; it's about building systems that can grow and adapt without becoming unmaintainable. This involves both technical scalability (performance, architecture) and team scalability (code organization, documentation).

### Key Principles

**1. Modular Architecture**
Breaking your application into smaller, reusable components is fundamental. This approach allows teams to work independently on different parts of the application while maintaining overall coherence.

**2. State Management**
Proper state management becomes critical as applications grow. Whether you're using Redux, MobX, or Context API, having a clear strategy for managing application state prevents bugs and improves performance.

**3. Code Splitting and Lazy Loading**
Modern bundlers like Webpack and Vite support code splitting out of the box. By splitting your code into smaller chunks and loading them on demand, you can significantly improve initial load times.

## Modern JavaScript Patterns

### Async/Await and Promise Handling

\`\`\`javascript
// Better error handling with async/await
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`/api/users/\${userId}\`);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
    throw error;
  }
}
\`\`\`

### Functional Programming Concepts

Functional programming concepts like immutability, pure functions, and higher-order functions can make your code more predictable and easier to test.

## Performance Optimization

### Virtual DOM and Reconciliation

Understanding how your framework handles DOM updates is crucial for performance. React's reconciliation algorithm, for example, can be optimized with proper key usage and shouldComponentUpdate logic.

### Memory Management

JavaScript's garbage collection is automatic, but memory leaks can still occur. Be mindful of:
- Event listeners that aren't properly removed
- Closures that retain unnecessary references
- Global variables that accumulate data

## Best Practices for Team Collaboration

### Code Consistency

Establish coding standards and use tools like ESLint and Prettier to enforce them. Consistent code is easier to read, review, and maintain.

### Documentation

Good documentation is essential for scalable projects. This includes:
- API documentation
- Component documentation
- Architecture decision records (ADRs)
- Setup and deployment guides

### Testing Strategy

A comprehensive testing strategy should include:
- Unit tests for individual functions and components
- Integration tests for API endpoints and user flows
- End-to-end tests for critical user journeys

## Conclusion

Building scalable web applications requires careful planning, consistent implementation, and continuous optimization. By following these principles and staying updated with modern JavaScript practices, you can create applications that grow smoothly with your user base and development team.

Remember that scalability is not a one-time achievement but an ongoing process of refinement and improvement.
			`,date:"2024-01-15",readTime:"8 min read",category:"Development",tags:["JavaScript","Architecture","Best Practices","Scalability"],author:"Bonifasius Khrisna Wicaksono",featured:!0,popular:!0,wordCount:1200,toc:[{id:"understanding-scalability",title:"Understanding Scalability",level:2},{id:"key-principles",title:"Key Principles",level:2},{id:"modern-javascript-patterns",title:"Modern JavaScript Patterns",level:2},{id:"performance-optimization",title:"Performance Optimization",level:2},{id:"best-practices-team-collaboration",title:"Best Practices for Team Collaboration",level:2},{id:"conclusion",title:"Conclusion",level:2}]},"frontend-development-trends-2024":{title:"The Future of Frontend Development: Trends to Watch in 2024",slug:"frontend-development-trends-2024",excerpt:"Discover the latest trends shaping frontend development, from AI-powered tools to advanced CSS techniques and emerging frameworks.",content:`
# The Future of Frontend Development: Trends to Watch in 2024

As we move through 2024, the frontend development landscape continues to evolve at a rapid pace. New tools, frameworks, and approaches are emerging that promise to reshape how we build web applications.

## AI-Powered Development Tools

Artificial Intelligence is no longer just a buzzword in web development. Tools like GitHub Copilot, ChatGPT, and specialized AI coding assistants are becoming integral parts of the development workflow.

### Impact on Development
- **Code Generation**: AI can generate boilerplate code, reducing repetitive tasks
- **Bug Detection**: Advanced pattern recognition helps identify potential issues
- **Documentation**: Automated documentation generation from code

## Advanced CSS Techniques

CSS continues to evolve with powerful new features:

### Container Queries
Container queries allow components to respond to their container's size rather than the viewport, enabling truly modular design systems.

### CSS Cascade Layers
Better control over the cascade with explicit layer ordering, making CSS architecture more maintainable.

### Color Functions
New color spaces and functions provide more vibrant and accessible color options.

## The Rise of Edge Computing

Frontend developers are increasingly leveraging edge computing for:
- **Faster Load Times**: Content delivered from locations closer to users
- **Better Performance**: Reduced latency for dynamic content
- **Improved SEO**: Better Core Web Vitals scores

## Conclusion

Staying current with these trends is essential for frontend developers who want to build modern, efficient, and user-friendly applications. The key is to evaluate each trend critically and adopt those that truly improve your development process and user experience.
			`,date:"2024-01-10",readTime:"6 min read",category:"Frontend",tags:["Frontend","Trends","2024","Web Development"],author:"Bonifasius Khrisna Wicaksono",featured:!0,popular:!1,wordCount:800,toc:[{id:"ai-powered-development-tools",title:"AI-Powered Development Tools",level:2},{id:"advanced-css-techniques",title:"Advanced CSS Techniques",level:2},{id:"rise-edge-computing",title:"The Rise of Edge Computing",level:2},{id:"conclusion",title:"Conclusion",level:2}]},"mastering-react-hooks":{title:"Mastering React Hooks: A Comprehensive Guide",slug:"mastering-react-hooks",excerpt:"Deep dive into React Hooks with practical examples and best practices for state management, side effects, and custom hooks.",content:`
# Mastering React Hooks: A Comprehensive Guide

React Hooks have revolutionized how we write React components, making functional components more powerful and easier to test. This guide will take you through everything you need to know about React Hooks.

## Understanding the Basics

React Hooks allow you to use state and other React features in functional components. They were introduced in React 16.8 and have since become the standard way to write React components.

### useState Hook

The \`useState\` hook is the most basic hook that allows you to add state to functional components.

\`\`\`javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

### useEffect Hook

The \`useEffect\` hook lets you perform side effects in functional components. It serves the same purpose as \`componentDidMount\`, \`componentDidUpdate\`, and \`componentWillUnmount\` combined.

\`\`\`javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = \`You clicked \${count} times\`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
\`\`\`

## Advanced Hook Patterns

### Custom Hooks

Custom hooks are JavaScript functions whose names start with "use" and that may call other hooks. They allow you to extract component logic into reusable functions.

\`\`\`javascript
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
}
\`\`\`

### Rules of Hooks

React has two main rules for hooks:

1. **Only call hooks at the top level**: Don't call hooks inside loops, conditions, or nested functions
2. **Only call hooks from React functions**: Call them from React functional components or custom hooks

## Performance Optimization with Hooks

### useMemo Hook

Use useMemo to memoize expensive calculations:

\`\`\`javascript
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);
\`\`\`

### useCallback Hook

Use useCallback to memoize functions:

\`\`\`javascript
const handleClick = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Best Practices Summary

1. **Start with functional components** and use hooks for state and side effects
2. **Keep hooks simple** - one hook per concern
3. **Use the dependency array correctly** - include all values used in the effect
4. **Extract custom hooks** when you have reusable logic
5. **Test your hooks** thoroughly, especially custom ones
6. **Use ESLint plugin** for React hooks to catch common mistakes

## Conclusion

React Hooks have fundamentally changed how we build React applications. They provide a more direct API to the React concepts you already know: props, state, context, refs, and lifecycle. By following the patterns and best practices outlined in this guide, you'll be able to write more readable, maintainable, and testable React components.

Remember that mastering hooks takes practice. Start with the basic hooks (useState, useEffect) and gradually incorporate more advanced patterns as you become comfortable with the fundamentals.
			`,date:"2024-01-05",readTime:"12 min read",category:"React",tags:["React","JavaScript","Frontend","Hooks"],author:"Bonifasius Khrisna Wicaksono",featured:!1,popular:!0,wordCount:1500,toc:[{id:"understanding-basics",title:"Understanding the Basics",level:2},{id:"advanced-hook-patterns",title:"Advanced Hook Patterns",level:2},{id:"performance-optimization",title:"Performance Optimization with Hooks",level:2},{id:"best-practices",title:"Best Practices Summary",level:2},{id:"conclusion",title:"Conclusion",level:2}]}}[y.slug];return a?{post:a}:{status:404,error:new Error("Blog post not found")}}const Dt=Object.freeze(Object.defineProperty({__proto__:null,load:gt},Symbol.toStringTag,{value:"Module"}));var ft=k('<meta name="description"/>'),bt=k("<span> </span>"),xt=k('<a target="_blank" rel="noopener noreferrer" title="Share on Twitter" aria-label="Share on Twitter"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg></a> <a target="_blank" rel="noopener noreferrer" title="Share on LinkedIn" aria-label="Share on LinkedIn"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a>',1),wt=k("<a> </a>"),kt=k('<section style="animation-delay: 0.1s"><h3>Table of Contents</h3> <nav class="space-y-2"></nav></section>'),yt=k('<a><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> <div class="flex-1 min-w-0"><div>Previous Article</div> <div></div></div></a>'),_t=k('<a><div class="flex-1 min-w-0 md:text-right"><div>Next Article</div> <div></div></div> <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a>'),Ct=k('<section style="animation-delay: 0.3s"><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><!> <!></div></section>'),$t=k('<a><div class="flex items-center justify-between mb-2"><span> </span> <span> </span></div> <h4> </h4> <p> </p></a>'),St=k('<section style="animation-delay: 0.4s"><h3>Related Articles</h3> <div class="grid grid-cols-1 md:grid-cols-3 gap-4"></div></section>'),Bt=k(`<div class="fixed top-0 left-0 right-0 h-1 bg-slate-200 dark:bg-slate-700 z-50"><div class="h-full bg-blue-600 transition-all duration-300"></div></div> <section><div class="mb-8"><div><a href="/blog">Blog</a> <svg class="w-4 h-4 mx-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg> <span class="truncate"> </span></div> <h1> </h1> <div class="flex flex-wrap items-center gap-4 mb-6"><div class="flex items-center"><div class="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold mr-3">BK</div> <div><div> </div> <div> </div></div></div> <span> </span></div> <div class="flex flex-wrap gap-2 mb-6"></div> <div class="flex items-center gap-4"><span>Share:</span> <button title="Copy link" aria-label="Copy link to clipboard"><svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg></button> <!></div></div></section> <!> <article style="animation-delay: 0.2s"><div><!></div></article> <!> <!> <section style="animation-delay: 0.5s"><h3>Comments</h3> <div class="text-center py-8"><div class="mb-4"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg></div> <h4>Comments are coming soon!</h4> <p>I'm working on implementing a comment system. In the meantime, feel free to reach out on social media or via email with your thoughts!</p> <div class="flex justify-center gap-4"><a href="https://twitter.com/bonifasiuskhris" target="_blank" rel="noopener noreferrer" class="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path></svg> Twitter</a> <a href="mailto:bonifasiuskhris@gmail.com"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg> Email</a></div></div></section> <section style="animation-delay: 0.6s"><div class="flex flex-col sm:flex-row justify-between items-center gap-4"><a href="/blog"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to Blog</a> <div class="flex gap-2"><a href="/" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Home</a> <a href="/portfolio">Portfolio <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg></a></div></div></section>`,1),Pt=k(`<section><div class="mb-8"><svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg> <h1>Article Not Found</h1> <p>The blog post you're looking for doesn't exist or has been moved.</p> <div class="flex flex-col sm:flex-row gap-4 justify-center"><a href="/blog" class="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg> Back to Blog</a> <a href="/"><svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg> Home</a></div></div></section>`);function Ut(y,C){Xe(C,!1);const a=()=>lt(ut,"$theme",K),[K,q]=st(),r=G();let ce=pt(C,"data",8),$=G(!1),de=G(0),N=G();Ze(()=>{V($,!0);const m=()=>{if(typeof window<"u"&&e(N)){const f=window.pageYOffset||document.documentElement.scrollTop,T=document.documentElement.scrollHeight-window.innerHeight,E=Math.min(f/T*100,100);V(de,E)}};return window.addEventListener("scroll",m),()=>window.removeEventListener("scroll",m)});function ze(m){return m?new Date(m).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}):""}et(()=>it(ce()),()=>{V(r,ce().post)}),tt(),Qe();var ue=at();ot(m=>{var f=ft();w(()=>{rt.title=`${e(r),s(()=>e(r)?.title||"Blog Post")??""} - Bonifasius Khrisna Wicaksono`,H(f,"content",(e(r),s(()=>e(r)?.excerpt||"Technical blog post")))}),b(m,f)});var Re=re(ue);{var Ae=m=>{var f=Bt(),T=re(f),E=n(T);o(T);var z=i(T,2);let I;var D=n(z),R=n(D),W=n(R),L=i(W,4),He=n(L,!0);o(L),o(R);var F=i(R,2),Ee=n(F,!0);o(F);var Y=i(F,2),Q=n(Y),pe=i(n(Q),2),O=n(pe),Ie=n(O,!0);o(O);var X=i(O,2),De=n(X);o(X),o(pe),o(Q);var Z=i(Q,2),Ue=n(Z,!0);o(Z),o(Y);var ee=i(Y,2);se(ee,5,()=>(e(r),s(()=>e(r).tags)),le,(l,c)=>{var d=bt(),p=n(d,!0);o(d),w(()=>{t(d,1,`px-3 py-1 text-sm font-medium rounded ${a()==="light"?"bg-blue-100 text-blue-800":"bg-blue-900 text-blue-200"}`),_(p,e(c))}),b(l,d)}),o(ee);var ve=i(ee,2),he=n(ve),te=i(he,2),We=i(te,2);{var Le=l=>{var c=xt(),d=re(c),p=i(d,2);H(p,"href",`https://www.linkedin.com/sharing/share-offsite/?url=${s(()=>encodeURIComponent(window.location.href))??""}`),w(x=>{H(d,"href",`https://twitter.com/intent/tweet?text=${x??""}&url=${s(()=>encodeURIComponent(window.location.href))??""}`),t(d,1,`p-2 rounded-lg ${a()==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-700":"bg-slate-700 hover:bg-slate-600 text-slate-300"} transition-colors duration-200`),t(p,1,`p-2 rounded-lg ${a()==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-700":"bg-slate-700 hover:bg-slate-600 text-slate-300"} transition-colors duration-200`)},[()=>(e(r),s(()=>encodeURIComponent(e(r).title)))]),b(l,c)};j(We,l=>{typeof window<"u"&&l(Le)})}o(ve),o(D),o(z);var me=i(z,2);{var Fe=l=>{var c=kt();let d;var p=n(c),x=i(p,2);se(x,5,()=>(e(r),s(()=>e(r).toc)),le,(S,v)=>{var g=wt(),h=n(g,!0);o(g),w(()=>{H(g,"href",`#${e(v),s(()=>e(v).id)??""}`),t(g,1,`block text-sm hover:text-blue-600 ${a()==="light"?"text-slate-600 hover:text-blue-600":"text-slate-400 hover:text-blue-400"} transition-colors duration-200 ${e(v),s(()=>e(v).level===3?"ml-4":"")??""}`),_(h,(e(v),s(()=>e(v).title)))}),Me("click",g,mt(u=>{document.getElementById(e(v).id)?.scrollIntoView({behavior:"smooth"})})),b(S,g)}),o(x),o(c),w(S=>{d=t(c,1,"section-card animate-fade-in svelte-1teoznn",null,d,S),t(p,1,`text-lg font-semibold mb-4 ${a()==="light"?"text-slate-900":"text-white"}`)},[()=>({"animate-slide-up":e($)})]),b(l,c)};j(me,l=>{e(r),s(()=>e(r).toc&&e(r).toc.length>0)&&l(Fe)})}var U=i(me,2);let ge;var ae=n(U),Oe=n(ae);ct(Oe,()=>(e(r),s(()=>e(r).content.split(`
`).map(l=>l.replace(/^### (.*$)/gm,`<h3 id="$1.toLowerCase().replace(/\\s+/g, '-')">$1</h3>`).replace(/^## (.*$)/gm,`<h2 id="$1.toLowerCase().replace(/\\s+/g, '-')">$1</h2>`).replace(/^# (.*$)/gm,`<h1 id="$1.toLowerCase().replace(/\\s+/g, '-')">$1</h1>`).replace(/\*\*(.*?)\*\*/g,"<strong>$1</strong>").replace(/\*(.*?)\*/g,"<em>$1</em>").replace(/\`([^`]+)\`/g,"<code>$1</code>").replace(/```([\s\S]*?)```/g,"<pre><code>$1</code></pre>").replace(/^- (.*$)/gm,"<li>$1</li>").replace(/^\d+\. (.*$)/gm,"<li>$1</li>")).join(`
`)))),o(ae),o(U),vt(U,l=>V(N,l),()=>e(N));var fe=i(U,2);{var Je=l=>{var c=Ct();let d;var p=n(c),x=n(p);{var S=h=>{var u=yt();H(u,"href",`/blog/${s(()=>previousPost.slug)??""}`);var M=n(u),B=i(M,2),A=n(B),P=i(A,2);P.textContent=s(()=>previousPost.title),o(B),o(u),w(()=>{t(u,1,`flex items-center p-4 rounded-lg border ${a()==="light"?"border-slate-200 bg-white hover:bg-slate-50":"border-slate-700 bg-slate-800 hover:bg-slate-700"} transition-colors duration-200`),t(M,0,`w-5 h-5 mr-3 ${a()==="light"?"text-slate-400":"text-slate-500"}`),t(A,1,`text-xs font-medium ${a()==="light"?"text-slate-500":"text-slate-400"} mb-1`),t(P,1,`text-sm font-medium truncate ${a()==="light"?"text-slate-900":"text-white"}`)}),b(h,u)};j(x,h=>{previousPost&&h(S)})}var v=i(x,2);{var g=h=>{var u=_t();H(u,"href",`/blog/${s(()=>nextPost.slug)??""}`);var M=n(u),B=n(M),A=i(B,2);A.textContent=s(()=>nextPost.title),o(M);var P=i(M,2);o(u),w(()=>{t(u,1,`flex items-center p-4 rounded-lg border ${a()==="light"?"border-slate-200 bg-white hover:bg-slate-50":"border-slate-700 bg-slate-800 hover:bg-slate-700"} transition-colors duration-200 md:justify-end`),t(B,1,`text-xs font-medium ${a()==="light"?"text-slate-500":"text-slate-400"} mb-1`),t(A,1,`text-sm font-medium truncate ${a()==="light"?"text-slate-900":"text-white"}`),t(P,0,`w-5 h-5 ml-3 ${a()==="light"?"text-slate-400":"text-slate-500"}`)}),b(h,u)};j(v,h=>{nextPost&&h(g)})}o(p),o(c),w(h=>d=t(c,1,"section-card animate-fade-in svelte-1teoznn",null,d,h),[()=>({"animate-slide-up":e($)})]),b(l,c)};j(fe,l=>{(previousPost||nextPost)&&l(Je)})}var be=i(fe,2);{var Ve=l=>{var c=St();let d;var p=n(c),x=i(p,2);se(x,4,()=>relatedPosts,le,(S,v)=>{var g=$t(),h=n(g),u=n(h),M=n(u,!0);o(u);var B=i(u,2),A=n(B,!0);o(B),o(h);var P=i(h,2),Ne=n(P,!0);o(P);var ie=i(P,2),Ye=n(ie,!0);o(ie),o(g),w(()=>{H(g,"href",`/blog/${s(()=>v.slug)??""}`),t(g,1,`group p-4 rounded-lg border ${a()==="light"?"border-slate-200 bg-white hover:bg-slate-50":"border-slate-700 bg-slate-800 hover:bg-slate-700"} transition-colors duration-200`),t(u,1,`text-xs font-medium ${a()==="light"?"text-slate-500":"text-slate-400"}`),_(M,s(()=>v.category)),t(B,1,`text-xs ${a()==="light"?"text-slate-400":"text-slate-500"}`),_(A,s(()=>v.readTime)),t(P,1,`font-medium mb-2 group-hover:text-blue-600 ${a()==="light"?"text-slate-900":"text-white"} transition-colors duration-200`),_(Ne,s(()=>v.title)),t(ie,1,`text-sm ${a()==="light"?"text-slate-600":"text-slate-400"} line-clamp-2`),_(Ye,s(()=>v.excerpt))}),b(S,g)}),o(x),o(c),w(S=>{d=t(c,1,"section-card animate-fade-in svelte-1teoznn",null,d,S),t(p,1,`text-xl font-bold mb-6 ${a()==="light"?"text-slate-900":"text-white"}`)},[()=>({"animate-slide-up":e($)})]),b(l,c)};j(be,l=>{s(()=>relatedPosts.length>0)&&l(Ve)})}var J=i(be,2);let xe;var we=n(J),ke=i(we,2),oe=n(ke),Ge=n(oe);o(oe);var ye=i(oe,2),_e=i(ye,2),Ce=i(_e,2),Ke=i(n(Ce),2);o(Ce),o(ke),o(J);var ne=i(J,2);let $e;var Se=n(ne),Be=n(Se),Pe=i(Be,2),qe=i(n(Pe),2);o(Pe),o(Se),o(ne),w((l,c,d,p,x)=>{ht(E,`width: ${e(de)??""}%`),I=t(z,1,"section-card animate-fade-in svelte-1teoznn",null,I,l),t(R,1,`flex items-center text-sm mb-6 ${a()==="light"?"text-slate-600":"text-slate-400"}`),t(W,1,`hover:text-blue-600 ${a()==="dark"?"hover:text-blue-400":""} transition-colors duration-200`),_(He,(e(r),s(()=>e(r).title))),t(F,1,`text-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${a()==="light"?"text-slate-900":"text-white"}`),_(Ee,(e(r),s(()=>e(r).title))),t(O,1,`font-medium ${a()==="light"?"text-slate-900":"text-white"}`),_(Ie,(e(r),s(()=>e(r).author))),t(X,1,`text-sm ${a()==="light"?"text-slate-600":"text-slate-400"}`),_(De,`${c??""} • ${e(r),s(()=>e(r).readTime)??""}`),t(Z,1,`px-3 py-1 text-sm font-semibold rounded-full ${a()==="light"?"bg-green-100 text-green-800":"bg-green-900 text-green-200"}`),_(Ue,(e(r),s(()=>e(r).category))),t(he,1,`text-sm font-medium ${a()==="light"?"text-slate-600":"text-slate-400"}`),t(te,1,`p-2 rounded-lg ${a()==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-700":"bg-slate-700 hover:bg-slate-600 text-slate-300"} transition-colors duration-200`),ge=t(U,1,"section-card animate-fade-in svelte-1teoznn",null,ge,d),t(ae,1,`prose prose-lg max-w-none ${a()==="light"?"prose-slate":"prose-invert prose-slate"}`),xe=t(J,1,"section-card animate-fade-in svelte-1teoznn",null,xe,p),t(we,1,`text-xl font-bold mb-6 ${a()==="light"?"text-slate-900":"text-white"}`),t(Ge,0,`w-12 h-12 mx-auto ${a()==="light"?"text-slate-400":"text-slate-600"}`),t(ye,1,`text-lg font-medium mb-2 ${a()==="light"?"text-slate-900":"text-white"}`),t(_e,1,`${a()==="light"?"text-slate-600":"text-slate-400"} mb-4`),t(Ke,1,`inline-flex items-center px-4 py-2 ${a()==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-700":"bg-slate-700 hover:bg-slate-600 text-slate-300"} rounded-lg transition-colors duration-200`),$e=t(ne,1,"section-card animate-fade-in svelte-1teoznn",null,$e,x),t(Be,1,`inline-flex items-center px-4 py-2 ${a()==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-700":"bg-slate-700 hover:bg-slate-600 text-slate-300"} rounded-lg transition-colors duration-200`),t(qe,1,`inline-flex items-center px-4 py-2 ${a()==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-700":"bg-slate-700 hover:bg-slate-600 text-slate-300"} rounded-lg transition-colors duration-200`)},[()=>({"animate-slide-up":e($)}),()=>(e(r),s(()=>ze(e(r).date))),()=>({"animate-slide-up":e($)}),()=>({"animate-slide-up":e($)}),()=>({"animate-slide-up":e($)})]),Me("click",te,()=>{typeof window<"u"&&navigator.clipboard.writeText(window.location.href)}),b(m,f)},je=m=>{var f=Pt();let T;var E=n(f),z=n(E),I=i(z,2),D=i(I,2),R=i(D,2),W=i(n(R),2);o(R),o(E),o(f),w(L=>{T=t(f,1,"section-card text-center animate-fade-in svelte-1teoznn",null,T,L),t(z,0,`w-24 h-24 mx-auto ${a()==="light"?"text-slate-400":"text-slate-600"} mb-4`),t(I,1,`text-2xl md:text-3xl font-bold ${a()==="light"?"text-slate-900":"text-white"} mb-4`),t(D,1,`${a()==="light"?"text-slate-600":"text-slate-400"} mb-8`),t(W,1,`inline-flex items-center px-4 py-2 ${a()==="light"?"bg-slate-100 hover:bg-slate-200 text-slate-700":"bg-slate-700 hover:bg-slate-600 text-slate-300"} rounded-lg transition-colors duration-200`)},[()=>({"animate-slide-up":e($)})]),b(m,f)};j(Re,m=>{e(r)?m(Ae):m(je,!1)})}b(y,ue),nt(),q()}export{Ut as component,Dt as universal};
