(function (factory) {
    typeof define === 'function' && define.amd ? define(factory) :
    factory();
}((function () { 'use strict';

    L.PinnacleMarker = L.Path.extend({

        options: {
            width: 20,
            height: 20,
            weight: 2
        },

        initialize: function (latlng, options) {
            L.setOptions(this, options);
            this._latlng = L.latLng(latlng);
        },

        _project: function () {
            this._point = this._map.latLngToLayerPoint(this._latlng);
        },

        _update: function () {
            if (this._map) {
                this._updatePath();
            }
        },

        _updatePath: function () {
            this._renderer._updatePinnacle(this);
        },

        setStyle: function (options) {
            const height = options && options.height || this._height;
            const width = options && options.width || this._width;
            Path.prototype.setStyle.call(this, options);
            this.setHeight(height);
            this.setWidth(width);
            this._updatePath(this);
            return this;
        },

        setWidth (newWidth) {
            this.options.width = newWidth;
            this._updatePath();
        },

        setHeight (newHeight) {
            this.options.height = newHeight;
            this._updatePath();
        }
     });

    L.SVG.include({
        _updatePinnacle: function (lyr) {
           const height = lyr.options.height;
           const halfWidth = lyr.options.width / 2;
           var p = lyr._point;
           const d = `M ${p.x - halfWidth} ${p.y} L${p.x} ${p.y - height} m0 0 L${p.x + halfWidth} ${p.y}`;
           this._setPath(lyr, d);
        }
    });

    L.pinnacleMarker = function pinnacleMarker(latlng, options) {
        return new L.PinnacleMarker(latlng, options);
    };

})));
