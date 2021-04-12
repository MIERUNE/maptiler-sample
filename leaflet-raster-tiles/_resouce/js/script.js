// デフォルトアイコンパス
L.Icon.Default.imagePath = './img/icon/';

// MIERUNE Streets読み込み
const m_streets = new L.tileLayer(
    'https://api.maptiler.com/maps/jp-mierune-streets/256/{z}/{x}/{y}.png?key=6LSbuyOYMwIlmNJ9IxJ9',
    {
        attribution:
            '<a href="https://maptiler.jp/" target="_blank">© MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
    }
);

// MAP読み込み
const map = L.map('map', {
    center: [35.681, 139.767],
    zoom: 14,
    zoomControl: true,
    layers: [m_streets],
});
