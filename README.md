# leaflet-pinnacleMarker
Extends [`L.Path`](https://leafletjs.com/reference-1.3.4.html#geojson) to create a pinnacle style marker. 

[Check out the demo](https://rowanwins.github.io/leaflet-pinnacleMarker/example/basic.html)

### Installing
````
npm install leaflet-pinnacleMarker
````

### Usage
**Step 1.** Include the library after you've included leafletjs.

```
    require('leaflet-pinnacleMarker')
    // or
    <script src="leaflet-pinnacleMarker/dist/leaflet-pinnacleMarker.min.js"></script>
    // or via CDN
    <script src="https://unpkg.com/leaflet-pinnacleMarker"></script>
```

**Step 2.** 

````
    L.pinnacleMarker([0,0], {
        color: '#6e7479',
        width: 8,
        height: 20
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


