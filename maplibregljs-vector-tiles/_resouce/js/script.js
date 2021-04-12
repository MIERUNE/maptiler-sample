// MIERUNE Streets読み込み
const map = new maplibregl.Map({
    container: 'map',
    style: 'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=6LSbuyOYMwIlmNJ9IxJ9',
    center: [139.767, 35.681],
    zoom: 13,
});

map.addControl(
    new maplibregl.NavigationControl({
        visualizePitch: true,
    })
);
