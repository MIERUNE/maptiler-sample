import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Geocoder } from '@maptiler/geocoder';
import '@maptiler/geocoder/css/geocoder.css';


(() => {
    const MAPTILER_KEY = process.env.MAPTILER_KEY;

    const map = new mapboxgl.Map({
        container: 'map',
        style: `https://api.maptiler.com/maps/basic/style.json?key=${MAPTILER_KEY}`,
        center: [139.76706, 35.68115],
        zoom: 13,
        attributionControl: true,
        hash: true
    });

    map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
    map.addControl(new mapboxgl.ScaleControl({ maxWidth: 200, unit: 'metric' }), 'bottom-left');
    
    const geocoder = new Geocoder({
        input: 'search', // id of input element
        key: MAPTILER_KEY
    });

    let marker;
    geocoder.on('select', function(item) {
        console.log('Selected', item);
        map.fitBounds(item.bbox);

        if (marker) marker.remove();
        marker = new mapboxgl.Marker()
        .setLngLat(item.center)
        .addTo(map);
    });
})();