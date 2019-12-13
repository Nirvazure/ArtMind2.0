# artmind3.0
npm install --save vue-picture-input
找到picture-input的源文件
node_modules/vue-picture-input/PictureInput.vue
在props里面更改height的default值
之前是default: Number.MAX_SAFE_INTEGER/，改为default: Number.MAX_SAFE_INTEGER/2，这样就保证了长宽比是2：1
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

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
