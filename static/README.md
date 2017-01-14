## Static folder

Place anything that should be served up by your web app but not included in the `bundle.js` here. This should be for your images or any other files you want to be accessible. If you create an `images/` folder that has a `someimage.png` in it, for example, you can access it in your components like so:

```html
<img src="static/images/someimage.png">
```

Notice there is no preceding `/`. However, in your `.scss` you will need a preceding `/` like so:

```css
body {
  background-image: url('/static/images/someimage.png');
}
```