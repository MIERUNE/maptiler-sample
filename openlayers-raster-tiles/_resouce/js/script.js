import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { fromLonLat } from 'ol/proj';

// MIERUNE Streets読み込み
const map = new Map({
    target: 'map',
    layers: [
        new TileLayer({
            source: new XYZ({
                url:
                    'https://api.maptiler.com/maps/jp-mierune-streets/256/{z}/{x}/{y}.png?key=6LSbuyOYMwIlmNJ9IxJ9',
                attributions:
                    '<a href="https://maptiler.jp/" target="_blank">© MIERUNE</a> <a href="https://www.maptiler.com/copyright/" target="_blank">© MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">© OpenStreetMap contributors</a>',
                attributionsCollapsible: false,
                tileSize: [256, 256],
                minZoom: 0,
                maxZoom: 18,
            }),
        }),
    ],
    view: new View({
        center: fromLonLat([139.767, 35.681]),
        zoom: 14,
    }),
});
