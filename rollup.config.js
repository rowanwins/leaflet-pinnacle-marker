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
    output('./dist/leaflet-pinnacleMarker.js'),
    output('./dist/leaflet-pinnacleMarker.min.js', [terser()])
]
