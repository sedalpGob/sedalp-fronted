var size = 0;

var styleCache_MUNICIPIOS={}
var style_MUNICIPIOS = function(feature, resolution){
    var value = ""
    var size = 0;
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: "rgba(0,0,0,0.2)", lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0}), fill: new ol.style.Fill({color: "rgba(0,0,0,0.2)"})
    })];
    if ("" !== null) {
        var labelText = String("");
    } else {
        var labelText = ""
    }
    var key = value + "_" + labelText

    if (!styleCache_MUNICIPIOS[key]){
        var text = new ol.style.Text({
              font: '10.725px Calibri,sans-serif',
              text: labelText,
              textBaseline: "center",
              textAlign: "left",
              offsetX: 5,
              offsetY: 3,
              fill: new ol.style.Fill({
                color: "rgba(0, 0, 0, 255)"
              }),
            });
        styleCache_MUNICIPIOS[key] = new ol.style.Style({"text": text})
    }
    var allStyles = [styleCache_MUNICIPIOS[key]];
    allStyles.push.apply(allStyles, style);
    return allStyles;
};