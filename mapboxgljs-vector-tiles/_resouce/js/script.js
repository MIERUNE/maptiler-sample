// MIERUNE Streets読み込み
const map = new mapboxgl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=6LSbuyOYMwIlmNJ9IxJ9',
    center: [139.767, 35.681],
    zoom: 13,
});

// コントロール関係表示
map.addControl(
    new mapboxgl.NavigationControl({
        visualizePitch: true,
    })
);
