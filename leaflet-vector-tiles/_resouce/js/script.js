// デフォルトアイコンパス
L.Icon.Default.imagePath = 'img/icon/';

// MIERUNE Streets読み込み
const m_streets = L.mapboxGL({
    attribution:
        '<a href="https://maptiler.jp/" target="_blank">© MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    style: 'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=6LSbuyOYMwIlmNJ9IxJ9',
});

// MAP読み込み
const map = L.map('map', {
    center: [35.681, 139.767],
    zoom: 14,
    zoomControl: true,
    layers: [m_streets],
});
