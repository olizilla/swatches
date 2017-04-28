# SWATCHES

You want to put color swatches in your github README, but it won't render html style attributes, and you can't be bothered to make or host the pngs. What if you could just...

`![A lovely hotpink color swatch](https://swatch.now.sh/?color=hotpink)`

and have it render as:

![A lovely hotpink color swatch](https://swatch.now.sh/?color=hotpink)

**why yes! SVG color swatches as a supernice service** thanks to the wonders of [now.sh](https://now.sh)

![Charcoal](https://swatch.now.sh/?color=%2324364C)
![Royal blue](https://swatch.now.sh/?color=%232B60D5)
![Ultramarine blue](https://swatch.now.sh/?color=%23437AF4)
![Bleu de France](hhttps://swatch.now.sh/?color=%234299FF)

```md
![Charcoal](https://swatch.now.sh/?color=%2324364C)
![Royal blue](https://swatch.now.sh/?color=%232B60D5)
![Ultramarine blue](https://swatch.now.sh/?color=%23437AF4)
![Bleu de France](https://swatch.now.sh/?color=%234299FF)
```

Add your `color` at the end of the url, get back an svg square.

https://swatch.now.sh/?color=hotpink

For hex codes you have to url encode the `#` with `%23`.

https://swatch.now.sh/?color=%234299FF

For hsl() you have to encode the `%` with `%25`

https://swatch.now.sh/?color=hsl(52,100%25,20%25)

rbg(), and css color names are fine.

![](https://swatch.now.sh/?color=rgb(255,220,0))
![](https://swatch.now.sh/?color=goldenrod)
![](https://swatch.now.sh/?color=chartreuse)

---

A [(╯°□°）╯︵TABLEFLIP](https://tableflip.io) side project.
