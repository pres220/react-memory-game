(this["webpackJsonpreact-memory-game"]=this["webpackJsonpreact-memory-game"]||[]).push([[0],{38:function(e,a,d){},39:function(e,a,d){"use strict";d.r(a);var r=d(1),i=d(3),c=d(12),t=d.n(c),n=d(18),s=d(4),o=d(17),m=d(7),C=d(16),f=d.n(C);var h=function(e){var a=e.handleCardClick,d=e.card,i=e.isMatch,c=e.isMismatch,t=i?"match":"",n=c?"mismatch":"",s=e.isFlipped||i||c?"flipped":"";return Object(r.jsx)("div",{onClick:function(){return a(d.id,d.name)},className:"card ".concat(s," ").concat(t).concat(n).trim(),children:Object(r.jsx)(m.a,{icon:d.name})})},O=d(8),u=d(2),j=[{id:1,name:"dog"},{id:2,name:"dog"},{id:3,name:"dragon"},{id:4,name:"dragon"},{id:5,name:"fish"},{id:6,name:"fish"},{id:7,name:"frog"},{id:8,name:"frog"},{id:9,name:"hippo"},{id:10,name:"hippo"},{id:11,name:"kiwi-bird"},{id:12,name:"kiwi-bird"},{id:13,name:"horse-head"},{id:14,name:"horse-head"},{id:15,name:"cat"},{id:16,name:"cat"}];function p(e){for(var a=e.length-1;a>=0;a--){var d=Math.floor(Math.random()*(a+1)),r=e[a];e[a]=e[d],e[d]=r}return e}var l={firstCard:{id:void 0,name:""},secondCard:{id:void 0,name:""},cards:p(j),matchedCards:[],mismatchedCards:[],flippedCards:[],isModalOpen:!1,isLocked:!1};function b(e,a){switch(a.type){case"SET_FIRST_CARD":return Object(u.a)(Object(u.a)({},e),{},{firstCard:a.firstCard,flippedCards:[a.firstCard]});case"SET_SECOND_CARD":return Object(u.a)(Object(u.a)({},e),{},{secondCard:a.secondCard,flippedCards:[].concat(Object(O.a)(e.flippedCards),[a.secondCard])});case"SET_BOARD_LOCK":return Object(u.a)(Object(u.a)({},e),{},{isLocked:a.isLocked});case"SET_MATCHES":return Object(u.a)(Object(u.a)({},e),{},{matchedCards:[].concat(Object(O.a)(e.matchedCards),Object(O.a)(e.cards.filter((function(a){return a.name===e.firstCard.name}))))});case"SET_MISMATCHES":return Object(u.a)(Object(u.a)({},e),{},{mismatchedCards:e.cards.filter((function(a){return a.id===e.firstCard.id||a.id===e.secondCard.id}))});case"UNSET_MISMATCHES":return Object(u.a)(Object(u.a)({},e),{},{mismatchedCards:[]});case"OPEN_MODAL":return Object(u.a)(Object(u.a)({},e),{},{isModalOpen:!0});case"RESET_GAME":return{firstCard:{id:void 0,name:""},secondCard:{id:void 0,name:""},cards:p(j),matchedCards:[],mismatchedCards:[],flippedCards:[],isModalOpen:!1,isLocked:!1};default:return e}}s.b.add(o.a);var E=function(){var e=Object(i.useReducer)(b,l),a=Object(n.a)(e,2),d=a[0],c=a[1];function t(e,a){var r=d.matchedCards.find((function(a){return a.id===e})),i=d.mismatchedCards.find((function(a){return a.id===e}));d.isLocked||e===d.firstCard.id||e===d.secondCard.id||r||i||(d.mismatchedCards.length>0&&c({type:"UNSET_MISMATCHES"}),d.firstCard.id?c({type:"SET_SECOND_CARD",secondCard:{id:e,name:a}}):c({type:"SET_FIRST_CARD",firstCard:{id:e,name:a}}))}return Object(i.useEffect)((function(){d.firstCard.id&&d.secondCard.id&&(c({type:"SET_BOARD_LOCK",isLocked:!0}),d.firstCard.name===d.secondCard.name?(c({type:"SET_MATCHES"}),c({type:"SET_BOARD_LOCK",isLocked:!1})):(c({type:"SET_MISMATCHES"}),c({type:"SET_BOARD_LOCK",isLocked:!1})),c({type:"SET_FIRST_CARD",firstCard:{id:void 0,name:""}}),c({type:"SET_SECOND_CARD",secondCard:{id:void 0,name:""}}))}),[d.firstCard,d.secondCard]),Object(i.useEffect)((function(){d.matchedCards.length===d.cards.length&&c({type:"OPEN_MODAL"})}),[d.matchedCards,d.cards]),Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Memory Game"})}),Object(r.jsx)(f.a,{isOpen:d.isModalOpen,className:"modal",ariaHideApp:!1,children:Object(r.jsxs)("div",{className:"message",children:[Object(r.jsx)("button",{onClick:function(){return c({type:"RESET_GAME"})},children:"Close"}),Object(r.jsx)("h1",{children:"You Win!"}),Object(r.jsx)(m.a,{icon:"trophy"})]})}),Object(r.jsx)("section",{children:Object(r.jsx)("ul",{className:"board",children:d.cards.map((function(e){var a=d.matchedCards.find((function(a){return a.name===e.name})),i=d.mismatchedCards.find((function(a){return a.id===e.id})),c=d.flippedCards.find((function(a){return a.id===e.id}));return Object(r.jsx)("li",{children:Object(r.jsx)(h,{handleCardClick:t,card:e,isMatch:a,isMismatch:i,isFlipped:c})},e.id)}))})})]})};d(38);t.a.render(Object(r.jsx)(E,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.e98a6d5a.chunk.js.map