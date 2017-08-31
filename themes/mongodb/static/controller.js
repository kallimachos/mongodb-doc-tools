!function(){"use strict";function t(t){return!t.siblings("ul:not(.simple)").length}function e(t){var e=window.docsExcludedNav;if(!e||!e.length)return!1;for(var n=0;n<e.length;n+=1)if(-1!==t[0].href.indexOf(e[n]))return!0;return!1}function n(t,e){var n=new XMLHttpRequest;n.onload=function(){n.status>=200&&n.status<400?(e.success(n.responseText,n.responseURL),e.complete()):(e.error(),e.complete())},n.onerror=function(){e.error(),e.complete()},n.open("GET",t,!0);try{n.send()}catch(t){e.error(),e.complete()}}function o(){}function a(t){for(var e,n,o=arguments,a=1,r=arguments.length;a<r;a++){n=o[a];for(e in n)t[e]=n[e]}return t}function r(t,e){e.appendChild(t)}function i(t,e,n){e.insertBefore(t,n)}function s(t){t.parentNode.removeChild(t)}function u(t,e){for(;t.nextSibling&&t.nextSibling!==e;)t.parentNode.removeChild(t.nextSibling)}function c(t,e,n){for(var o=n;o<t.length;o+=1)t[o]&&t[o].destroy(e)}function l(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function f(){return document.createComment("")}function h(t,e,n){t.addEventListener(e,n,!1)}function p(t,e,n){t.removeEventListener(e,n,!1)}function m(t,e,n){t.setAttribute(e,n)}function g(t,e){return t!==e||t&&"object"==typeof t||"function"==typeof t}function v(t,e,n,o){for(var a in e)if(a in n){var r=n[a],i=o[a];if(g(r,i)){var s=e[a];if(!s)continue;for(var u=0;u<s.length;u+=1){var c=s[u];c.__calling||(c.__calling=!0,c.call(t,r,i),c.__calling=!1)}}}}function y(t){for(;t&&t.length;)t.pop()()}function _(t,e,n,o){(o||"answer"in e&&g(t.answer,n.answer))&&(t.upvoteSelected=e.upvoteSelected=J.computed.upvoteSelected(t.answer),t.downvoteSelected=e.downvoteSelected=J.computed.downvoteSelected(t.answer))}function b(t,e){function n(t){e.change(!0)}function o(t){e.change(!1)}var a,c,f,m,g,v,y,_,b,w,C;return{create:function(){a=l("div"),f=l("noscript"),m=l("noscript"),g=d("\n"),v=l("div"),y=l("span"),b=d("\n    "),w=l("span"),this.hydrate()},hydrate:function(e){y.className=_="switch fa fa-thumbs-up good "+t.upvoteSelected,h(y,"click",n),w.className=C="switch fa fa-thumbs-down bad "+t.downvoteSelected,h(w,"click",o)},mount:function(e,n){i(a,e,n),r(f,a),r(m,a),f.insertAdjacentHTML("afterend",c=t.caption),i(g,e,n),i(v,e,n),r(y,v),r(b,v),r(w,v)},update:function(t,e){c!==(c=e.caption)&&(u(f,m),f.insertAdjacentHTML("afterend",c=e.caption)),_!==(_="switch fa fa-thumbs-up good "+e.upvoteSelected)&&(y.className=_),C!==(C="switch fa fa-thumbs-down bad "+e.downvoteSelected)&&(w.className=C)},unmount:function(){u(f,m),s(a),s(g),s(v)},destroy:function(){p(y,"click",n),p(w,"click",o)}}}function w(t){t=t||{},this._state=a(J.data(),t.data),_(this._state,this._state,{},!0),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=t._root||this,this._yield=t._yield,this._torndown=!1,this._fragment=b(this._state,this),t.target&&(this._fragment.create(),this._fragment.mount(t.target,null))}function C(t,e){function n(){u=!0,e.set({answer:a.value}),u=!1}function o(t){var n=e.get();e.fire("change",n.answer)}var a,r,u=!1;return{create:function(){a=l("textarea"),this.hydrate()},hydrate:function(e){a.placeholder=r=t.caption,h(a,"input",n),h(a,"input",o)},mount:function(e,n){i(a,e,n),a.value=t.answer},update:function(t,e){r!==(r=e.caption)&&(a.placeholder=r),u||(a.value=e.answer)},unmount:function(){s(a)},destroy:function(){p(a,"input",n),p(a,"input",o)}}}function x(t){t=t||{},this._state=a(G.data(),t.data),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=t._root||this,this._yield=t._yield,this._torndown=!1,this._fragment=C(this._state,this),t.target&&(this._fragment.create(),this._fragment.mount(t.target,null))}function k(t,e,n,o){(o||"state"in e&&g(t.state,n.state))&&(t.delugeClass=e.delugeClass=X.computed.delugeClass(t.state),t.delugeHeaderClass=e.delugeHeaderClass=X.computed.delugeHeaderClass(t.state),t.delugeBodyClass=e.delugeBodyClass=X.computed.delugeBodyClass(t.state))}function j(t,e){function n(t){e.toggle()}function o(t){return"Voted"===t.state?I:"Pending "==t.state?L:"NotVoted"===t.state?A:"boolean"==typeof t.state?D:null}var a,u,c,f,m,g,v,y,_,b,w,C,x="Initial"===t.state&&S(t,e),k="Initial"!==t.state&&q(t,e),j=o(t),N=j&&j(t,e),$=(!1===t.state||"Voted"===t.state)&&B(t,e);return{create:function(){a=l("div"),c=l("div"),x&&x.create(),m=d("\n\n        "),g=l("span"),v=d("Was this page helpful?"),y=d("\n\n    "),k&&k.create(),_=d("\n\n    "),b=l("div"),N&&N.create(),C=d("\n\n    "),$&&$.create(),this.hydrate()},hydrate:function(e){a.className=u=t.delugeClass,c.className=f=t.delugeHeaderClass,h(c,"click",n),g.className="deluge-helpful",b.className=w=t.delugeBodyClass},mount:function(t,e){i(a,t,e),r(c,a),x&&x.mount(c,null),r(m,c),r(g,c),r(v,g),r(y,c),k&&k.mount(c,null),r(_,a),r(b,a),N&&N.mount(b,null),r(C,b),$&&$.mount(b,null)},update:function(t,n){u!==(u=n.delugeClass)&&(a.className=u),f!==(f=n.delugeHeaderClass)&&(c.className=f),"Initial"===n.state?x||((x=S(n,e)).create(),x.mount(c,m)):x&&(x.unmount(),x.destroy(),x=null),"Initial"!==n.state?k||((k=q(n,e)).create(),k.mount(c,null)):k&&(k.unmount(),k.destroy(),k=null),w!==(w=n.delugeBodyClass)&&(b.className=w),j===(j=o(n))&&N?N.update(t,n):(N&&(N.unmount(),N.destroy()),(N=j&&j(n,e))&&N.create(),N&&N.mount(b,C)),!1===n.state||"Voted"===n.state?$?$.update(t,n):(($=B(n,e)).create(),$.mount(b,null)):$&&($.unmount(),$.destroy(),$=null)},unmount:function(){s(a),x&&x.unmount(),k&&k.unmount(),N&&N.unmount(),$&&$.unmount()},destroy:function(){p(c,"click",n),x&&x.destroy(),k&&k.destroy(),N&&N.destroy(),$&&$.destroy()}}}function S(t,e){var n;return{create:function(){n=l("span"),this.hydrate()},hydrate:function(t){n.className="fa fa-comments deluge-comment-icon"},mount:function(t,e){i(n,t,e)},unmount:function(){s(n)},destroy:o}}function q(t,e){var n;return{create:function(){n=l("span"),this.hydrate()},hydrate:function(t){n.className="fa fa-angle-down deluge-close-icon"},mount:function(t,e){i(n,t,e)},unmount:function(){s(n)},destroy:o}}function N(t,e){var n,a;return{create:function(){n=l("li"),a=d("We're sorry! Please help us improve this page.")},mount:function(t,e){i(n,t,e),r(a,n)},unmount:function(){s(n)},destroy:o}}function O(t,e,n,o,a){function r(t,e,n,o){return"binary"===n.type?E:"freeform"===n.type?T:null}var u,c=r(0,0,n),d=c&&c(t,e,n,o,a);return{create:function(){u=l("li"),d&&d.create()},mount:function(t,e){i(u,t,e),d&&d.mount(u,null)},update:function(t,e,n,o,i){c===(c=r(0,0,o))&&d?d.update(t,e,n,o,i):(d&&(d.unmount(),d.destroy()),(d=c&&c(e,n,o,i,a))&&d.create(),d&&d.mount(u,null))},unmount:function(){s(u),d&&d.unmount()},destroy:function(){d&&d.destroy()}}}function E(t,e,n,o,a){var r=new w({_root:a._root,data:{name:n.name,caption:n.caption}});return r.on("change",function(t){var e=this._context.each_block_value[this._context.question_index];a.update(e.name,t)}),r._context={each_block_value:e,question_index:o},{create:function(){r._fragment.create()},mount:function(t,e){r._fragment.mount(t,e)},update:function(t,e,n,o,a){r._context.each_block_value=n,r._context.question_index=a;var i={};"questions"in t&&(i.name=o.name),"questions"in t&&(i.caption=o.caption),Object.keys(i).length&&r._set(i)},unmount:function(){r._fragment.unmount()},destroy:function(){r.destroy(!1)}}}function T(t,e,n,o,a){var r=new x({_root:a._root,data:{name:n.name,caption:n.caption}});return r.on("change",function(t){var e=this._context.each_block_value[this._context.question_index];a.update(e.name,t)}),r._context={each_block_value:e,question_index:o},{create:function(){r._fragment.create()},mount:function(t,e){r._fragment.mount(t,e)},update:function(t,e,n,o,a){r._context.each_block_value=n,r._context.question_index=a;var i={};"questions"in t&&(i.name=o.name),"questions"in t&&(i.caption=o.caption),Object.keys(i).length&&r._set(i)},unmount:function(){r._fragment.unmount()},destroy:function(){r.destroy(!1)}}}function I(t,e){var n,a;return{create:function(){n=l("p"),a=d("Thank you for your feedback!")},mount:function(t,e){i(n,t,e),r(a,n)},update:o,unmount:function(){s(n)},destroy:o}}function L(t,e){var n,a;return{create:function(){n=l("p"),a=d("Submitting feedback...")},mount:function(t,e){i(n,t,e),r(a,n)},update:o,unmount:function(){s(n)},destroy:o}}function A(t,e){function n(t){e.rate(!0)}function a(t){e.rate(!1)}var u,c,f,m,g;return{create:function(){u=l("a"),c=d("Yes"),f=d("\n        "),m=l("a"),g=d("No"),this.hydrate()},hydrate:function(t){u.className="deluge-vote-button",h(u,"click",n),m.className="deluge-vote-button",h(m,"click",a)},mount:function(t,e){i(u,t,e),r(c,u),i(f,t,e),i(m,t,e),r(g,m)},update:o,unmount:function(){s(u),s(f),s(m)},destroy:function(){p(u,"click",n),p(m,"click",a)}}}function D(t,e){function n(t){e.toggle()}function o(t){e.submit()}for(var a,u,g,v,y,_,b,w,C,x,k=!1===t.state&&N(t,e),j=t.questions,S=[],q=0;q<j.length;q+=1)S[q]=O(t,j,j[q],q,e);return{create:function(){a=l("div"),u=l("ul"),k&&k.create(),g=f();for(var t=0;t<S.length;t+=1)S[t].create();v=d("\n\n            "),y=l("div"),_=l("button"),b=d("Cancel"),w=d("\n                "),C=l("button"),x=d("Submit"),this.hydrate()},hydrate:function(t){a.className="deluge-questions",m(u,"ref",!0),y.className="deluge-button-group",h(_,"click",n),C.className="primary",h(C,"click",o)},mount:function(t,e){i(a,t,e),r(u,a),k&&k.mount(u,null),r(g,u);for(var n=0;n<S.length;n+=1)S[n].mount(u,null);r(v,a),r(y,a),r(_,y),r(b,_),r(w,y),r(C,y),r(x,C)},update:function(t,n){!1===n.state?k||((k=N(n,e)).create(),k.mount(u,g)):k&&(k.unmount(),k.destroy(),k=null);var o=n.questions;if("questions"in t){for(var a=0;a<o.length;a+=1)S[a]?S[a].update(t,n,o,o[a],a):(S[a]=O(n,o,o[a],a,e),S[a].create(),S[a].mount(u,null));for(;a<S.length;a+=1)S[a].unmount(),S[a].destroy();S.length=o.length}},unmount:function(){s(a),k&&k.unmount();for(var t=0;t<S.length;t+=1)S[t].unmount()},destroy:function(){k&&k.destroy(),c(S,!1,0),p(_,"click",n),p(C,"click",o)}}}function B(t,e){function n(t){e.showCollectorDialog()}var o,a,u;return{create:function(){o=l("a"),u=d("Fix This Page"),this.hydrate()},hydrate:function(e){o.className="deluge-fix-button jira-link jirafeedback",o.target="_blank",o.title=a="Report a problem with "+t.pagename+" on Jira",h(o,"click",n)},mount:function(t,e){i(o,t,e),r(u,o)},update:function(t,e){a!==(a="Report a problem with "+e.pagename+" on Jira")&&(o.title=a)},unmount:function(){s(o)},destroy:function(){p(o,"click",n)}}}function Q(t){t=t||{},this._state=a(X.data(),t.data),k(this._state,this._state,{},!0),this._observers={pre:Object.create(null),post:Object.create(null)},this._handlers=Object.create(null),this._root=t._root||this,this._yield=t._yield,this._torndown=!1,t._root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=j(this._state,this),t.target&&(this._fragment.create(),this._fragment.mount(t.target,null)),t._root||(this._lock=!0,y(this._beforecreate),y(this._oncreate),y(this._aftercreate),this._lock=!1)}function R(t,e){var n=[];return e.forEach(function(t,e){n.push(encodeURIComponent(e)+"="+encodeURIComponent(JSON.stringify(t)))}),t+"?"+n.join("&")}function H(){var t=document.querySelector(".body").getAttribute("data-pagename");if(!Object.prototype.hasOwnProperty.call(tt,t)){var e=document.getElementById("rating-panel");e&&(e.innerText="",e&&new Y(Z,t,e).askFreeformQuestion("reason","What were you looking for?").askQuestion("findability","Did you find it?").askQuestion("accuracy","Was the information you found <strong>accurate</strong>?").askQuestion("clarity","Was the information <strong>clear</strong>?").askQuestion("fragmentation","Was the information you needed <strong>all on one page</strong>?"))}}function P(t){return t.hasClass("current")}function V(t){"#"===t.charAt(0)&&(t=t.substring(1)),$(".tab-content").children().hide(),$(".tabs ."+t).show()}function F(t){var e=$('a[href="'+t+'"]'),n=e.parent("li"),o=n.parent("ul"),a=$(".nav.nav-tabs.nav-justified .dropdown-toggle"),r=$(".nav.nav-tabs.nav-justified .dropdown");o.hasClass("dropdown-menu")?(a.text(""+e.first().text()).append('<span class="caret"></span>'),r.addClass("active").siblings().removeClass("active")):(n.addClass("active").siblings().removeClass("active"),a.text("Other ").append('<span class="caret"></span>'))}function z(){var t=$(".nav.nav-tabs.nav-justified"),e=t.first();t.slice(1).detach(),e.detach().insertAfter("h1").first()}function K(t){var e=document.getElementsByClassName("body")[0].getAttribute("data-pagename");return"index"===e?e="":e&&(e+="/"),"/"+t+"/"+e}var U=Object.freeze({setup:function(){for(var t=0,e=document.getElementsByClassName("copyable-code");t<e.length;t+=1){var n=function(){var n=e[t].getElementsByClassName("highlight")[0];if(!n)return{};var o=n.innerText.trim(),a=document.createElement("div"),r=document.createElement("button"),i=document.createElement("span");a.className="copy-button-container",i.className="fa fa-clipboard",r.className="copy-button",r.appendChild(i),r.appendChild(document.createTextNode("Copy")),a.appendChild(r),n.insertBefore(a,n.children[0]),r.addEventListener("click",function(){var t=document.createElement("textarea");document.body.appendChild(t),t.value=o,t.select();try{if(!document.execCommand("copy"))throw new Error("Failed to copy")}catch(t){console.error("Failed to copy"),console.error(t)}document.body.removeChild(t)})}();if(n)return n.v}}}),M=Object.freeze({setup:function(o){function a(){void 0!==u.timeoutID&&window.clearTimeout(u.timeoutID),void 0!==u.xhr&&u.xhr.abort(),u={}}function r(t,e){void 0===t&&console.error("Going to undefined path"),a(),s.classList.add("loading"),u.timeoutID=window.setTimeout(function(){s.classList.remove("loading"),u.timeoutID=-1},1e4);var r=new Date;u.xhr=n(t,{complete:function(){a()},error:function(e){console.error("Failed to load "+t),window.location=t},success:function(t,n){var a=new Date-r;s.classList.remove("loading"),e&&window.history.pushState({href:n},"",n);var u=document.createElement("html");u.innerHTML=t;var c=u.querySelector("title").textContent,l=u.querySelector(".body"),d=u.querySelector(".sphinxsidebarwrapper");a>62.5&&l.classList.add("loading"),s.parentElement.replaceChild(l,s),s=l,i.parentElement.replaceChild(d,i),i=d,document.title=c,o.update(),window.history.onnavigate&&window.history.onnavigate(),window.setTimeout(function(){s.classList.remove("loading"),e&&window.scroll(0,0)},1)}})}if(void 0===window.history||void 0===document.querySelectorAll||void 0===document.body.classList||void 0===(new XMLHttpRequest).responseURL)return!1;var i=document.querySelector(".sphinxsidebarwrapper"),s=document.querySelector(".body"),u={};window.history.replaceState({href:window.location.href},document.querySelector("title").textContent,window.location.href);for(var c=document.querySelectorAll(".sphinxsidebarwrapper > ul a.reference.internal"),l=0;l<c.length;l+=1){var d=c[l];(t($(d))||e($(d)))&&d.addEventListener("click",function(t){0!==t.button||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),r(t.currentTarget.href,!0))})}return window.onpopstate=function(t){null!==t.state&&r(t.state.href,!1)},!0}}),W={get:function(t){return t?this._state[t]:this._state},fire:function(t,e){var n=this,o=t in this._handlers&&this._handlers[t].slice();if(o)for(var a=0;a<o.length;a+=1)o[a].call(n,e)},observe:function(t,e,n){var o=n&&n.defer?this._observers.post:this._observers.pre;return(o[t]||(o[t]=[])).push(e),n&&!1===n.init||(e.__calling=!0,e.call(this,this._state[t]),e.__calling=!1),{cancel:function(){var n=o[t].indexOf(e);~n&&o[t].splice(n,1)}}},on:function(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(a({},t)),this._root._lock||(this._root._lock=!0,y(this._root._beforecreate),y(this._root._oncreate),y(this._root._aftercreate),this._root._lock=!1)}},J={data:function(){return{name:"",caption:"",answer:null}},methods:{change:function(t){this.set({answer:t}),this.fire("change",t)}},computed:{upvoteSelected:function(t){return!0===t?"selected":""},downvoteSelected:function(t){return!1===t?"selected":""}}};a(w.prototype,J.methods,W),w.prototype._set=function(t){var e=this._state;this._state=a({},e,t),_(this._state,t,e,!1),v(this,this._observers.pre,t,e),this._fragment.update(t,this._state),v(this,this._observers.post,t,e)},w.prototype.teardown=w.prototype.destroy=function(t){this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._torndown=!0};var G={data:function(){return{name:"",caption:"",answer:""}},methods:{change:function(){this.fire("change",this.get("answer"))}}};a(x.prototype,G.methods,W),x.prototype._set=function(t){var e=this._state;this._state=a({},e,t),v(this,this._observers.pre,t,e),this._fragment.update(t,this._state),v(this,this._observers.post,t,e)},x.prototype.teardown=x.prototype.destroy=function(t){this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._torndown=!0};var X=function(){function t(t){var e=document.createElement("script");e.type="application/javascript",e.src=t,document.body.appendChild(e)}return{data:function(){return{project:"",pagename:"",state:"Initial",jiraurl:"https://jira.mongodb.org/s/en_UScn8g8x/782/6/1.2.5/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector-embededjs.js?collectorId=298ba4e7",questions:[],answers:{}}},computed:{delugeClass:function(t){return"Initial"===t?"deluge":"deluge deluge-expanded"},delugeHeaderClass:function(t){return"Initial"===t?"deluge-header":"deluge-header deluge-header-expanded"},delugeBodyClass:function(t){return"Initial"===t?"deluge-body":"deluge-body deluge-body-expanded"}},methods:{open:function(){"Initial"===this.get("state")&&(this.set({answers:{}}),this.set({state:"NotVoted"}))},toggle:function(){this.set({answers:{}}),"Initial"===this.get("state")?this.set({state:"NotVoted"}):this.set({state:"Initial"})},submit:function(){var t=this.get("state");if("boolean"!=typeof t)throw new Error("Assertion failed: Feedback submitted without vote");for(var e=new Map,n=this.get("answers"),o=0,a=Object.keys(n);o<a.length;o+=1){var r=a[o],i=n[r];null!==i&&void 0!==i&&e.set(r,i)}this.set({state:"Pending"}),this.fire("submit",{vote:t,fields:e})},rate:function(t){this.set({state:t})},addQuestion:function(t,e,n){return this.set({questions:this.get("questions").concat({type:t,name:e,caption:n})}),this},update:function(t,e){this.get("answers")[t]=e},showCollectorDialog:function(){var e=this;if(window.ATL_JQ_PAGE_PROPS={triggerFunction:function(t){window.setTimeout(function(){return t()},1)},fieldValues:{summary:'Comment on: "'+this.get("project")+"/"+this.get("pagename")+'"'}},window.jQuery)t(this.get("jiraurl"));else{var n=document.createElement("script");n.type="application/javascript",n.integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=",n.setAttribute("crossorigin","anonymous"),n.src="https://code.jquery.com/jquery-2.2.4.min.js",n.onload=function(){t(e.get("jiraurl"))},document.body.appendChild(n)}}}}}();a(Q.prototype,X.methods,W),Q.prototype._set=function(t){var e=this._state;this._state=a({},e,t),k(this._state,t,e,!1),v(this,this._observers.pre,t,e),this._fragment.update(t,this._state),v(this,this._observers.post,t,e)},Q.prototype.teardown=Q.prototype.destroy=function(t){this.fire("destroy"),!1!==t&&this._fragment.unmount(),this._fragment.destroy(),this._fragment=null,this._state={},this._torndown=!0};var Y=function(t,e,n){var o=this;this.project=t,this.path=e,this.storageKey="feedback-"+t+"/"+e;var a=localStorage[this.storageKey],r=a?Date.parse(a).valueOf():-1/0,i="Initial";(new Date).valueOf()<r+2592e6&&(i="Voted"),this.app=new Q({target:n,data:{state:i,project:t,pagename:e}}),this.app.on("submit",function(t){o.sendRating(t.vote,t.fields).then(function(){o.app.set({state:"Voted"})}).catch(function(t){console.error("Error submitting feedback")})})};Y.prototype.askQuestion=function(t,e){return this.app.addQuestion("binary",t,e),this},Y.prototype.askFreeformQuestion=function(t,e){return this.app.addQuestion("freeform",t,e),this},Y.prototype.sendRating=function(t,e){var n=this;return new Promise(function(o,a){e.set("v",t),e.set("p",n.project+"/"+n.path);var r=R("http://deluge.us-east-1.elasticbeanstalk.com/",e),i=new Image;i.onload=function(){return o()},i.onerror=function(){return a()},i.src=r})},Y.prototype.open=function(){this.app.open()};var Z=null,tt={"meta/404":!0,search:!0},et=Object.freeze({init:function(){Z=document.body.getAttribute("data-project")},setup:function(){void 0!==window.localStorage&&H()}}),nt=Object.freeze({setup:function(){var n=$(".sidebar a.current");(t(n)||e(n)||P(n))&&n.parent("li").addClass("selected-item"),n.parents("ul").each(function(t,e){$(e).css("display","block")}),$(".sphinxsidebarwrapper > ul li:not(.current) > ul:not(.current)").hide(),$(".sphinxsidebarwrapper").show(),$(".sphinxsidebarwrapper .toctree-l1").on("click","a",function(o){var a=$(o.currentTarget);t(a)||!a.parent().hasClass("selected-item")&&e(a)||(o.preventDefault(),a.parent().hasClass("current")?(a.parent().removeClass("current selected-item"),a.siblings("ul").slideUp()):(n.parent().removeClass("selected-item"),n.parents().add(n.siblings("ul")).each(function(t,e){var n=$(e);n.has(o.currentTarget).length||(n.is("ul")?n.removeClass("current").slideUp():n.removeClass("current"))}),a.parent().addClass("current"),a.siblings("ul").slideDown(function(){(t(a)||e(a)||P(n))&&a.parent("li").addClass("selected-item")}),n=a))}),$(".sphinxsidebarwrapper > ul ul a.reference").prepend(function(e){var n=$('<span class="expand-icon"></span>');return t($(this))||n.addClass("docs-expand-arrow"),n})}}),ot=Object.freeze({setup:function(){z();var t=null;if(localStorage.getItem("languagePref"))t=localStorage.getItem("languagePref"),$('a[href="'+t+'"]').length<1&&document.querySelector(".nav.nav-tabs.nav-justified > li:first-child > a")&&(t=document.querySelector(".nav.nav-tabs.nav-justified > li:first-child > a").getAttribute("href"));else{var e=document.querySelector(".nav-tabs > .active > [href]");if(!e)return;t=e.getAttribute("href")}V(t),F(t);for(var n=document.querySelectorAll(".nav.nav-tabs.nav-justified a"),o=0;o<n.length;o+=1)!function(t){var e=n[t];e.onclick=function(t){var n=e.getAttribute("href");n&&(localStorage.setItem("languagePref",n),V(n),F(n),z(),t.preventDefault())}}(o)}}),at=Object.freeze({setup:function(){$(".version-selector").on("click",function(t){t.preventDefault();var e=$(t.currentTarget).data("path");window.location.href=K(e)})}}),rt=function(){this.components=[]};rt.prototype.register=function(t){this.components.push(t),t.init&&t.init()},rt.prototype.update=function(){for(var t=this,e=0,n=t.components;e<n.length;e+=1)n[e].setup(t)};var it=new rt;$(function(){function t(){location.hash&&document.getElementById(location.hash.substr(1))&&$(window).scrollTop(window.scrollY-75)}it.register(U),it.register(M),it.register(et),it.register(nt),it.register(ot),it.register(at),$(".toc > ul > li > ul > li").length||$(".right-column .toc").hide(),$(".expand-toc-icon").on("click",function(t){t.preventDefault(),$(".sidebar").toggleClass("reveal")});var e=$(window),n=$(".sidebar"),o=e.width()<=1093;if(e.resize(function(t){o&&e.width()>1093?(o=!1,n.removeClass("reveal")):!o&&e.width()<=1093&&(o=!0)}),window.addEventListener("hashchange",t),location.hash&&window.setTimeout(t,10),$(".content").on("click","a",function(e){$(e.currentTarget).attr("href")===location.hash&&window.setTimeout(t,10)}),it.update(),document.querySelector){var a=document.querySelector("a.current");a&&a.scrollIntoView(!1)}})}();
//# sourceMappingURL=controller.js.map