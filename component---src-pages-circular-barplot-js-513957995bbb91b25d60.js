(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));t("AK/e");var n=t("Wbzz"),l=t("q1tI"),r=t.n(l),c=t("NDdm"),i=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function o(e){var a=e.chartType,t=e.caption,l=e.link,o=i.includes(a);return r.a.createElement(r.a.Fragment,null,o?r.a.createElement(r.a.Fragment,null,r.a.createElement(n.Link,{to:l},r.a.createElement(c.a,{chartType:a})),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"sectionLogoContainer"},r.a.createElement(n.Link,{to:l},r.a.createElement(c.a,{chartType:a}),r.a.createElement("div",{className:"sectionLogoOverlay"},r.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),c=t.n(r),i=t("q1tI"),o=t.n(i),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.noGutters,u=e.as,d=void 0===u?"div":u,p=Object(l.a)(e,["bsPrefix","className","noGutters","as"]),f=Object(s.a)(t,"row"),h=f+"-cols",b=[];return m.forEach((function(e){var a,t=p[e];delete p[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&b.push(""+h+n+"-"+a)})),o.a.createElement(d,Object(n.a)({ref:a},p,{className:c.a.apply(void 0,[r,f,i&&"no-gutters"].concat(b))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("a4DA");var n=t("q1tI"),l=t.n(n),r=t("AkXV"),c=t("cWnB"),i=t("Wbzz"),o=t("qXiB"),s=t("jhdv");function m(e){var a=e.title,t=e.description,n=e.chartType,m=o.a.filter((function(e){return e.id===n}))[0];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"titleAndDescription"},l.a.createElement("h1",{className:"mainTitle"},a),l.a.createElement("hr",{className:"smallHr"}),l.a.createElement(r.a,null),l.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&l.a.createElement("div",{style:{marginTop:"10px"}},l.a.createElement(i.Link,{to:Object(s.a)(m.pythonURL)},l.a.createElement(c.a,{size:"sm"},m.label+" section")),l.a.createElement("a",{href:m.dataToVizURL},l.a.createElement(c.a,{size:"sm"},"About this chart")))))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),l=t.n(n),r=t("eynx"),c=t("JI6e"),i=t("Wbzz");function o(e){var a=e.imgName,t=e.caption,n=e.linkTo;return l.a.createElement(c.a,{xs:12,md:4},l.a.createElement(i.Link,{to:n},l.a.createElement(r.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),l=t("8o2o"),r=t("TSYQ"),c=t.n(r),i=t("q1tI"),o=t.n(i),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=o.a.forwardRef((function(e,a){var t=e.bsPrefix,r=e.className,i=e.as,u=void 0===i?"div":i,d=Object(l.a)(e,["bsPrefix","className","as"]),p=Object(s.a)(t,"col"),f=[],h=[];return m.forEach((function(e){var a,t,n,l=d[e];if(delete d[e],"object"==typeof l&&null!=l){var r=l.span;a=void 0===r||r,t=l.offset,n=l.order}else a=l;var c="xs"!==e?"-"+e:"";a&&f.push(!0===a?""+p+c:""+p+c+"-"+a),null!=n&&h.push("order"+c+"-"+n),null!=t&&h.push("offset"+c+"-"+t)})),f.length||f.push(p),o.a.createElement(u,Object(n.a)({},d,{ref:a,className:c.a.apply(void 0,[r].concat(f,h))}))}));u.displayName="Col",a.a=u},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("2mCb");var n=t("q1tI"),l=t.n(n),r=t("Wbzz"),c=t("9eSz"),i=t.n(c),o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function s(e){var a=e.imgName,t=e.caption;if(o.includes(a))return l.a.createElement("p",null,"TODO");var n=Object(r.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"chartImageContainer"},l.a.createElement(i.a,{alt:t,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),l.a.createElement("div",{className:"chartImageOverlay"},l.a.createElement("div",{className:"chartImageOverlayText"},l.a.createElement("p",null,t))))):null}},hwLn:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return b}));var n=t("q1tI"),l=t.n(n),r=t("4/Vk"),c=t("7oih"),i=t("7vrA"),o=t("6+GL"),s=t("3Z9Z"),m=t("59G+"),u=t("pJaR"),d=t("Hrqu"),p=t("gMBH"),f=t("Wbzz"),h=t("eynx");function b(){return l.a.createElement(c.a,{title:"Circular Barplot",isTocEnabled:!0,seoDescription:"A collection of circular barplot examples made with Python, coming with explanation and reproducible code"},l.a.createElement(r.a,{title:"Circular Barplot",description:"<p>A <a href='https://www.data-to-viz.com/graph/circularbarplot.html'>circular barplot</a> is pretty much the same as a <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>, but using polar coordinates instead of cartesian coordinates. They are a bit tricky to build with <code>Python</code> and less accurate than usual barplot, but they come with an eye-catching effect that sometimes make them worth it.</p>"}),l.a.createElement(i.a,null,l.a.createElement("h2",{id:"Matplotlib"},l.a.createElement(d.b,null),"Circular barplot with ",l.a.createElement("code",null,"Matplotlib")),l.a.createElement("p",null,l.a.createElement("code",null,"Matplotlib")," allows to build circular barplots thanks to the ",l.a.createElement("code",null,"polar")," Layout option of the ",l.a.createElement("code",null,"subplot()")," function. Examples below should guide you from the most simple version to some more customization."),l.a.createElement("p",null,"It starts by explaining how the polar coordinates of ",l.a.createElement("code",null,"matplotlib")," works, show how to use it to draw bars and finally goes into the trickiness of adding labels."),l.a.createElement(s.a,null,l.a.createElement(m.a,{imgName:"circular-barplot-basic1",caption:"Explanation of the polar coordinates with Matplotlib.",linkTo:"/circular-barplot-basic"}),l.a.createElement(m.a,{imgName:"circular-barplot-basic2",caption:"Most basic circular barplot with Python and Matplotlib.",linkTo:"/circular-barplot-basic"}),l.a.createElement(m.a,{imgName:"circular-barplot-basic4",caption:"Reorder items.",linkTo:"/circular-barplot-basic"})),l.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.a.createElement(f.Link,{to:"/circular-barplot-basic"},l.a.createElement(h.a,{imgName:"circular-barplot-basic3",caption:"Circular barplot with labels"})))),l.a.createElement(p.a,null),l.a.createElement("div",{className:"greySection",id:"related"},l.a.createElement(i.a,null,l.a.createElement(u.a,{chartFamily:"ranking"}))),l.a.createElement(p.a,null),l.a.createElement(i.a,null,l.a.createElement(o.a,null)),l.a.createElement(p.a,null))}},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),l=t.n(n),r=t("3Z9Z"),c=t("JI6e"),i=t("2Bqf"),o=t("qXiB"),s=t("jhdv"),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=o.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(s.a)(e.pythonURL);return l.a.createElement(c.a,{key:a,xs:4,md:2},l.a.createElement(i.a,{link:t,chartType:e.logo,caption:e.label}))}));return l.a.createElement("div",null,l.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==m?void 0:m[a]),l.a.createElement(r.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-circular-barplot-js-513957995bbb91b25d60.js.map