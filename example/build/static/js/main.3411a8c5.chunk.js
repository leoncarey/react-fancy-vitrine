(this["webpackJsonpreact-fancy-vitrine-example"]=this["webpackJsonpreact-fancy-vitrine-example"]||[]).push([[0],{1:function(e,t,n){},10:function(e,t,n){"use strict";n.r(t);n(1);var o=n(0),r=n.n(o),i=n(3),a=n.n(i),c=n(4);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var u={position:"absolute",top:"85%",fontSize:0,zIndex:200,letterSpacing:-5e3,background:"center no-repeat",backgroundColor:"#f1f1f1",backgroundSize:20,width:40,height:40,padding:10,boxShadow:"0px 1px 5px #000",borderRadius:"50%",border:0,display:"block",cursor:"pointer",transition:"all .3s ease"},d={backgroundColor:"#ddd"},s={left:10,backgroundImage:"url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5Z29uIHBvaW50cz0iMzAuOCw0NS43IDkuMSwyNCAzMC44LDIuMyAzMi4yLDMuNyAxMS45LDI0IDMyLjIsNDQuMyAgIi8+PC9nPjwvc3ZnPg==)"},g={right:10,backgroundImage:"url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9IkxheWVyXzEiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ4IDQ4OyIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNDggNDgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwb2x5Z29uIHBvaW50cz0iMTEuOCw0NS43IDEwLjQsNDQuMyAzMC44LDI0IDEwLjQsMy43IDExLjgsMi4zIDMzLjUsMjQgICIvPjwvZz48L3N2Zz4=)"},f=function(e){var t=e.handleClick,n=e.buttonDirection,i=e.buttonPosition,a=e.buttonBgColor,c=Object(o.useState)(!1),f=c[0],b=c[1],m="left"===n?s:g;!function(e,t,n){(void 0===e||["default","default-outer","center","center-outer"].includes(e))&&(!t||"default-outer"!==e&&"center-outer"!==e||(n[t]-=25),!t||"center"!==e&&"center-outer"!==e||(n.top="40%"))}(i,n,m);var h=l({},u,m);a&&a.default&&(h.backgroundColor=a.default),f&&(a&&a.hover&&(d.backgroundColor=a.hover),h=l({},h,d));var p=function(){b(!f)};return r.a.createElement("button",{style:h,onMouseEnter:p,onMouseOut:p,onClick:t})};f.defaultProps={buttonDirection:"left"};var b={position:"absolute",top:0,left:0,zIndex:99,transition:"opacity .2s ease",overflow:"hidden",boxSizing:"border-box",border:"1px solid #000"},m={backgroundRepeat:"no-repeat",position:"absolute",top:0,left:0,zIndex:1,boxSizing:"border-box"},h=function(e){var t=e.image,n=e.mouseX,o=e.mouseY,i=e.setRef,a=e.imageMainSize,c=e.visible;return r.a.createElement("div",{ref:i,style:l({},b,{width:150,height:150,transform:"translate("+n+"px, "+o+"px)",opacity:c?1:0})},r.a.createElement("div",{style:l({},m,{width:3*a.width,height:3*a.height,backgroundImage:"url("+t+")",transform:"translate("+-n*(3/1.55)+"px, "+-2.4*o+"px)"})}))},p={transition:"all .5s ease",position:"relative",height:500,marginBottom:5},I={width:"100%",height:"100%",position:"absolute",top:0,left:0,backgroundColor:"rgba(0, 0, 0, .5)",transition:"opacity .5s ease",zIndex:89},v={width:"100%",height:500,marginBottom:8,backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},y={default:function(){return{}},fade:function(e){return e?{opacity:0}:{opacity:1}}},x=function(e){var t=e.selectedImage,n=e.transitionImage,i=e.effect,a=Object(o.useState)(!1),c=a[0],u=a[1],d=p;i&&(d=l({},d,y[i](n)));var s=Object(o.createRef)(),g=Object(o.createRef)(),f=Object(o.useState)({width:0,height:0}),b=f[0],m=f[1],x=Object(o.useState)(0),S=x[0],j=x[1],w=Object(o.useState)(0),z=w[0],k=w[1];Object(o.useEffect)((function(){m({width:s.current.offsetWidth,height:s.current.offsetHeight})}),[]);return r.a.createElement("div",{ref:s,style:l({},d,{zIndex:c?999:99}),onMouseMove:function(e){var t=e.clientX,n=e.clientY,o=s.current.getBoundingClientRect(),r=o.left,i=o.top,a=t-r-g.current.offsetWidth/3,c=n-i-g.current.offsetHeight/3,l=a>-g.current.offsetWidth/10&&a<b.width-g.current.offsetWidth/2&&c>-g.current.offsetHeight/10&&c<b.height-g.current.offsetHeight/2;u(!!l),j(a),k(c)}},r.a.createElement("div",{style:l({},I,{opacity:c?1:0})}),r.a.createElement(h,{visible:c,setRef:g,mouseX:S,mouseY:z,image:t,imageMainSize:b}),r.a.createElement("div",{style:l({},v,{backgroundImage:"url("+t+")"})}))},S={position:"relative",zIndex:100,boxSizing:"border-box"},j={display:"flex",maxWidth:"100%",overflowX:"hidden"},w={border:"3px solid"},z={marginRight:10,height:150,minWidth:150,border:"3px solid #ffa70000",backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundSize:"cover"},k=function(e){var t=e.images,n=e.selectedImageIndex,i=e.borderColorSelected,a=e.carouselItemsRef,c=e.handleSelectedImageChange,u=e.setSelectedImageIndex,d=e.setSelectedImage;Object(o.useEffect)((function(){t&&t[0]&&(a.current=a.current.slice(0,t.length),u(0),d(t[0]))}),[t]);return r.a.createElement("div",{style:S},r.a.createElement("div",{style:j},t&&t.map((function(e,o){var u=l({},z,{backgroundImage:"url("+e.url+")"});return n===o&&(u=l({},u,w,{borderColor:i})),t.length-1===o&&(u=l({},u,{marginRight:0})),r.a.createElement("div",{onClick:function(){return function(e){c(e)}(o)},style:u,key:e.id&&o,ref:function(e){a.current[o]=e}})}))))},E={margin:"-60px 0 20px",position:"relative",overflow:"hidden",padding:"80px 80px 0",height:"fit-content"},D=function(e){var t=e.images,n=e.containerWidth,i=e.borderColorSelected,a=e.buttonPosition,c=e.buttonBgColor,u=e.className,d=e.effect,s=e.timingEffect,g=e.hasButtons,b=Object(o.useState)(0),m=b[0],h=b[1],p=Object(o.useState)(),I=p[0],v=p[1],y=Object(o.useState)(!1),S=y[0],j=y[1],w=Object(o.useRef)([]),z=function(e){var n;t&&t.length>0&&(v(t[e]),h(e),null!==w&&void 0!==w&&w.current[e]&&(null===w||void 0===w||null===(n=w.current[e])||void 0===n||n.scrollIntoView({inline:"center",behavior:"smooth",block:"nearest"}),console.log(null===w||void 0===w?void 0:w.current[e])))},D=function(e){"default"!==d?(j(!0),setTimeout((function(){z(e),j(!1)}),s)):z(e)};return r.a.createElement("div",{style:l({},E,{width:n}),className:u},r.a.createElement(x,{effect:d,transitionImage:S,selectedImage:null===I||void 0===I?void 0:I.url}),r.a.createElement(k,{images:t,selectedImageIndex:m,borderColorSelected:i,handleSelectedImageChange:D,carouselItemsRef:w,setSelectedImage:v,setSelectedImageIndex:h}),g&&r.a.createElement(f,{buttonDirection:"left",buttonBgColor:c,buttonPosition:a,handleClick:function(){if(t&&t.length>0){var e=m-1;e<0&&(e=t.length-1),D(e)}}}),g&&r.a.createElement(f,{buttonDirection:"right",buttonBgColor:c,buttonPosition:a,handleClick:function(){if(t&&t.length>0){var e=m+1;e>=t.length&&(e=0),D(e)}}}))};D.defaultProps={containerWidth:600,borderColorSelected:"#732400",buttonPosition:"bottom",timingEffect:300,effect:"default",hasButtons:!0};var M=D;function C(){var e=Object(o.useState)(),t=Object(c.a)(e,2),n=t[0],i=t[1];return Object(o.useEffect)((function(){i(Array.from(Array(10).keys()).map((function(e){return{id:e,url:"https://picsum.photos/1000?random=".concat(e)}})))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"header-presentation"},"React Fancy Vitrine"),r.a.createElement(M,{images:n,containerWidth:600,effect:"fade",timingEffect:300,hasButtons:!0,buttonPosition:"default",borderColorSelected:"#f4442e",buttonBgColor:{default:"#f1f1f1",hover:"#ddd"}}))}a.a.render(r.a.createElement(C,null),document.getElementById("root"))},5:function(e,t,n){e.exports=n(10)}},[[5,1,2]]]);
//# sourceMappingURL=main.3411a8c5.chunk.js.map