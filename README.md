# SWATCHES

You want to put color swatches in your github README, but it won't render html style attributes, and you can't be bothered to make or host the pngs.

**SVG color swatches as a supernice service** thanks to the wonders of [now.sh](https://now.sh)

![Charcoal](https://swatches-lkzftbccpg.now.sh/?color=%2324364C)
![Royal blue](https://swatches-lkzftbccpg.now.sh/?color=%232B60D5)
![Ultramarine blue](https://swatches-lkzftbccpg.now.sh/?color=%23437AF4)
![Bleu de France](https://swatches-lkzftbccpg.now.sh/?color=%234299FF)

```md
![Charcoal](https://swatches-lkzftbccpg.now.sh/?color=%2324364C)
![Royal blue](https://swatches-lkzftbccpg.now.sh/?color=%232B60D5)
![Ultramarine blue](https://swatches-lkzftbccpg.now.sh/?color=%23437AF4)
![Bleu de France](https://swatches-lkzftbccpg.now.sh/?color=%234299FF)
```

Add your `color` at the end of the url, get back an svg square.

https://swatches-lkzftbccpg.now.sh/?color=hotpink

For hex codes you have to url encode the `#` with `%23`.

https://swatches-lkzftbccpg.now.sh/?color=%234299FF

For hsl() you have to encode the `%` with `%25`

https://swatches-lkzftbccpg.now.sh/?color=hsl(52,100%25,20%25)

rbg(), and css color names are fine.

![](https://swatches-lkzftbccpg.now.sh/?color=rgb(255,220,0))
![](https://swatches-lkzftbccpg.now.sh/?color=goldenrod)
![](https://swatches-lkzftbccpg.now.sh/?color=chartreuse)

---

A [(╯°□°）╯︵TABLEFLIP](https://tableflip.io) side project.
