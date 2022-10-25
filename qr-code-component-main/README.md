# Frontend Mentor - QR code component solution

This is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### Screenshot

![mobile-view](https://user-images.githubusercontent.com/93230374/197880592-7ab77f32-cecb-4437-a2d4-28fb395a6091.png)

### Links

<!-- - Solution URL: [Add solution URL here](https://your-solution-url.com) -->

- Live Site URL: [Demo](https://fixed-peace.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- Flexbox
- Mobile-first workflow

### What I learned

To create responsive design, I referenced this [FreeCodeCamp](https://www.freecodecamp.org/news/css-media-queries-breakpoints-media-types-standard-resolutions-and-more/) article on common media breakpoints. As per the article, 320px-480px is a common breakpoint for widths of mobile devices. I used a mobile-first approach to design the application. I set a fixed width on the qr-code to prevent the qr-code from growing as the width of the screen expands.

I created a breakpoint for devices that have a width smaller than 320px:

```css
@media (max-width: 320px) {
  body {
    padding: 0 0.5em;
  }

  .card {
    width: 9em;
  }

  .bold-text {
    font-size: 0.7rem;
  }

  .text {
    font-size: 0.53rem;
  }

  footer > p {
    font-size: 0.67rem;
  }
}
```

### Continued development

I plan to continue working on building responsive layouts with a mobile first approach.

### Useful resources

- [Scrimba](https://scrimba.com/learn/frontend) - Scrimba's module on responsive design helped me understand the different css units like `em` and `rem` and provides general guidelines on when to apply the css units to font size, padding, margin, and width. These principles along with others helped me become a better front end developer. I'd recommend it to anyone still learning this concept

## Author

**Lauralyn Watson**

- [LinkedIn](https://www.linkedin.com/in/lauralyn-watson/)
- [Portfolio](https://portfolio-lswatson16.vercel.app/)
- Frontend Mentor - [@lilydev16](https://www.frontendmentor.io/profile/lilydev16)
- Twitter - [@lily_webdev](https://www.twitter.com/lily_webdev)
- IG - [@lily_webdev](https://www.instagram.com/lily_webdev/?hl=en)

## Acknowledgments

- [Surge](https://surge.sh/) for deploying a HTML static site
- [Frontend Mentor](https://www.frontendmentor.io) for providing an excellent [README template](https://github.com/lilydev16/octo-brocolli/blob/main/qr-code-component-main/README-template.md) and [instructions](https://github.com/lilydev16/octo-brocolli/blob/main/qr-code-component-main/README-instructions.md) to get started with the frontend challenge
