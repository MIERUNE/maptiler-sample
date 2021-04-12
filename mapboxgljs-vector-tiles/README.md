# Mapbox GL JS v1 x MapTiler Vector Tiles

![README02](img/README02.png)

![README05](img/README05.png)

Start MapboxGLJS easily.  
- [MapboxGLJS v1.13.0](https://www.mapbox.com/mapbox-gl-js/api) 
- [webpack v5.11.1](https://webpack.js.org)  
- node v15.5.0
- npm v7.3.0

<br>

## Usage

![README04](img/README04.png)

<br>

Install package
```bash
npm install
```

<br>

build
```bash
npm run build
```

<br>

dev
```bash
npm run dev
```

<br>

## Example

<br>

./_resouce/js

script.js
```javascript
// MIERUNE Streets読み込み
const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=[APIキー]',
    center: [139.767, 35.681],
    zoom: 13,
});

// コントロール関係表示
map.addControl(
    new mapboxgl.NavigationControl({
        visualizePitch: true,
    })
);
```

<br>
<br>

![README01](img/README01.png)

<br>

## License
MIT

Copyright (c) 2021 MIERUNE Inc.

<br>

---

<br>

### Japanese

<br>

# Mapbox GL JS v1 x MapTiler ベクトルタイル

![README02](img/README02.png)

![README05](img/README05.png)

MapboxGLJSを手軽に始める
- [MapboxGLJS v1.13.0](https://www.mapbox.com/mapbox-gl-js/api) 
- [webpack v5.11.1](https://webpack.js.org)  
- node v15.5.0
- npm v7.3.0

<br>

##  使用方法

![README04](img/README04.png)

<br>

パッケージインストール

```bash
npm install
```

<br>

ビルド

```bash
npm run build
```

<br>

開発

```bash
npm run dev
```

<br>

## 例

<br>

./_resouce/js

script.js
```javascript
// MIERUNE Streets読み込み
const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=[APIキー]',
    center: [139.767, 35.681],
    zoom: 13,
});

// コントロール関係表示
map.addControl(
    new mapboxgl.NavigationControl({
        visualizePitch: true,
    })
);
```

<br>
<br>

![README01](img/README01.png)

<br>

## ライセンス
MIT

Copyright (c) 2021 MIERUNE Inc.

<br>
