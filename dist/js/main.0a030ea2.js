(()=>{"use strict";var o={n:e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return o.d(r,{a:r}),r},d:(e,r)=>{for(var t in r)o.o(r,t)&&!o.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},o:(o,e)=>Object.prototype.hasOwnProperty.call(o,e)};const e=jQuery;var r=o.n(e);const t=_;var a=o.n(t);r()((function(){console.log(123)})),r().ajax({url:"http://127.0.0.1:3000/api/abc"}),r().ajax({url:"http://127.0.0.1:3000/api1/abc1"}),console.log(a()),console.log(1),console.log("process.env.NODE_ENV:","production")})();