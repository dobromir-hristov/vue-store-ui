# store-ui

This is a basic, naive implementation of a pluggable UI for a E-commerce page. 

API calls are stubbed out, but can easily be replaced with a JSON api or something.


### Features

- Minimal Authentication
- Newsletter Subscription
- Navigation
  - Shopping Cart - cart provides a simple dropdown minicart as well as a general CartDataProvider to build a full cart page.
- Product Page - basic product page
  - Product Gallery - very simple carousel. Image changes if variation matches (currently the color)
  - Product SKU - dynamic SKU based on chosen variations
  - Product Price - price display with currency symbol filter
  - Variations Picker - dynamic component which can be used to build different variation type pickers (color, size) as a dropdown, radio or other.
  - Quantity Picker
  - Add To Cart button

Test coverage is not 100%, but it is sufficient.

The KitchenSink page is there for testing mostly.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
