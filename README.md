# pikchr-markdown-preview

Adds Pikchr support to VS Code's built-in Markdown preview

![A pikchr diagram in VS Code's built-in markdown preview](https://raw.githubusercontent.com/xuzn/pikchr-markdown-preview/main/example.png)

## Usage

Create diagrams in markdown using `pikchr` fenced code blocks:

~~~markdown
```pikchr
color = white
arrow right 200% "Markdown" "Source"
box rad 10px "Markdown" "Formatter" "(markdown.c)" fit
arrow right 200% "HTML+SVG" "Output"
arrow <-> down 70% from last box.s
box same "Pikchr" "Formatter" "(pikchr.c)" fit
```
~~~
