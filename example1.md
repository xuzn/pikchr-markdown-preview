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
