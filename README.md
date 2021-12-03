# pikchr-markdown-preview

Adds Pikchr support to VS Code's built-in Markdown preview

![A pikchr diagram in VS Code's built-in markdown preview](https://raw.githubusercontent.com/xuzn/pikchr-markdown-preview/main/example1.png)

![A pikchr diagram in VS Code's built-in markdown preview](https://raw.githubusercontent.com/xuzn/pikchr-markdown-preview/main/example2.png)

## Usage

Create diagrams in markdown using `pikchr` fenced code blocks:

~~~markdown
```pikchr
    color = white
    linerad = 10px
    linewid *= 0.5

    circle radius 10%
    arrow 2*arrowht
    oval "(" bold fit
    arrow 2*arrowht
    arrow
CN: oval "column-name" fit
    arrow 125%
    oval ")" bold fit
    arrow 2*arrowht
    circle same
CM: oval "," bold fit at 1.25*CN.ht below CN
    arrow from CN.e right 2*arrowht then down even with CM then to CM.e
    arrow from CM.w left even with 3*arrowht west of CN.w \
        then up even with CN then to CN.w
```

```pikchr
color = white
arrow right 200% "Markdown" "Source"
box rad 10px "Markdown" "Formatter" "(markdown.c)" fit
arrow right 200% "HTML+SVG" "Output"
arrow <-> down 70% from last box.s
box same "Pikchr" "Formatter" "(pikchr.c)" fit
```
~~~
