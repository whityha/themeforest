import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import { APP_MAPBOX_TOKEN } from '@/constants';

import { Wrapper } from './styled';

const Map = () => {
    const containerRef = useRef<HTMLElement>(null);
    const map = useRef<mapboxgl.Map>();
    const [lng] = useState(20.9);
    const [lat] = useState(50.35);
    const [zoom] = useState(3);
    mapboxgl.accessToken = APP_MAPBOX_TOKEN;

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: containerRef.current as HTMLElement,
            style: 'mapbox://styles/mapbox/light-v11',
            center: [lng, lat],
            zoom,
            scrollZoom: false,
        });
        map.current.setProjection('lambertConformalConic');
        new mapboxgl.Marker({ color: '#002b4e', scale: 1 }).setLngLat([21, 52]).addTo(map.current);
        new mapboxgl.Marker({ color: '#002b4e', scale: 1 }).setLngLat([15, 47]).addTo(map.current);
        new mapboxgl.Marker({ color: '#002b4e', scale: 1 }).setLngLat([30, 55]).addTo(map.current);
    }, []);

    return <Wrapper ref={containerRef} />;
};

export default Map;
