(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{199:function(e,t,c){},229:function(e,t){},231:function(e,t){},240:function(e,t){},242:function(e,t){},267:function(e,t){},268:function(e,t){},273:function(e,t){},275:function(e,t){},282:function(e,t){},301:function(e,t){},340:function(e,t){},438:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c.n(n),r=c(192),s=c.n(r),o=c(56),i=c.n(o),j=c(57),d=c(106),h=c(16),l=c(0);var u=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("h1",{children:"Score: "}),Object(l.jsx)("h1",{children:e.score}),Object(l.jsx)("h1",{children:"Highscore: "}),Object(l.jsx)("h1",{children:e.highscore})]})};var b=function(e){return Object(l.jsx)("div",{className:"Card",children:Object(l.jsx)("img",{src:e.card.imageUrl,onClick:e.chooseCard.bind(null,e.card.name),alt:e.card.name})})};var O=function(e){return Object(l.jsxs)("div",{className:"Hand",children:[Object(l.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[0]}),Object(l.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[1]}),Object(l.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[2]}),Object(l.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[3]}),Object(l.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[4]}),Object(l.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[5]}),Object(l.jsx)(b,{chooseCard:e.chooseCard,card:e.hand[6]})]})};var f=function(e){return Object(l.jsx)("div",{children:Object(l.jsx)("select",{onChange:e.onChangeSet,value:e.selectedSet,children:e.magicSets.map((function(e){return Object(l.jsx)("option",{value:e.code,children:e.name})}))})})};var x=function(e){return Object(l.jsx)("div",{children:Object(l.jsxs)("select",{onChange:e.onChangeColour,value:e.selectedColour,children:[Object(l.jsx)("option",{value:"White",children:"White"}),Object(l.jsx)("option",{value:"Black",children:"Black"}),Object(l.jsx)("option",{value:"Red",children:"Red"}),Object(l.jsx)("option",{value:"Green",children:"Green"}),Object(l.jsx)("option",{value:"Blue",children:"Blue"})]})})};var v=function(e){return Object(l.jsxs)("div",{children:[Object(l.jsx)("p",{children:"In this game, you'll be presented with a hand of 7 cards from the set and colour you've chosen. After you pick one, you'll be presented with a new hand of 7 cards. As long as you keep choosing cards that you haven't picked already, your score will increase. Once you pick a card that you've already chosen, the score and cards you've picked will both reset. Try to get as high of a score as you can!"}),Object(l.jsx)("p",{children:"PS."}),Object(l.jsx)("p",{children:"While the game allows you to pick any set from magic's history, some of the cards from older sets lack image urls, and are thus removed from the pool. Hence, you may find that certain sets may give you a smaller number of cards than newer ones."})]})};var m=function(e){return Object(l.jsxs)("div",{className:"Footer",children:[Object(l.jsx)("a",{href:"https://github.com/mazqt/memory-card",children:"Github Repository"}),Object(l.jsx)("a",{href:"https://github.com/MagicTheGathering/mtg-sdk-javascript",children:"Repository for the MTG Javascript SDK"})]})};c(199);var p=function(){var e=c(200),t=Object(n.useState)(!1),a=Object(h.a)(t,2),r=a[0],s=a[1],o=Object(n.useState)("DOM"),b=Object(h.a)(o,2),p=b[0],g=b[1],y=Object(n.useState)("White"),C=Object(h.a)(y,2),w=C[0],S=C[1],k=Object(n.useState)(null),M=Object(h.a)(k,2),N=M[0],B=M[1],G=Object(n.useState)(!0),P=Object(h.a)(G,2),E=P[0],R=P[1],W=Object(n.useState)(0),H=Object(h.a)(W,2),J=H[0],T=H[1],q=Object(n.useState)([]),A=Object(h.a)(q,2),D=A[0],I=A[1],U=Object(n.useState)(0),z=Object(h.a)(U,2),F=z[0],K=z[1],L=Object(n.useState)([]),Y=Object(h.a)(L,2),Q=Y[0],V=Y[1],X=Object(n.useState)([]),Z=Object(h.a)(X,2),$=Z[0],_=Z[1],ee=Object(n.useState)(!0),te=Object(h.a)(ee,2),ce=te[0],ne=te[1],ae=Object(n.useState)(!1),re=Object(h.a)(ae,2),se=re[0],oe=re[1];function ie(){return(ie=Object(d.a)(i.a.mark((function t(){var c;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return R(!0),t.next=3,e.card.where({set:p,colors:w,contains:"imageUrl"});case 3:c=t.sent,B(c),R(!1);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function je(){return(je=Object(d.a)(i.a.mark((function t(){var c,n;return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return ne(!0),t.next=3,e.set.where({type:0});case 3:return c=t.sent,n=Object(j.a)(c),t.next=7,e.set.where({type:"expansion"});case 7:c=t.sent,n=[].concat(Object(j.a)(n),Object(j.a)(c)),_(n),ne(!1);case 11:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function de(){for(var e=[];e.length<1;){var t=Math.floor(Math.random()*N.length);Q.includes(N[t].name)||e.push(t)}for(;e.length<7;){var c=Math.floor(Math.random()*N.length);e.includes(c)||e.push(c)}var n=e.map((function(e){return N[e]}));!function(e){for(var t=e.length-1;t>0;t--){var c=Math.floor(Math.random()*(t+1)),n=[e[c],e[t]];e[t]=n[0],e[c]=n[1]}}(n),I(n)}return Object(n.useEffect)((function(){!function(){je.apply(this,arguments)}()}),[]),Object(n.useEffect)((function(){null!==N&&de()}),[N,J]),Object(n.useEffect)((function(){!function(){ie.apply(this,arguments)}()}),[w,p]),r?se?Object(l.jsxs)("div",{className:"Menu",children:[Object(l.jsx)("p",{children:"Congratulations, you managed to win the game! Your memory must be quite outstanding to have done that."}),Object(l.jsx)("button",{onClick:function(){window.location.reload()},children:"Play again"})]}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"Game",children:[Object(l.jsx)(u,{score:J,highscore:F}),Object(l.jsx)(O,{chooseCard:function(e){Q.includes(e)?(T(0),V([])):(T(J+1),J>=F&&K(J+1),Q.length+1===N.length&&oe(!0),V([].concat(Object(j.a)(Q),[e])))},hand:D}),Object(l.jsx)("button",{onClick:s.bind(null,!1),children:"Back to menu"})]}),Object(l.jsx)(m,{})]}):E||ce?Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"Menu",children:[Object(l.jsx)("div",{style:{width:"30vw"},children:Object(l.jsx)(v,{})}),Object(l.jsx)("div",{className:"Picker",children:Object(l.jsx)("p",{children:"Loading!"})})]}),Object(l.jsx)(m,{})]}):Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{className:"Menu",children:[Object(l.jsx)("div",{style:{width:"30vw"},children:Object(l.jsx)(v,{})}),Object(l.jsxs)("div",{className:"Picker",children:[Object(l.jsx)(f,{onChangeSet:function(e){var t=e.target.value;g(t)},selectedSet:p,magicSets:$}),Object(l.jsx)(x,{onChangeColour:function(e){var t=e.target.value;S(t)},selectedColour:w}),Object(l.jsx)("button",{onClick:s.bind(null,!0),children:"Play!"})]})]}),Object(l.jsx)(m,{})]})};s.a.render(Object(l.jsx)(a.a.StrictMode,{children:Object(l.jsx)(p,{})}),document.getElementById("root"))}},[[438,1,2]]]);
//# sourceMappingURL=main.93c0cc00.chunk.js.map