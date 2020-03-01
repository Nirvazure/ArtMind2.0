<!-- ## ArtMind -->
<h2 align="center">ArtMind</h2>
<h3 align="center">最懂你的人工智能分析引擎</h3>
<p>
  <h4 align="center"><code>vue-admin-vuetify</code> is a Front-end component project.</h4>
  <h4 align="center">Component demo based on <a href="https://github.com/vuejs/vue">vue</a> and <a href="https://github.com/vuetifyjs/vuetify">vuetify</a></h4>
</p>

<p align="center">
  <a href="https://github.com/vasttian/vue-admin-vuetify/tags">
    <img src="https://img.shields.io/github/tag-date/vasttian/vue-admin-vuetify.svg" alt="TAGS">
  </a>
  <a href="https://github.com/vasttian/vue-admin-vuetify/releases">
    <img src="https://img.shields.io/github/release/vasttian/vue-admin-vuetify/all.svg" alt="RELEASE">
  </a>
  <a href="https://github.com/vasttian/vue-admin-vuetify/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mashape/apistatus.svg" alt="LICENSE">
  </a>
</p>
<!-- [![GitHub tag](https://img.shields.io/github/tag-date/vasttian/vue-admin-vuetify.svg)](https://github.com/vasttian/vue-admin-vuetify/tags) -->

---

### :page_with_curl: Index

- [:warning: Heads up](#warning-heads-up)
- [:art: Live Demo](#art-live-demo)
- [:rocket: Getting Started](#rocket-getting-started)
- [:camera: Screenshots](#camera-screenshots)
- [:white_check_mark: Roadmap](#white_check_mark-roadmap)
- [:exclamation: Issues](#exclamation-issues)
- [:copyright: License](#copyright-license)

### :warning: Heads up

Currently this is just a **beta version**.

### :art: Live Demo

[http://67.218.155.117:8020](http://67.218.155.117:8020)

### :rocket: Getting Started

#### Project setup

```bash
npm install
```

#### Compiles and hot-reloads for development

```bash
npm run serve
```

:tada: Open http://localhost:8090 to see the demo.

If [hot reload](https://vue-loader.vuejs.org/guide/hot-reload.html#state-preservation-rules) fails,
modify your `vue.config.js`

```javascript
module.exports = {
  chainWebpack: config => {
    config.resolve.symlinks(true);
  }
};
```

or replace `cnpm` with `npm`

`npm config set registry https://registry.npm.taobao.org`

#### Compiles and minifies for production

```bash
npm run build
```

#### Lints and fixes files

```bash
npm run lint
```

### :camera: Screenshots

|                                                             |                                                 |
| ----------------------------------------------------------- | ----------------------------------------------- |
| ![vue-admin-vuetify.png](screenshots/vue-admin-vuetify.png) | ![charts-line.png](screenshots/charts-line.png) |
| ![components-maps](screenshots/components-maps.png)         |                                                 |

### :white_check_mark: Roadmap

- [x] add: Dashboard.
- [x] add: Icons.
- [x] add: Editor components.
- [x] add: Jsonlint.
- [x] mod: Sidebar.
- [x] add: Charts components.
- [ ] add: UI components.
- [ ] add: Render Functions & Functional Components.
- [x] add: Demo site.

### :exclamation: Issues

If you run into any issues, you can contact me at [issues](https://github.com/vasttian/vue-admin-vuetify/issues)

### :memo: Changelog

Detailed changes for each release are documented in the [release notes](https://github.com/vasttian/vue-admin-vuetify/releases).

### :copyright: License

Under the MIT license. See [LICENSE](http://opensource.org/licenses/MIT) file for more details.

# artmind3.0

npm install --save vue-picture-input
找到 picture-input 的源文件
node_modules/vue-picture-input/PictureInput.vue
在 props 里面更改 height 的 default 值
之前是 default: Number.MAX_SAFE_INTEGER/，改为 default: Number.MAX_SAFE_INTEGER/2，这样就保证了长宽比是 2：1

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
