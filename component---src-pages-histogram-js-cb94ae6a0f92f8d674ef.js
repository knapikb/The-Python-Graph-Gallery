(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{"2mCb":function(e,a,t){},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));var n=t("q1tI"),r=t.n(n),o=t("eynx"),i=t("JI6e"),l=t("Wbzz");function s(e){var a=e.imgName,t=e.caption,n=e.linkTo;return r.a.createElement(i.a,{xs:12,md:4},r.a.createElement(l.Link,{to:n},r.a.createElement(o.a,{imgName:a,caption:t})))}},"7xSO":function(e,a,t){},K75G:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t("q1tI"),r=t.n(n),o=t("4/Vk"),i=t("7oih"),l=t("7vrA"),s=t("6+GL"),c=t("3Z9Z"),m=t("59G+"),d=t("pJaR"),u=t("Wbzz"),h=t("Hrqu"),p=t("JI6e"),g=t("ZJrt"),b=t("eynx"),f=t("ihcr"),E=t("gMBH");function v(){return r.a.createElement(i.a,{title:"Histogram",isTocEnabled:!0,seoDescription:"A collection of histogram examples made with Python, coming with explanation and reproducible code"},r.a.createElement(o.a,{title:"Histogram",description:"<p>Histograms allow to visualize the distribution of a numeric variable for one or several groups. The values are split in bins, each bin is represented as a bar.</p>"}),r.a.createElement(l.a,null,r.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),r.a.createElement(c.a,{className:"align-items-center"},r.a.createElement(p.a,{md:6},r.a.createElement("p",null,r.a.createElement("code",null,"Seaborn")," is definitely the best library to quickly build a histogram thanks to its ",r.a.createElement("code",null,"distplot()"),"."),r.a.createElement("p",null,"Note the importance of the ",r.a.createElement("code",null,"bins")," parameter: try several values to see which represents your data the best. 🔥")),r.a.createElement(p.a,{md:6},r.a.createElement(u.Link,{to:"/20-basic-histogram-seaborn"},r.a.createElement(b.a,{imgName:"20_Basic_Histogram_seaborn2",caption:"The most basic histogram one can make with python and seaborn"})))),r.a.createElement(g.a,null,"# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset('iris')\n\n# Plot the histogram thanks to the distplot function\nsns.distplot( a=df[\"sepal_length\"], hist=True, kde=False, rug=False )\n")),r.a.createElement(E.a,null),r.a.createElement(l.a,null,r.a.createElement("h2",{id:"Seaborn"},r.a.createElement(h.e,null),"Histogram charts with ",r.a.createElement("code",null,"Seaborn")),r.a.createElement("p",null,r.a.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. It is well adapted to build histogram thanks to its ",r.a.createElement("code",null,"distplot")," function. The following charts will guide you through its usage, going from a very"," ",r.a.createElement(u.Link,{to:""},"basic histogram")," to something much more"," ",r.a.createElement(u.Link,{to:""},"customized"),"."),r.a.createElement(c.a,null,r.a.createElement(m.a,{imgName:"20_Basic_Histogram_seaborn1",caption:"The most basic histogram with seaborn. It adds a density on top by default",linkTo:"/20-basic-histogram-seaborn"}),r.a.createElement(m.a,{imgName:"20_Basic_Histogram_seaborn2",caption:"Play with the bin parameter to control the number of bars",linkTo:"/20-basic-histogram-seaborn"}),r.a.createElement(m.a,{imgName:"21_Display_Rug_and_distribution_on_hist1",caption:"Remove the density chart on top of the seaborn histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),r.a.createElement(m.a,{imgName:"21_Display_Rug_and_distribution_on_hist2",caption:"Add rug on top of the histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),r.a.createElement(m.a,{imgName:"21_Display_Rug_and_distribution_on_hist3",caption:"Customize the rug: color, size and more",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),r.a.createElement(m.a,{imgName:"21_Display_Rug_and_distribution_on_hist4",caption:"Customize the appearance of the density chart displayed on top of the histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),r.a.createElement(m.a,{imgName:"24_Histogram_with_boxplot_on_top",caption:"How to split the chart window to display a boxplot on top of the histogram",linkTo:"/24-histogram-with-a-boxplot-on-top-seaborn"}),r.a.createElement(m.a,{imgName:"25_Histogram_of_several_variables1",caption:"Compare the distribution of several groups on the same chart",linkTo:"/25-histogram-with-several-variables-seaborn"}),r.a.createElement(m.a,{imgName:"25_Histogram_of_several_variables2",caption:"Use small multiple to compare the distribution of several groups",linkTo:"/25-histogram-with-several-variables-seaborn"}),r.a.createElement(m.a,{imgName:"82_seaborn_jointplot1",caption:"Histogram can be added around a scatterplot to show each variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),r.a.createElement(m.a,{imgName:"82_seaborn_jointplot6",caption:"Histogram can be added around a 2d density chart to show x and y variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),r.a.createElement(m.a,{imgName:"density-mirror-histogram",caption:"Mirror density chart to compare the distribution of 2 variables",linkTo:"/density-mirror"}))),r.a.createElement(E.a,null),r.a.createElement("div",{className:"greySection"},r.a.createElement(l.a,null,r.a.createElement(f.a,{functionName:"violin"}))),r.a.createElement(E.a,null),r.a.createElement("div",{className:"greySection",id:"related"},r.a.createElement(l.a,null,r.a.createElement(d.a,{chartFamily:"distribution"}))),r.a.createElement(E.a,null),r.a.createElement(l.a,null,r.a.createElement(s.a,null)),r.a.createElement(E.a,null))}},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));t("2mCb");var n=t("q1tI"),r=t.n(n),o=t("Wbzz"),i=t("9eSz"),l=t.n(i),s=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){var a=e.imgName,t=e.caption;if(s.includes(a))return r.a.createElement("p",null,"TODO");var n=Object(o.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(l.a,{alt:t,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}},hlKo:function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),o=t("TSYQ"),i=t.n(o),l=t("q1tI"),s=t.n(l),c=t("cWnB"),m=function(){},d=s.a.forwardRef((function(e,a){var t=e.children,o=e.name,d=e.className,u=e.checked,h=e.type,p=e.onChange,g=e.value,b=e.disabled,f=e.inputRef,E=Object(r.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),v=Object(l.useState)(!1),y=v[0],_=v[1],k=Object(l.useCallback)((function(e){"INPUT"===e.target.tagName&&_(!0)}),[]),N=Object(l.useCallback)((function(e){"INPUT"===e.target.tagName&&_(!1)}),[]);return s.a.createElement(c.a,Object(n.a)({},E,{ref:a,className:i()(d,y&&"focus",b&&"disabled"),type:void 0,active:!!u,as:"label"}),s.a.createElement("input",{name:o,type:h,value:g,ref:f,autoComplete:"off",checked:!!u,disabled:!!b,onFocus:k,onBlur:N,onChange:p||m}),t)}));d.displayName="ToggleButton",a.a=d},ihcr:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));t("Wbzz");var n=t("q1tI"),r=t.n(n),o=t("hlKo"),i=t("k1TG"),l=t("8o2o"),s=t("TSYQ"),c=t.n(s),m=t("vUet"),d=r.a.forwardRef((function(e,a){var t=e.bsPrefix,n=e.size,o=e.toggle,s=e.vertical,d=e.className,u=e.as,h=void 0===u?"div":u,p=Object(l.a)(e,["bsPrefix","size","toggle","vertical","className","as"]),g=Object(m.a)(t,"btn-group"),b=g;return s&&(b=g+"-vertical"),r.a.createElement(h,Object(i.a)({},p,{ref:a,className:c()(d,b,n&&g+"-"+n,o&&g+"-toggle")}))}));d.displayName="ButtonGroup",d.defaultProps={vertical:!1,toggle:!1,role:"group"};var u=d,h={kdeplot:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.kdeplot.html",basicUsage:"",parameters:[{name:"fill",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"control the color",type:"boolean",relatedChart:"70_deffffed"}]},violin:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.violinplot.html",basicUsage:"",parameters:[{name:"width",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"controls the color",type:"string",relatedChart:"70_deffffed"}]}};t("7xSO");function p(e){var a,t=e.functionName,n=h[t],i=r.a.useState(n.parameters[0].name),l=i[0],s=i[1],c=n.parameters.filter((function(e){return e.name===l}))[0],m=n.parameters.map((function(e,a){return r.a.createElement(o.a,{type:"radio",active:!0,key:a,className:"functionButton",variant:"secondary",size:"sm",value:e.name,checked:l===e.name,onChange:function(e){return s(e.currentTarget.value)}},e.name)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",{id:(a=t+"() details","string"!=typeof a?"":a.charAt(0).toUpperCase()+a.slice(1))},"🔎 ",r.a.createElement("code",null,t)," function parameters",r.a.createElement("a",{style:{marginLeft:"15px",fontSize:"14px"},href:n.docUrl},"→ see full doc")),r.a.createElement(u,{toggle:!0},m),r.a.createElement("div",null,r.a.createElement("code",null,"string"),r.a.createElement("span",null,"→ ",c.description)),r.a.createElement("br",null),r.a.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-histogram-js-cb94ae6a0f92f8d674ef.js.map