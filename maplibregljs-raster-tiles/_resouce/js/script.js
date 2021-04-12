// MIERUNE Streets読み込み
const map = new maplibregl.Map({
    container: 'map',
    style: {
        version: 8,
        sources: {
            m_streets: {
                type: 'raster',
                tiles: [
                    'https://api.maptiler.com/maps/jp-mierune-streets/256/{z}/{x}/{y}.png?key=6LSbuyOYMwIlmNJ9IxJ9',
                ],
                tileSize: 256,
                attribution:
                    '<a href="https://maptiler.jp/" target="_blank">© MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
            },
        },
        layers: [
            {
                id: 'mierunemap',
                type: 'raster',
                source: 'm_streets',
                minzoom: 0,
                maxzoom: 18,
            },
        ],
    },
    center: [139.767, 35.681],
    zoom: 13,
});

map.addControl(
    new maplibregl.NavigationControl({
        visualizePitch: true,
    })
);
