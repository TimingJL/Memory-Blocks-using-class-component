(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{27:function(n,e,t){n.exports=t(45)},36:function(n,e,t){},39:function(n,e,t){},45:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(13),c=t.n(o),i=t(14),l=(t(36),t(7)),s=t(8),u=t(10),d=t(9),p=t(11),m=t(1),f=t(3),h=t(4),b=t(5),g="".concat("MEMORY_BLOCKS","/SET_INIT"),v="".concat("MEMORY_BLOCKS","/UPDATE_ANSWER"),k="".concat("MEMORY_BLOCKS","/UPDATE_IS_COMPLETE"),w="".concat("MEMORY_BLOCKS","/UPDATE_IS_CORRECT"),y="".concat("MEMORY_BLOCKS","/SET_RESTART_GAME"),_="".concat("MEMORY_BLOCKS","/SET_REPLAY_SOUND"),x=2,O=5,E=5,j=5,C=1,S={correct:"correct",wrong:"wrong"},I=["#ff5353","#ffc429","#5980c1","#fbe9b7","#FF9F1C","#b2ff59","#69f0ae","#ffff00","#b2dfdb","#ff6e40","#00E5FF","#e0e0e0","#f06292","#ba68c8","#8c9eff","#8BC34A","#E91E63","#FFE2D1","#FFDF64","#00c853","#DCABDF","#78FFD6","#C8553D","#3185FC","#FFFFFF"],L="https://awiclass.monoame.com/pianosound/set/",R=[1,1.5,2,2.5,3,4,4.5,5,5.5,6,6.5,7,8,8.5,9,9.5,10,11,11.5,12,12.5,13,13.5,14,15],A={correct:[1,3,5,8].map(function(n){return new Audio(L+n+".wav")}),wrong:[2,4,5.5,7].map(function(n){return new Audio(L+n+".wav")})};function D(){var n=Object(h.a)(["\n    .memory-blocks__title-wrapper {\n        color: white;\n        font-size: 2em;\n        font-weight: 900;\n        text-align: right;\n        letter-spacing: 1px;\n    }\n    .memory-blocks__blocks-wrapper {\n        position: relative;\n        width: ","px;\n        height: ","px;\n        @media only screen and (max-width: 600px) {\n            width: calc(100vw - 20px);\n            height: calc(100vw - 20px);\n        }\n        display: grid;\n        ","\n    }\n    .memory-blocks__info {\n        color: #FF5353;\n        font-size: 1.2em;\n        font-weight: 900;\n        margin: 20px 0px 10px 0px;\n    }\n    .memory-blocks__panel {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n\n        display: flex;\n        justify-content: center;\n        align-items: center;\n    }\n    .memory-blocks__start-btn {\n        ","\n        width: 150px;\n        height: 60px;\n        font-size: 2em;\n    }\n    .memory-blocks__group-btn-wrapper {\n        display: flex;\n        justify-content: flex-end;\n        margin-top: 10px;\n        .memory-blocks__hint-btn {\n            margin-right: 10px;\n            ","\n        }\n        .memory-blocks__restart-btn {\n            ","\n        }\n        .fa-music {\n            color: #3185FC;\n        }\n    }\n"]);return D=function(){return n},n}var T=b.a.div(D(),600,600,function(n){var e=n.sideLength;return"\n                    grid-template-columns: repeat(".concat(e,", 1fr);\n                    grid-template-rows: repeat(").concat(e,", 1fr);\n                    grid-gap: ").concat(40/e,"px;\n                ")},"\n    width: 100px;\n    height: 40px;\n    background: #000000b3;\n    border: 2px solid white;\n    color: white;\n    border-radius: 40px;\n    font-size: 1em;\n    font-weight: 700;\n    letter-spacing: 1px;\n    cursor: pointer;\n    outline: none;\n    transition: all 0.8s;\n    &:hover {\n        color: black;\n        background: white;\n        opacity: 1;\n    }\n","\n    width: 100px;\n    height: 40px;\n    background: #000000b3;\n    border: 2px solid white;\n    color: white;\n    border-radius: 40px;\n    font-size: 1em;\n    font-weight: 700;\n    letter-spacing: 1px;\n    cursor: pointer;\n    outline: none;\n    transition: all 0.8s;\n    &:hover {\n        color: black;\n        background: white;\n        opacity: 1;\n    }\n","\n    width: 100px;\n    height: 40px;\n    background: #000000b3;\n    border: 2px solid white;\n    color: white;\n    border-radius: 40px;\n    font-size: 1em;\n    font-weight: 700;\n    letter-spacing: 1px;\n    cursor: pointer;\n    outline: none;\n    transition: all 0.8s;\n    &:hover {\n        color: black;\n        background: white;\n        opacity: 1;\n    }\n");function F(){var n=Object(h.a)(["\n    .block__block-item {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        width: 100%;\n        height: 100%;\n        ","\n        cursor: pointer;\n        transition: 0.5s;\n        background-color: transparent;\n        animation: "," 1.5s infinite alternate-reverse;\n        animation-delay: ","s;\n        &:hover {\n            ","\n        }\n        &:active {\n            ","\n            transition: 0s;\n        }\n    }\n    .block__block-item-active {\n        ","\n        transition: 0s;\n    }\n"]);return F=function(){return n},n}function M(){var n=Object(h.a)(["\n    0% {\n        box-shadow: none;\n    }\n    100% {\n        box-shadow: 0px 0px 50px 5px ",";\n    }\n"]);return M=function(){return n},n}var B=b.a.div(F(),function(n){var e=n.blockId,t=n.sideLength;return"\n                border: ".concat(6/t,"px solid ").concat(I[e]+"80",";\n            ")},function(n){return Object(b.b)(M(),I[n.blockId]+"80")},function(n){return-2*Math.random(n.blockId)},function(n){var e=n.blockId;return"\n                    background: ".concat(I[e]+"4d",";\n                ")},function(n){var e=n.blockId;return"\n                    animation: none;\n                    background: ".concat(I[e],";\n                    box-shadow: 0px 0px 50px 7px ").concat(I[e],";\n                ")},function(n){var e=n.blockId;return"\n                animation: none;\n                background: ".concat(I[e],";\n                box-shadow: 0px 0px 50px 7px ").concat(I[e],";\n            ")}),N=function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){var n=this.props,e=n.blockId,t=n.sideLength,r=n.handleOnClick;return a.a.createElement(B,{blockId:e,sideLength:t},a.a.createElement("div",{id:"block-".concat(e),"data-id":e,className:"block__block-item",onClick:r}))}}]),e}(a.a.PureComponent);N.defaultProps={blockId:0,sideLength:0,handleOnClick:function(){}};var G=N;function U(){var n=Object(h.a)(["\n    display: flex;\n    list-style-type: none;\n    margin-top: 20px;\n    position: relative;\n    width: ","px;\n    @media only screen and (max-width: 600px) {\n        width: calc(100vw - 20px);\n    }\n    display: grid;\n    grid-template-columns: repeat(20, 1fr);\n    .progress__node {\n        width: ","px;\n        height: ","px;\n        border-radius: 100%;\n        margin: 5px 5px;\n        background: white;\n        opacity: 0.3;\n    }\n    .progress__node-active {\n        opacity: 1;\n        box-shadow: 0px 0px 15px 2px white;\n    }\n"]);return U=function(){return n},n}var z=b.a.ul(U(),600,10,10),P=function(n){var e=n.levelData,t=n.answer,r=Array.from(Array(e.size),function(n,e){return{id:e,className:e<t.size?"progress__node progress__node-active":"progress__node"}});return a.a.createElement(z,null,r.map(function(n){return a.a.createElement("li",{key:n.id,className:n.className})}))};P.defaultProps={levelData:Object(m.List)(),answer:Object(m.List)()};var J=P,Y=function(n){return n.get("memoryBlocks")},K=function(n){A[n].forEach(function(n){n.currentTime=0,n.play()})},W=function(n,e){n.forEach(function(n,t){setTimeout(function(){var t=e.getIn([n.toString(),"audio"])();t.currentTime=0,t.play(),$(n)},500*t)})},$=function(n){document.getElementById("block-".concat(n)).classList.add("block__block-item-active"),setTimeout(function(){document.getElementById("block-".concat(n)).classList.remove("block__block-item-active")},200)},q=function(n){n.forEach(function(n){$(n.get("id"))})},H=function(n,e){var t=e*e,r=n+e;return Array.from(Array(r),function(n,e){return Math.floor(Math.random()*t)})},Q=function(){for(var n=window.setTimeout(function(){},1),e=1;e<=n;e++)clearTimeout(e)},V=function(n){function e(){var n,t;Object(l.a)(this,e);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(t=Object(u.a)(this,(n=Object(d.a)(e)).call.apply(n,[this].concat(a)))).handleOnBlockClick=function(n){var e=t.props,r=e.blocks,a=e.handleUpdateAnswer,o=n.target.getAttribute("data-id"),c=r.getIn([o,"audio"])();c.currentTime=0,c.play(),a(parseInt(o,10))},t.handleOnGameStart=function(){var n=t.props,e=n.levelData,r=n.blocks;(0,n.handleSetInit)(),K(S.correct),q(r),setTimeout(function(){W(e,r)},2e3)},t.handleOnGameRestart=function(){var n=t.props.handleSetGameRestart;Q(),n()},t.handleOnReplaySound=function(){var n=t.props,e=n.levelData,r=n.blocks,a=n.chance,o=n.handleSetReplaySound;a&&(Q(),o(),setTimeout(function(){W(e,r)},500))},t}return Object(p.a)(e,n),Object(s.a)(e,[{key:"componentDidUpdate",value:function(n,e){var t=this.props,r=t.blocks,a=t.sideLength,o=t.levelData,c=t.chance,i=t.isComplete,l=t.isCorrect,s=t.handleUpdateIsComplete,u=t.handleUpdateIsCorrect,d=t.handleSetGameRestart;if(c<0)return Q(),void d();i?(s(!1),setTimeout(function(){K(S.correct),q(r,a)},500),setTimeout(function(){W(o,r)},3e3)):l||(Q(),u(!0),setTimeout(function(){K(S.wrong),q(r,a)},500),setTimeout(function(){W(o,r)},3e3))}},{key:"render",value:function(){var n=this,e=this.props,t=e.levelData,r=e.answer,o=e.isGameStart,c=e.blocks,i=e.sideLength,l=e.level,s=e.chance;return a.a.createElement(T,{sideLength:i},a.a.createElement("div",{className:"memory-blocks__title-wrapper"},a.a.createElement("div",null,"Memory"),a.a.createElement("div",null,"Blocks")),a.a.createElement("div",{className:"memory-blocks__info"},"Level ",l),a.a.createElement("div",{className:"memory-blocks__blocks-wrapper"},c.map(function(e){return a.a.createElement(G,{key:e.get("id"),blockId:e.get("id"),sideLength:i,handleOnClick:n.handleOnBlockClick})}),!o&&a.a.createElement("div",{className:"memory-blocks__panel"},a.a.createElement("button",{className:"memory-blocks__start-btn",onClick:this.handleOnGameStart},"Start"))),a.a.createElement(J,{levelData:t,answer:r}),o&&a.a.createElement("div",{className:"memory-blocks__group-btn-wrapper"},a.a.createElement("button",{className:"memory-blocks__hint-btn memory-blocks__font-music",onClick:this.handleOnReplaySound},a.a.createElement("i",{className:"fas fa-music memory-blocks__font-music"}),a.a.createElement("span",null," x ",s)),a.a.createElement("button",{className:"memory-blocks__restart-btn",onClick:this.handleOnGameRestart},"Restart")))}}]),e}(r.Component);V.defaultProps={blocks:Object(m.List)(),sideLength:0,isGameStart:!1,level:C,chance:0,isComplete:!1,isCorrect:!0,handleSetInit:function(){},handleUpdateAnswer:function(){},handleSetGameRestart:function(){},handleSetReplaySound:function(){}};var X=Object(f.b)({blocks:Object(f.a)(Y,function(n){return n.get("blocks")}),sideLength:Object(f.a)(Y,function(n){return n.get("sideLength")}),levelData:Object(f.a)(Y,function(n){return n.get("levelData")}),answer:Object(f.a)(Y,function(n){return n.get("answer")}),isGameStart:Object(f.a)(Y,function(n){return n.get("isGameStart")}),level:Object(f.a)(Y,function(n){return n.get("level")}),isComplete:Object(f.a)(Y,function(n){return n.get("isComplete")}),isCorrect:Object(f.a)(Y,function(n){return n.get("isCorrect")}),chance:Object(f.a)(Y,function(n){return n.get("chance")})}),Z=Object(i.b)(X,function(n){return{handleSetInit:function(){return n({type:g})},handleSetGameRestart:function(){return n({type:y})},handleSetReplaySound:function(){return n({type:_})},handleUpdateAnswer:function(e){return n(function(n){return{type:v,payload:n}}(e))},handleUpdateIsComplete:function(e){return n(function(n){return{type:k,payload:n}}(e))},handleUpdateIsCorrect:function(e){return n(function(n){return{type:w,payload:n}}(e))}}})(V),nn=(t(39),function(n){function e(){return Object(l.a)(this,e),Object(u.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(p.a)(e,n),Object(s.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(Z,null))}}]),e}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var en=t(12),tn=t(25),rn=function(n){return Array.from(Array(n*n),function(n,e){return{id:e,audio:function(){return new Audio(L+R[e]+".wav")}}})},an=Object(m.fromJS)({blocks:rn(x),sideLength:x,level:C,levelData:H(C,x),answer:[],isGameStart:!1,isCorrect:!0,isComplete:!1,chance:3});var on=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:an,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case g:return n.set("isGameStart",!0);case y:return an.set("isGameStart",!1).set("levelData",Object(m.fromJS)(H(C,x)));case v:var t=n.get("answer").push(e.payload),r=n.get("levelData"),a=n.get("level"),o=n.get("sideLength"),c=cn(t,r);if(c&&t.size===r.size){var i=a+1,l=o+1>O?O:o+1;return n.set("isComplete",!0).set("level",i).set("levelData",Object(m.fromJS)(H(i,o))).set("answer",Object(m.List)()).updateIn(["sideLength"],function(n){return i%E===0?l:n}).updateIn(["blocks"],function(n){return i%E===0?Object(m.fromJS)(rn(l)):n}).updateIn(["chance"],function(n){return n+1>j?j:n+1})}return c?n.set("answer",t):n.set("isCorrect",!1).set("answer",Object(m.List)()).updateIn(["chance"],function(n){return n-1});case k:return n.set("isComplete",e.payload);case w:return n.set("isCorrect",e.payload);case _:return n.updateIn(["chance"],function(n){return n-1});default:return n}},cn=function(n,e){var t;return n.forEach(function(n,r){t=n===e.get(r)}),t};var ln=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=(arguments.length>1&&arguments[1],[en.a.apply(void 0,[])]),t=en.c;return Object(en.d)(Object(tn.combineReducers)({memoryBlocks:on}),Object(m.fromJS)(n),t.apply(void 0,e))}();c.a.render(a.a.createElement(i.a,{store:ln},a.a.createElement(nn,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})}},[[27,2,1]]]);
//# sourceMappingURL=main.d46d8875.chunk.js.map