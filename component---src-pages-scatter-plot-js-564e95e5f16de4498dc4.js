"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[7993],{9935:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(5444),o=a(1496),r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){var t=e.imgName,a=e.caption;if(r.includes(t))return l.createElement("p",null,"TODO");var i=(0,n.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(t)}));return i?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.Z,{alt:a,fluid:i.node.childImageSharp.fluid,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},7834:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(9935),o=a(7408),r=a(5444);function i(e){var t=e.imgName,a=e.caption,i=e.linkTo;return l.createElement(o.Z,{xs:12,md:4},l.createElement(r.Link,{to:i},l.createElement(n.Z,{imgName:t,caption:a})))}},679:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var l=a(7294),n=a(1006),o=a(3203),r=a(6187),i=a(7567),c=a(994),m=a(7834),s=a(9869),p=a(5444),d=a(3727),h=a(7408),u=a(6594),g=a(3026),b=a(9935),E=a(458);function w(){return l.createElement(o.Z,{title:"Scatterplot",isTocEnabled:!0,seoDescription:"A collection of scatterplot examples made with Python, coming with explanation and reproducible code"},l.createElement(n.Z,{title:"Scatterplot",description:"<p>A <a href='https://www.data-to-viz.com/graph/scatter.html'>scatter plot</a> displays the relationship between 2 numeric variables. Each data point is represented as a circle. Several tools allow to build one in python, this section provides code samples for <code>Seaborn</code>, <code>Matplotlib</code> and <code>Plotly</code> for interactive versions.  Note that this <a target='_blank' href='https://datacamp.pxf.io/YgNDbR'>online course</a> has a chapter dedicated to scatterplots.</p>"}),l.createElement(r.Z,null,l.createElement("h2",{id:"Quick start"},"⏱ Quick start (Seaborn)"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(h.Z,{md:6},l.createElement("p",null,"The ",l.createElement("code",null,"regplot()")," function of the ",l.createElement("code",null,"Seaborn")," library is definitely the best way to build a scatterplot in minutes. 🔥"),l.createElement("p",null,"Simply pass a numeric column of a data frame to both the ",l.createElement("code",null,"x")," and ",l.createElement("code",null,"y")," variable and the function will handle the rest.")),l.createElement(h.Z,{md:6},l.createElement(p.Link,{to:"/40-basic-scatterplot-seaborn"},l.createElement(b.Z,{imgName:"40_Basic_Scatterplot_seaborn",caption:"Basic boxplot with Python and Seaborn from various data input formats."})))),l.createElement(g.Z,null,'# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\n# use the function regplot to make a scatterplot\nsns.regplot(x=df["sepal_length"], y=df["sepal_width"])\n'),l.createElement("br",null)),l.createElement(E.Z,null),l.createElement("div",{className:"greySection"},l.createElement(r.Z,null,l.createElement("h2",{id:"Common caveats"},"⚠️ Scatterplot and overplotting"),l.createElement("p",null,"The main danger with scatterplots is ",l.createElement("a",{href:"https://www.data-to-viz.com/caveat/overplotting.html"},"overplotting"),". When the sample size gets big, circles tend to overlap, making the figure unreadable."),l.createElement("p",null,"Several workarounds exist to fix the issue, like using opacity or switching to another chart type:"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"134_Fighting_overplotting1",caption:"Basic boxplot. You can quickly read the median, quartiles and outliers of each group.",linkTo:"/134-how-to-avoid-overplotting-with-python"}),l.createElement(m.Z,{imgName:"134_Fighting_overplotting2",caption:"If you add individual points with jitter, a bimodal distribution appears for group B",linkTo:"/134-how-to-avoid-overplotting-with-python"}),l.createElement(m.Z,{imgName:"134_Fighting_overplotting10",caption:"If you have a very large dataset, the violin plot is a better alternative than jittering",linkTo:"/134-how-to-avoid-overplotting-with-python"})),l.createElement(p.Link,{to:"/134-how-to-avoid-overplotting-with-python"},l.createElement(u.Z,{size:"sm"},"Code and more")))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Seaborn"},l.createElement(d._I,null),"Scatterplots with ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,l.createElement(p.Link,{to:"/seaborn"},"Seaborn")," is a python library allowing to make better charts easily. The ",l.createElement("code",null,"regplot()")," function should get you started in minutes. The ",l.createElement(p.Link,{to:"/40-basic-scatterplot-seaborn"},"first example")," below explains how to build the most basic scatterplot with python. Then, several types of customization are described: adding a ",l.createElement(p.Link,{to:"/42-custom-linear-regression-fit-seaborn"},"regression")," line, tweaking ",l.createElement(p.Link,{to:"/41-control-marker-features"},"markers"),"and ",l.createElement(p.Link,{to:"/44-control-axis-limits-of-plot-seaborn"},"axis"),", adding ",l.createElement(p.Link,{to:"/46-add-text-annotation-on-scatterplot"},"labels")," and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"40_Basic_Scatterplot_seaborn",caption:"Most basic scatterplot with seaborn",linkTo:"/40-basic-scatterplot-seaborn"}),l.createElement(m.Z,{imgName:"42_Scatterplot_custom_linear_fit_seaborn",caption:"Add a regression thanks to the fit_reg parameter",linkTo:"/42-custom-linear-regression-fit-seaborn"}),l.createElement(m.Z,{imgName:"41_Scatterplot_change_marker_shape_seaborn",caption:"Customize markers: color, size, opacity, type and more",linkTo:"/41-control-marker-features"}),l.createElement(m.Z,{imgName:"43_seaborn_map_color_to_a_avariable3",caption:"Color dots according to a group",linkTo:"/43-use-categorical-variable-to-color-scatterplot-seaborn"}),l.createElement(m.Z,{imgName:"44_seaborn_control_axis_limits",caption:"Control X and Y axes limits",linkTo:"/44-control-axis-limits-of-plot-seaborn"}),l.createElement(m.Z,{imgName:"45_set_color_of_each_point_in_scatterplot_seaborn",caption:"Control the marker's color according to their coordinates",linkTo:"/45-control-color-of-each-marker-seaborn"}),l.createElement(m.Z,{imgName:"46_add_text_annotation_scatterplot_seaborn3",caption:"Add labels manually on your scatterplot",linkTo:"/46-add-text-annotation-on-scatterplot"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Related to Seaborn "},"💡 Other charts involving scatterplots and ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,"If you are interested in scatterplots, some other chart could be useful to you."),l.createElement("p",null,"A scatterplot with ",l.createElement(p.Link,{to:"/82-marginal-plot-with-seaborn"},"marginal distribution")," allows to check the distribution of both the ",l.createElement("code",null,"x")," and ",l.createElement("code",null,"y")," variables. A ",l.createElement(p.Link,{to:"/111-custom-correlogram"},"correlogram")," allows to check the relationship between each pair of numeric variables in a dataset."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"82_seaborn_jointplot4",caption:"Scatterplot with marginal distributions",linkTo:"/82-marginal-plot-with-seaborn"}),l.createElement(m.Z,{imgName:"111_Correlogram_custom4",caption:"Build a correlogram with the pairplot function",linkTo:"/111-custom-correlogram"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Quick start"},"⏱ Quick start (Matplotlib)"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(h.Z,{md:6},l.createElement("p",null,l.createElement(p.Link,{to:"/matplotlib"},"Matplotlib")," also requires only a few lines of code to draw a scatterplot thanks to its ",l.createElement("code",null,"plot()")," function. The resulting chart is not as good-looking, but the function probably offers more flexibility in term of customization.")),l.createElement(h.Z,{md:6},l.createElement(p.Link,{to:"/130_Basic_Matplotlib_Scatterplot"},l.createElement(b.Z,{imgName:"130_Basic_Matplotlib_Scatterplot",caption:"Most basic scatterplot with Matplotlib."})))),l.createElement(g.Z,null,"# libraries\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\n\n# Create a dataset:\ndf=pd.DataFrame({'x_values': range(1,101), 'y_values': np.random.randn(100)*15+range(1,101) })\n\n# plot\nplt.plot( 'x_values', 'y_values', data=df, linestyle='none', marker='o')\nplt.show()\n"),l.createElement("br",null)),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(d.rS,null),"Scatterplots with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," is another great alternative to build scatterplots with python. As often, it takes a bit more lines of code to get a decent chart, but allows more customization."),l.createElement("p",null,"The examples below should get you covered for all the most common problems: adding ",l.createElement(p.Link,{to:"/193-annotate-matplotlib-chart"},"markers"),", adding",l.createElement(p.Link,{to:"/193-annotate-matplotlib-chart"},"labels"),", changing ",l.createElement(p.Link,{to:"/131-custom-a-matplotlib-scatterplot"},"shapes")," and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"130_Basic_Matplotlib_Scatterplot",caption:"Most basic scatterplot with Matplotlib",linkTo:"/130-basic-matplotlib-scatterplot"}),l.createElement(m.Z,{imgName:"131_Custom_Matplotlib_Scatterplot5",caption:"Customize marker features: size, color, stroke, type and more",linkTo:"/131-custom-a-matplotlib-scatterplot"}),l.createElement(m.Z,{imgName:"193_annotate6",caption:"Display a math equation on your matplotlib chart",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate5",caption:"Matplotlib: add horizontal and vertical ablines",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate2",caption:"Highlight a specific area of the chart with Matplotlib",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate1",caption:"Add an annotation to highlight a specific marker",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"manhattan-plot-with-matplotlib",caption:"How to build a Manhattan plot with Python and Matplotlib",linkTo:"/manhattan-plot-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib2",caption:"Scatterplot with grouping and legend",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib6",caption:"Legend customization: how to control location, add a background, customize labels and markers and more",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"scatterplot-and-log-scale-in-matplotlib",caption:"How to use a log scale for the X or the Y axis.",linkTo:"/scatterplot-and-log-scale-in-matplotlib"}),l.createElement(m.Z,{imgName:"scatterplot-with-regression-fit-in-matplotlib",caption:"How to compute and add a linear regression to a scatterplot with Python and matplotlib",linkTo:"/scatterplot-with-regression-fit-in-matplotlib"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"From the web"},l.createElement(d.rS,null),"From the web"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works."),l.createElement("p",null,"The ",l.createElement(p.Link,{to:"/web-text-repel-with-matplotlib"},"first example")," below demos how to add clean labels on a scatterplot, automatically avoiding overlapping. It also explains how to control background, fonts, titles and more."),l.createElement("p",null,"If you want to display your work here, please drop me a word or even better, submit a ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(c.Z,null,l.createElement(h.Z,{xs:12,md:6},l.createElement(p.Link,{to:"/web-text-repel-with-matplotlib"},l.createElement(b.Z,{imgName:"web-text-repel-with-matplotlib-square",caption:"Learn how to use the adjustText library to add many labels with no overlaps."}))),l.createElement(h.Z,{xs:12,md:6},l.createElement(p.Link,{to:"/web-scatterplot-text-annotation-and-regression-matplotlib"},l.createElement(b.Z,{imgName:"web-scatterplot-text-annotation-and-regression-matplotlib-square",caption:"Scatterplot with regression fit, group colors and non-overlapping labels."}))))),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(r.Z,null,l.createElement(s.Z,{chartFamily:"correlation"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement(i.Z,null)),l.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-scatter-plot-js-564e95e5f16de4498dc4.js.map