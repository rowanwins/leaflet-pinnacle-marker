# leaflet-pinnacle-marker
Extends [`L.Path`](https://leafletjs.com/reference.html#path) to create a pinnacle style marker. 

[Check out the demo](https://rowanwins.github.io/leaflet-pinnacle-marker/docs/index.html)

### Installing
````
npm install leaflet-pinnacleMarker
````

### Usage
Include the library after you've included leafletjs.

```
    require('leaflet-pinnacle-marker')
    // or
    <script src="leaflet-pinnacle-marker/dist/leaflet-pinnacle-marker.min.js"></script>
    // or via CDN
    <script src="https://unpkg.com/leaflet-pinnacle-marker"></script>
```

### Options
`width` - the base width of the pinnacle (in pixels)

`height` - the height of the pinnacle (in pixels)

All other options related to styling, such as `color` and `weight` can be inherited from [`L.Path`](https://leafletjs.com/reference.html#path)
````
    L.pinnacleMarker([0,0], {
        width: 8,
        height: 20,
        color: '#6e7479'
    }).addTo(map);

    // or with geojson
    L.geoJSON(data, {
        pointToLayer: function(feature, latlng) {
            return L.pinnacleMarker(latlng, {
              height: someCacluatedFunction(feature.properties.cases)
            });
            }
        }
    })
````

### Methods
`setWidth` - sets the width of the base of the pinnacle

`setHeight` - sets the height of the pinnacle

For example
````
    const pm = L.pinnacleMarker([0,0]).addTo(map);
    pm.setHeight(40)
````
