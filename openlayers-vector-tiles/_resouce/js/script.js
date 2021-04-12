import Map from 'ol/Map';
import View from 'ol/View';
import { fromLonLat } from 'ol/proj';
import olms from 'ol-mapbox-style';

// MIERUNE Streets読み込み
const styleJson =
    'https://api.maptiler.com/maps/jp-mierune-streets/style.json?key=6LSbuyOYMwIlmNJ9IxJ9';
const map = new Map({
    target: 'map',
    view: new View({
        center: fromLonLat([139.767, 35.681]),
        zoom: 14,
    }),
});
olms(map, styleJson);
