import {terser} from 'rollup-plugin-terser'

const output = (outputName, plugins) => ({
    input: './src/main.js',
    output: {
        name: 'leafletPinnacleMarker',
        file: outputName,
        format: 'umd'
    },
    plugins
})

export default [
    output('./dist/leaflet-pinnacle-marker.js'),
    output('./dist/leaflet-pinnacle-marker.min.js', [terser()])
]
