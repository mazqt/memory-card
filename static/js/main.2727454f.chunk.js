(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{228:function(e,t){},230:function(e,t){},239:function(e,t){},241:function(e,t){},266:function(e,t){},267:function(e,t){},272:function(e,t){},274:function(e,t){},281:function(e,t){},300:function(e,t){},339:function(e,t){},437:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),r=c(192),o=c.n(r),s=c(56),i=c.n(s),j=c(57),u=c(106),d=c(18),h=c(1);var l=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"I'm the score"}),Object(h.jsx)("h1",{children:e.score}),Object(h.jsx)("h1",{children:"I'm the highscore"}),Object(h.jsx)("h1",{children:e.highscore})]})};var b=function(e){return console.log(e.card),Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"I'm the card"}),Object(h.jsx)("img",{src:e.card.imageUrl,onClick:e.chooseCard.bind(null,e.card.name),alt:e.card.name})]})};var O=function(e){return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{onClick:e.chooseCard,children:"Score"}),Object(h.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[0]}),Object(h.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[1]}),Object(h.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[2]}),Object(h.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[3]}),Object(h.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[4]}),Object(h.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[5]}),Object(h.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[6]})]})};var f=function(e){return Object(h.jsx)("div",{children:Object(h.jsx)("select",{onChange:e.onChangeSet,value:e.selectedSet,children:e.magicSets.map((function(e){return Object(h.jsx)("option",{value:e.code,children:e.name})}))})})};var x=function(e){return Object(h.jsx)("div",{children:Object(h.jsxs)("select",{onChange:e.onChangeColour,value:e.selectedColour,children:[Object(h.jsx)("option",{value:"White",children:"White"}),Object(h.jsx)("option",{value:"Black",children:"Black"}),Object(h.jsx)("option",{value:"Red",children:"Red"}),Object(h.jsx)("option",{value:"Green",children:"Green"}),Object(h.jsx)("option",{value:"Blue",children:"Blue"})]})})};var v=function(){var e=c(199),t=Object(n.useState)(!1),a=Object(d.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)("DOM"),b=Object(d.a)(s,2),v=b[0],p=b[1],C=Object(n.useState)("White"),g=Object(d.a)(C,2),m=g[0],S=g[1],y=Object(n.useState)(null),k=Object(d.a)(y,2),w=k[0],B=k[1],E=Object(n.useState)(!0),I=Object(d.a)(E,2),M=I[0],W=I[1],G=Object(n.useState)(0),J=Object(d.a)(G,2),P=J[0],R=J[1],T=Object(n.useState)([]),U=Object(d.a)(T,2),A=U[0],D=U[1],N=Object(n.useState)(0),q=Object(d.a)(N,2),z=q[0],F=q[1],H=Object(n.useState)([]),K=Object(d.a)(H,2),L=K[0],Q=K[1],V=Object(n.useState)([]),X=Object(d.a)(V,2),Y=X[0],Z=X[1],$=Object(n.useState)(!0),_=Object(d.a)($,2),ee=_[0],te=_[1];function ce(){return(ce=Object(u.a)(i.a.mark((function t(){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return W(!0),t.next=3,e.card.where({set:v,colors:m,contains:"imageUrl"});case 3:c=t.sent,B(c),W(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function ne(){return(ne=Object(u.a)(i.a.mark((function t(){var c,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return te(!0),t.next=3,e.set.where({type:0});case 3:return c=t.sent,n=Object(j.a)(c),t.next=7,e.set.where({type:"expansion"});case 7:c=t.sent,n=[].concat(Object(j.a)(n),Object(j.a)(c)),Z(n),te(!1),console.log(n);case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(n.useEffect)((function(){!function(){ne.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){null!==w&&(!function(){var e=[];do{var t=Math.floor(Math.random()*w.length);e.includes(t)||e.push(t)}while(e.length<7);var c=e.map((function(e){return w[e]}));D(c)}(),console.log(w))}),[w,P]),Object(n.useEffect)((function(){!function(){ce.apply(this,arguments)}()}),[m,v]),r?Object(h.jsxs)("div",{children:[Object(h.jsx)(l,{score:P,highscore:z}),Object(h.jsx)(O,{chooseCard:function(e){L.includes(e)?(R(0),Q([])):(R(P+1),P>=z&&F(P+1),Q([].concat(Object(j.a)(L),[e])))},hand:A}),Object(h.jsx)("button",{onClick:o.bind(null,!1),children:"Toggle Playing"})]}):M||ee?Object(h.jsx)("h1",{children:"Still loading!"}):Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{onChangeSet:function(e){var t=e.target.value;p(t)},selectedSet:v,magicSets:Y}),Object(h.jsx)(x,{onChangeColour:function(e){var t=e.target.value;S(t)},selectedColour:m}),Object(h.jsx)("button",{onClick:o.bind(null,!0),children:"Toggle Playing"})]})};o.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[437,1,2]]]);
//# sourceMappingURL=main.2727454f.chunk.js.map