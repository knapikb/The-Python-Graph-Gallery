(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{"2mCb":function(e,t,a){},"59G+":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var l=a("q1tI"),n=a.n(l),o=a("eynx"),i=a("JI6e"),r=a("Wbzz");function c(e){var t=e.imgName,a=e.caption,l=e.linkTo;return n.a.createElement(i.a,{xs:12,md:4},n.a.createElement(r.Link,{to:l},n.a.createElement(o.a,{imgName:t,caption:a})))}},eynx:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));a("2mCb");var l=a("q1tI"),n=a.n(l),o=a("Wbzz"),i=a("9eSz"),r=a.n(i),c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){var t=e.imgName,a=e.caption;if(c.includes(t))return n.a.createElement("p",null,"TODO");var l=Object(o.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return l?n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"chartImageContainer"},n.a.createElement(r.a,{alt:a,fluid:l.node.childImageSharp.fluid,className:"chartImageImg"}),n.a.createElement("div",{className:"chartImageOverlay"},n.a.createElement("div",{className:"chartImageOverlayText"},n.a.createElement("p",null,a))))):null}},hlKo:function(e,t,a){"use strict";var l=a("k1TG"),n=a("8o2o"),o=a("TSYQ"),i=a.n(o),r=a("q1tI"),c=a.n(r),m=a("cWnB"),s=function(){},u=c.a.forwardRef((function(e,t){var a=e.children,o=e.name,u=e.className,p=e.checked,h=e.type,d=e.onChange,b=e.value,E=e.disabled,g=e.inputRef,f=Object(n.a)(e,["children","name","className","checked","type","onChange","value","disabled","inputRef"]),y=Object(r.useState)(!1),k=y[0],w=y[1],v=Object(r.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!0)}),[]),_=Object(r.useCallback)((function(e){"INPUT"===e.target.tagName&&w(!1)}),[]);return c.a.createElement(m.a,Object(l.a)({},f,{ref:t,className:i()(u,k&&"focus",E&&"disabled"),type:void 0,active:!!p,as:"label"}),c.a.createElement("input",{name:o,type:h,value:b,ref:g,autoComplete:"off",checked:!!p,disabled:!!E,onFocus:v,onBlur:_,onChange:d||s}),a)}));u.displayName="ToggleButton",t.a=u},qR5O:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return w}));var l=a("q1tI"),n=a.n(l),o=a("4/Vk"),i=a("7oih"),r=a("7vrA"),c=a("6+GL"),m=a("3Z9Z"),s=a("59G+"),u=a("pJaR"),p=a("Wbzz"),h=a("Hrqu"),d=a("hlKo"),b=a("JI6e"),E=a("ZJrt"),g=a("eynx"),f=a("gMBH"),y=a("cWnB"),k=["seaborn-darkgrid","seaborn-notebook","classic","seaborn-ticks","grayscale","bmh","seaborn-talk","dark_background","ggplot","fivethirtyeight","_classic_test","seaborn-colorblind","seaborn-deep","seaborn-whitegrid","seaborn-bright","seaborn-poster","seaborn-muted","seaborn-paper","seaborn-white","seaborn-pastel","seaborn-dark","seaborn","seaborn-dark-palette"];function w(){var e=n.a.useState(k[0]),t=e[0],a=e[1];k.map((function(e,l){return n.a.createElement(d.a,{type:"radio",active:!0,key:l,className:"functionButton",variant:"secondary",size:"sm",value:e,checked:t===e,onChange:function(e){return a(e.currentTarget.value)}},e)}));return n.a.createElement(i.a,{title:"Matplotlib",isTocEnabled:!0,seoDescription:"A collection of charts, tips and tricks on the Matplotlib Python library."},n.a.createElement(o.a,{title:"Matplotlib",description:"<p><code>Matplotlib</code> is the most famous library for data visualization with <code>python</code>. It allows to create literally every type of chart with a great level of customization. This page provides some general tips that can be applied on any kind of chart made with <code>matplotlib</code> like customizing titles or colors. If you're looking at creating a specific chart type, visit <a href='https://www.python-graph-gallery.com'>the gallery</a> instead.</p>"}),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.a.createElement(m.a,{className:"align-items-center"},n.a.createElement(b.a,{md:6},n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," is the most famous python data visualization library. It is widely used and most of other viz libraries (like ",n.a.createElement("code",null,"seaborn"),") are actually built on top of it."),n.a.createElement("p",null,"Once installed, matplotlib must be imported, usually using ",n.a.createElement("code",null,"import matplotlib.pyplot as plt"),". You can then use use the functions available in the ",n.a.createElement("code",null,"plt")," object.")),n.a.createElement(b.a,{md:6},n.a.createElement(p.Link,{to:"/240-basic-area-chart"},n.a.createElement(g.a,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib"})))),n.a.createElement(E.a,null,"# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny=[1,4,6,8,4]\n\n# Area plot\nplt.fill_between(x, y)\nplt.show()\n")),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Lexicon"},n.a.createElement(h.b,null),"Basic vocabulary"),n.a.createElement("p",null,"The figure below describes the anatomy of a ",n.a.createElement("code",null,"matplotlib")," charts. It names all the main components, names that you need to know to understand the documentation properly."),n.a.createElement("p",null,"⚠️ ",n.a.createElement("u",null,"Disclaimer"),": this figure comes from the very complete ",n.a.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},"matplotlib documentation"),". Have a look at it for a thorough explanation on how this library works."),n.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.a.createElement(g.a,{imgName:"matplotlib_vocabulary",caption:"Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly"})),n.a.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},n.a.createElement(y.a,{size:"sm"},"Matplotlib doc"))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"APIs"},n.a.createElement(h.b,null),"Two distinct APIs"),n.a.createElement("p",null,"There are 2 main ways to build a chart with matplotlib: the ",n.a.createElement("code",null,"pyplot API")," and the ",n.a.createElement("code",null,"object-oriented API"),"."),n.a.createElement("p",null,"➡️ ",n.a.createElement("code",null,"pyplot API")),n.a.createElement("p",null,"Pyplot is a collection of functions, each function applying a change to a figure. For instance, ",n.a.createElement("code",null,"plt.barh()")," will build a barplot and ",n.a.createElement("code",null,"plt.title()")," will add a title to it."),n.a.createElement(E.a,null,"# import libraries\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create a data frame\ndf = pd.DataFrame ({'Group':  ['A', 'B', 'C', 'D', 'E'], 'Value': [1,5,4,3,9]})\n\n# Create horizontal bars\nplt.barh(y=df.Group, width=df.Value);\n\n# Add title\nplt.title('A simple barplot');\n"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"➡️ ",n.a.createElement("code",null,"object oriented API")),n.a.createElement("p",null,"The object oriented API usually starts by initializing one ",n.a.createElement("code",null,"Figure")," object and one or more ",n.a.createElement("code",null,"Axes")," object using the ",n.a.createElement("code",null,"subplot()")," function. Then the methods of those objects will be used to apply changes to the chart."),n.a.createElement(E.a,null,"# import libraries\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create a data frame\ndf = pd.DataFrame ({'Group':  ['A', 'B', 'C', 'D', 'E'], 'Value': [1,5,4,3,9]})\n\n# Initialize a Figure and an Axes\nfig, ax = plt.subplots()\n\n# Fig size\nfig.set_size_inches(9,9)\n\n# Create horizontal bars\nax.barh(y=df.Group, width=df.Value);\n\n# Add title\nax.set_title('A simple barplot');\n"),n.a.createElement("br",null),n.a.createElement("br",null),n.a.createElement("p",null,"See how the syntax slightly differs between both options? (",n.a.createElement("code",null,"plt.title")," versus ",n.a.createElement("code",null,"ax.set_title()"),". This is pretty confusing and I advise to have a look to the ",n.a.createElement("a",{href:"https://matplotlib.org/stable/api/index.html#usage-patterns"},"official documentation")," for a more thorough explanation. In the gallery, both APIs are used.")),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Title"},n.a.createElement(h.b,null),"Customizing titles"),n.a.createElement("p",null,"The title is a key part of a good chart. It has to ",n.a.createElement("u",null,"summarize")," its key message in a few words. Always avoid to simply repeat what is displayed on each axis. Try to provide some more insight allowing to understand the main result instead."),n.a.createElement("p",null,"The ",n.a.createElement(p.Link,{to:"/190-custom-matplotlib-title"},"post #190")," goes in depth on how to customize the ",n.a.createElement("code",null,"matplotlib"),"title. All the main types of change are descried: changing its color, adding a subtitle, using math formulas and so on. Give it a go!"),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"190_Custom_title6",caption:"Python chart with subtitle and custom color",linkTo:"/190-custom-matplotlib-title"}),n.a.createElement(s.a,{imgName:"190_Custom_title7",caption:"Add a math formula in title with Matplotlib",linkTo:"/190-custom-matplotlib-title"}),n.a.createElement(s.a,{imgName:"190_Custom_title5",caption:"Control the height of the matplotlib title",linkTo:"/190-custom-matplotlib-title"}))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Annotation"},n.a.createElement(h.b,null),"Annotation"),n.a.createElement("p",null,"Annotation is a key part of a great visualization. It transforms a simple chart in a whole piece of story telling. Before you share your graph with anyone, make sure the key insight are highlighted with labels, shapes or color."),n.a.createElement("p",null,"All those kind of annotation are built thanks to various matplotlib functions like ",n.a.createElement("code",null,"annotate()")," or ",n.a.createElement("code",null,"add_patch()"),". The blogposts showcased below should get you started with it."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"193_annotate1",caption:"Add a label with a segment",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate2",caption:"Add a square to highlight an area",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate3",caption:"Add a circle to highlight an area",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate4",caption:"Add a segment",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate5",caption:"Add vertical and horizontal ablines",linkTo:"/193-annotate-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"193_annotate6",caption:"Annotate with an equation",linkTo:"/193-annotate-matplotlib-chart"}))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Margin"},n.a.createElement(h.b,null),"Add margin around a ",n.a.createElement("code",null,"matplotlib")," chart"),n.a.createElement("p",null,"It is a common struggle to deal with the margins around the chart. Fortunately this is pretty straightforward thanks to the ",n.a.createElement("code",null,"subplots_adjust()")," function as explained in the examples below."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"192_increase_margin2",caption:"Increase the bottom margin of a matplotlib chart.",linkTo:"/192-about-matplotlib-margins"}),n.a.createElement(s.a,{imgName:"192_increase_margin4",caption:"Increase the top margin to fit a title",linkTo:"/192-about-matplotlib-margins"}))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Subplot"},n.a.createElement(h.b,null),"Split the figure in subplots"),n.a.createElement("p",null,"It can be really useful to split your graphic window in several parts, in order to display several charts in the same time. The ",n.a.createElement("code",null,"subplot()")," function of ",n.a.createElement("code",null,"matplotlib")," allows to do it quickly with a great level of customization."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"194_matplotlib_subplot4",caption:"Split the figure in 4 charts of same size.",linkTo:"/194-split-the-graphic-window-with-subplot"}),n.a.createElement(s.a,{imgName:"194_matplotlib_subplot6",caption:"Split the figure with a custom layout",linkTo:"/192-about-matplotlib-margins"}),n.a.createElement(s.a,{imgName:"194_matplotlib_subplot9",caption:"Manage chart size on subplots",linkTo:"/192-about-matplotlib-margins"}))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Theme"},n.a.createElement(h.b,null),"Available style sheets"),n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," comes with a set of 26 pre-built themes to style your chart easily. ",n.a.createElement(p.Link,{to:"/199-matplotlib-style-sheets"},"This post")," is dedicated to this feature, explaining how to use ",n.a.createElement("code",null,"plt.style.use()")," to pick a theme up."),n.a.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.a.createElement(p.Link,{to:"/199-matplotlib-style-sheets"},n.a.createElement(g.a,{imgName:"199-matplotlib-style-sheets-538-full",caption:"Customize a matplotlib chart with a preset theme"})))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement("h2",{id:"Axis"},n.a.createElement(h.b,null),"Customizing axis"),n.a.createElement("p",null,n.a.createElement("code",null,"Matplotlib")," allows every kind of axis configuration. It is mainly done thanks to the ",n.a.createElement("code",null,"tick_params()"),", ",n.a.createElement("code",null,"xticks()")," and ",n.a.createElement("code",null,"xlabels()")," functions. The ",n.a.createElement(p.Link,{to:"/191-custom-axis-on-matplotlib-chart"},"post #191")," will guide you through all the possibilities."),n.a.createElement(m.a,null,n.a.createElement(s.a,{imgName:"191_Custom_axis1",caption:"Change the axis title and its appearance",linkTo:"/191-custom-axis-on-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"191_Custom_axis2",caption:"Control axis labels and ticks look",linkTo:"/191-custom-axis-on-matplotlib-chart"}),n.a.createElement(s.a,{imgName:"191_Custom_axis6",caption:"Control axis limit with the xlim() function",linkTo:"/191-custom-axis-on-matplotlib-chart"}))),n.a.createElement(f.a,null),n.a.createElement("div",{className:"greySection",id:"related"},n.a.createElement(r.a,null,n.a.createElement(u.a,{chartFamily:"evolution"}))),n.a.createElement(f.a,null),n.a.createElement(r.a,null,n.a.createElement(c.a,null)),n.a.createElement(f.a,null))}}}]);
//# sourceMappingURL=component---src-pages-matplotlib-js-4f686668e92ccba80957.js.map