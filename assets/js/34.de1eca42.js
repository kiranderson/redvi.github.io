(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{13:function(t,e,r){"use strict";const n=(t,e,...r)=>{const n=e[0]+r.map((t,r)=>escapeRegExp(t)+e[r+1]).join("");return RegExp(n,t)},s=(new Proxy(n.bind(void 0,""),{get:(t,e)=>n.bind(void 0,e)}),{methods:{sortByTime:t=>t.sort((t,e)=>e.frontmatter.date.localeCompare(t.frontmatter.date))},computed:{list(){const{$lang:t,postType:e}=this,r=`^(/${"ru"===t?"":`${t}/`}${e}/).+`;return this.sortByTime(this.$site.pages.filter(t=>t.path.match(r)))},tags(){const t=this.list,e=[];let r;return t.forEach(t=>{e.push(...t.frontmatter.tags),r=Array.from(new Set(e))}),r}},filters:{lower:function(t){return t?(t=t.toString()).toLowerCase():""},capitalize:function(t){return t?(t=t.toString()).charAt(0).toUpperCase()+t.slice(1):""}}});e.a=s},179:function(t,e,r){"use strict";r.r(e);var n={name:"simple-archive",mixins:[r(13).a],props:{postType:{type:String,default:"posts"}},filters:{upper:t=>t?(t=t.toString()).toUpperCase():""}},s=r(3),i=Object(s.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.tags.length?r("div",t._l(t.tags,function(e,n){return r("section",{key:n},[r("h2",{attrs:{id:""+e}},[t._v(t._s(t._f("upper")(e)))]),t._v(" "),t.list.length?r("ul",t._l(t.list,function(n,s){return r("li",{key:s},[n.frontmatter.tags.includes(e)?r("div",[r("router-link",{attrs:{to:n.path}},[t._v(t._s(n.frontmatter.h1||n.title))])],1):t._e()])}),0):t._e()])}),0):t._e()},[],!1,null,null,null);e.default=i.exports}}]);