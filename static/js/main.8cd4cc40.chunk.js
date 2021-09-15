(this["webpackJsonpframer-motion"]=this["webpackJsonpframer-motion"]||[]).push([[0],{27:function(e,t,i){},29:function(e,t,i){"use strict";i.r(t);var n=i(1),a=i(21),o=(i(27),i(12)),c=i(31),r=i(32),s=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),i=t[0],a=t[1];return{modalOpen:i,close:function(){return a(!1)},open:function(){return a(!0)}}},l=console.log,d=function(e){return l("%c".concat(e,": animation complete"),"color: red")},u=function(e,t){t?l("%c".concat(e,": mounted"),"color: green"):l("%c".concat(e,": unmounted"),"color: orange")},j=i(22),b=i(20),p=0,h=i(2),x={initial:{opacity:0,y:50,scale:.2,transition:{duration:.1}},animate:{opacity:1,y:0,scale:1},exit:{opacity:0,scale:.2,transition:{ease:"easeOut",duration:.15}},hover:{scale:1.05,transition:{duration:.1}}},f=function(e){return Object(h.jsx)(c.a.path,Object(j.a)({fill:"transparent",strokeWidth:"3",stroke:e.color,strokeLinecap:"square"},e))},m=function(e){var t=e.handleClose,i=e.color;return Object(h.jsx)(c.a.div,{whileHover:{scale:1.2},onClick:t,className:"close",children:Object(h.jsxs)("svg",{width:"18",height:"18",viewBox:"0 0 23 23",children:[Object(h.jsx)(f,{color:i,d:"M 3 16.5 L 17 2.5"}),Object(h.jsx)(f,{color:i,d:"M 3 2.5 L 17 16.346"})]})})},O=function(e){var t=e.notifications,i=e.setNotifications,n=e.notification,a=n.text,o=n.style;return Object(h.jsxs)(c.a.li,{positionTransition:!0,drag:!0,dragConstraints:{left:0,right:0,top:0,bottom:0},style:function(){switch(o){case"success":return{background:"linear-gradient(15deg, #6adb00, #04e800)"};case"error":return{background:"linear-gradient(15deg, #ff596d, #d72c2c)"};case"warning":return{background:"linear-gradient(15deg, #ffac37, #ff9238)"};case"light":return{background:"linear-gradient(15deg, #e7e7e7, #f4f4f4)"};default:return{background:"linear-gradient(15deg, #202121, #292a2d)"}}}(),variants:x,whileHover:"hover",initial:"initial",animate:"animate",exit:"exit",children:[Object(h.jsx)("h3",{style:{color:o?"#030303":"#929292"},className:"notification-text",children:a}),Object(h.jsx)(m,{color:o?"#030303":"#989898",handleClose:function(){return i(function(e,t){var i=Object(b.a)(e);return i.splice(i.findIndex((function(e){return e===t})),1),i}(t,n))}})]})},g=function(e){var t=e.onChange,i=e.value,n=e.placeHolder;return Object(h.jsx)("input",{type:"text",value:i,onChange:t,placeholder:n,className:"input"})},v=function(e){var t=e.children,i=e.onClick;return Object(n.useEffect)((function(){return u("Backdrop",!0),function(){return u("Backdrop",!1)}}),[]),Object(h.jsx)(c.a.div,{className:"backdrop",onClick:i,initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},children:t})},y={hidden:{y:"-100vh",opacity:0},visible:{y:"0",opacity:1,transition:{duration:.1,type:"spring",damping:25,stiffness:500}},exit:{y:"100vh",opacity:0}},C={hidden:{transform:"scale(0) rotateX(-360deg)",opacity:0,transition:{delay:.3}},visible:{transform:" scale(1) rotateX(0deg)",opacity:1,transition:{duration:.5}},exit:{transform:"scale(0) rotateX(360deg)",opacity:0,transition:{duration:.5}}},k={hidden:{transform:"scale(0) rotate(720deg)",opacity:0,transition:{delay:.3}},visible:{transform:" scale(1) rotate(0deg)",opacity:1,transition:{duration:.5}},exit:{transform:"scale(0) rotate(-720deg)",opacity:0,transition:{duration:.3}}},N={hidden:{y:"-100vh",opacity:0,transform:"scale(0) rotateX(-360deg)"},visible:{y:"-25vh",opacity:1,transition:{duration:.2,type:"spring",damping:15,stiffness:500}},exit:{y:"-100vh",opacity:0}},w={hidden:{opacity:0,scale:0},visible:{opacity:1,scale:1,transition:{duration:.2,ease:"easeIn"}},exit:{opacity:0,scale:0,transition:{duration:.15,ease:"easeOut"}}},S=function(e){var t=e.text;return Object(h.jsxs)("div",{className:"modal-text",children:[Object(h.jsx)("h3",{children:t}),Object(h.jsx)("h5",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique eos id. Porro, culpa? Officiis, placeat?"})]})},E=function(e){var t=e.onClick,i=e.label;return Object(h.jsx)(c.a.button,{className:"modal-button",type:"button",whileHover:{scale:1.1},whileTap:{scale:.95},onClick:t,children:i})},H=function(e){var t=e.handleClose,i=e.text,a=e.type;return Object(n.useEffect)((function(){return u("Modal",!0),function(){return u("Modal",!1)}}),[]),Object(h.jsxs)(v,{onClick:t,children:["dropIn"===a&&Object(h.jsxs)(c.a.div,{onClick:function(e){return e.stopPropagation()},className:"modal orange-gradient",variants:y,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)(S,{text:i}),Object(h.jsx)(E,{onClick:t,label:"Close"})]}),"flip"===a&&Object(h.jsxs)(c.a.div,{onClick:function(e){return e.stopPropagation()},className:"modal  orange-gradient",variants:C,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)(S,{text:i}),Object(h.jsx)(E,{onClick:t,label:"Close"})]}),"newspaper"===a&&Object(h.jsxs)(c.a.div,{onClick:function(e){return e.stopPropagation()},className:"modal orange-gradient",variants:k,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)(S,{text:i}),Object(h.jsx)(E,{onClick:t,label:"Close"})]}),"badSuspension"===a&&Object(h.jsxs)(c.a.div,{onClick:function(e){return e.stopPropagation()},className:"modal orange-gradient",variants:N,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)(S,{text:i}),Object(h.jsx)(E,{onClick:t,label:"Close"})]}),"gifYouUp"===a&&Object(h.jsxs)(c.a.div,{className:"modal",onClick:function(e){return e.stopPropagation()},style:{padding:0,height:"auto",width:"auto",display:"flex",justifyContent:"center"},variants:w,initial:"hidden",animate:"visible",exit:"exit",children:[Object(h.jsx)("h3",{style:{color:"#ffaa00",textTransform:"none",fontWeight:400,margin:"auto auto auto 0",fontFamily:"Montserrat",fontSize:"150%"},children:"Tap x2 to close"}),Object(h.jsx)(c.a.img,{alt:"",onDoubleClick:t,drag:!0,src:"https://i.giphy.com/media/hhgAbqQpm49vW/giphy.gif",style:{margin:"0 auto auto auto",maxHeight:"40vh",height:"40vh",width:"auto",objectFit:"cover",borderRadius:"6px",zIndex:1e3}})]})]})};var I=function(){return Object(h.jsxs)(c.a.h1,{className:"pink",children:["Framer Motion",Object(h.jsx)("span",{className:"light-blue",children:" \u269b\ufe0f React"})]})},B=function(e){var t=e.text;return Object(h.jsx)(c.a.h2,{className:"sub-header",children:t})},T=function(e){var t=e.children,i=e.label;return Object(h.jsx)(r.a,{initial:!1,exitBeforeEnter:!0,onExitComplete:function(){return d(i)},children:t})},F=function(e){var t=e.children,i=e.position;return Object(h.jsx)("div",{className:"container",children:Object(h.jsx)("ul",{className:i,children:Object(h.jsx)(r.a,{initial:!1,onExitComplete:function(){return d("Notifications container")},children:t})})})},L=function(){var e=s(),t=e.modalOpen,i=e.close,a=e.open,r=Object(n.useState)("dropIn"),l=Object(o.a)(r,2),d=l[0],u=l[1],j=Object(n.useState)([]),x=Object(o.a)(j,2),f=x[0],m=x[1],v=Object(n.useState)("Awesome job! \ud83d\ude80"),y=Object(o.a)(v,2),C=y[0],k=y[1],N=Object(n.useState)("success"),w=Object(o.a)(N,2),S=w[0],E=w[1],L=Object(n.useState)("bottom"),M=Object(o.a)(L,2),P=M[0],A=M[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)(c.a.main,{children:[Object(h.jsx)(I,{}),Object(h.jsx)(B,{text:"Animated modals"}),Object(h.jsxs)(c.a.select,{className:"input",onChange:function(e){return u(e.target.value)},children:[Object(h.jsx)("option",{value:"dropIn",children:"\ud83e\ude82 Drop in"}),Object(h.jsx)("option",{value:"flip",children:"\ud83d\udef9 Flip"}),Object(h.jsx)("option",{value:"newspaper",children:"\ud83d\uddde Newspaper"}),Object(h.jsx)("option",{value:"badSuspension",children:"\ud83d\udd29 Bad Suspension"}),Object(h.jsx)("option",{value:"gifYouUp",children:"\ud83c\udfb8 GIF you up"})]}),Object(h.jsx)(c.a.button,{whileHover:{scale:1.1},whileTap:{scale:.9},className:"save-button",onClick:a,children:"Launch modal"}),Object(h.jsx)("br",{}),Object(h.jsx)("br",{}),Object(h.jsx)(B,{text:"Notification stack"}),Object(h.jsx)(g,{placeHolder:"Add notification text = Awesome job! \ud83d\ude80",value:C,onChange:function(e){return k(e.target.value)}}),Object(h.jsx)("br",{}),Object(h.jsxs)(c.a.select,{className:"input",onChange:function(e){return E(e.target.value)},children:[Object(h.jsx)("option",{value:"success",children:"\u2705 Success"}),Object(h.jsx)("option",{value:"warning",children:"\u26a0\ufe0f Warning"}),Object(h.jsx)("option",{value:"error",children:"\ud83d\uded1 Error"}),Object(h.jsx)("option",{value:"light",children:"\u2600\ufe0f Light"}),Object(h.jsx)("option",{value:"",children:"\ud83c\udf19 Dark"})]}),Object(h.jsx)("br",{}),Object(h.jsxs)(c.a.select,{className:"input",onChange:function(e){return A(e.target.value)},children:[Object(h.jsx)("option",{value:"bottom",children:"\ud83d\udc47\ud83c\udffc Bottom"}),Object(h.jsx)("option",{value:"top",children:"\u261d\ud83c\udffc Top"})]}),Object(h.jsx)(c.a.button,{whileHover:{scale:1.1},whileTap:{scale:.95},className:"add-button",onClick:function(){return m(function(e,t,i){return p+=1,[].concat(Object(b.a)(e),[{id:p,text:t,style:i}])}(f,C,S))},children:"+ Stack em up"})]}),Object(h.jsx)(T,{children:t&&Object(h.jsx)(H,{modalOpen:t,text:d,type:d,handleClose:i})}),Object(h.jsx)(F,{position:P,children:f&&f.map((function(e){return Object(h.jsx)(O,{notification:e,notifications:f,setNotifications:m},e.id)}))})]})},M=document.getElementById("root");Object(a.render)(Object(h.jsx)(L,{}),M)}},[[29,1,2]]]);
//# sourceMappingURL=main.8cd4cc40.chunk.js.map