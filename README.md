# Velho Design System

Velho Design System is a library for creating visual Styleguide / Storybook presentation of Reagent components.
This library aims to ease the pain for developing front-end component system together with designers.

### Development mode

First thing you need to do is to generate tokens by running the following command in the terminal:
```
lein run
```

To start the Figwheel compiler, navigate to the project folder and run the following command in the terminal:

```
lein figwheel
```

Figwheel will automatically push cljs changes to the browser.
Once Figwheel starts up, you should be able to open the `public/index.html` page in the browser.


### Building for production

```
lein clean
lein package
```
