# punto-de-venta

## Requires
```
nvm install 18.16.0
nvm use
```

Then, when we have node version installed:
```
npm install --global yarn
npm install --global @vue/cli
```

Finally:
```
yarn install
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


### Snippets

You can add this snipped:
```
{
	"vue": {
		"prefix": "vue",
		"body": [
			"<template>\n\t${1:<h1>write something else</h1>}\n</template>",
			"<script setup lang=\"ts\">\n\t${2://create awesome code}\n</script>"
		]
	}
}
```


### Warnings about Tailwind and some directives

Link: https://duncanleung.com/tailwind-css-unknown-at-rule/