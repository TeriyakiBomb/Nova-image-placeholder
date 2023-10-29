**Image Placeholder** inserts placeholder images provided by Lorem Picsum, LoremFlickr and (most importantly) placekitten with the command palette.

## Usage

<!--
🎈 If users will interact with your extension manually, describe those options:
-->

To run Image Placeholder:

- Select the **Editor → Image Placeholder** menu item; or
- Open the command palette and type `placeholder` and select the service and type of placeholder you want.

Image placeholder supports three image providers(more planned) and has various options for each.

You can provide dimensions as either `w h`, `w,h` or `w/h` LoremFlickr also supports categories, so you can write something like `600 400 monkey` press <kbd>⮐</kbd> and get this image:

![](https://loremflickr.com/400/300/monkey)

_Isn't that a lovely picture eh?_

Both Lorem picusum and LoremFlickr support **random** commands, which adds a random seed string ensuring images of the same dimension will return different images, both of these are pictures of a horse, using the Lorem Flicker placeholder random command and typing `100 horse`

![](https://loremflickr.com/100/100/horse?random=9455)
![](https://loremflickr.com/100/100/horse?random=1022)

You can also insert `<img>` tags and css background images, snazzy.

Here's the full list of commands:

### Lorem picsum

- Picsum image placeholder
- Picsum image placeholder random
- Picsum img tag placeholder
- Picsum img tag placeholder random
- Picsum CSS background placeholder
- Picsum CSS background placeholder random

### LoremFlickr

_also supports categories!_

- LoremFlickr image placeholder
- LoremFlickr image placeholder random
- LoremFlickr img tag placeholder
- LoremFlickr img tag placeholder random
- LoremFlickr background placeholder
- LoremFlickr background placeholder random

### Placekitten

- LoremFlickr image placeholder
- LoremFlickr img tag placeholder
- LoremFlickr background placeholder

### Contribution and upcoming features

This is V1.0, I'm planning on some improvements inlcuding

- Support for placehold.co, inclding being able to specify colours and text etc
- Support for LoremFlickr's lock parameter

If there's anything else you'd like to see added or have feedback, feel free to leave an issue on the Github repo
