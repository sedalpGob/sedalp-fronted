var baseLayer = new ol.layer.Group({
    'title': 'Base maps',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_REGIONVALLESDELNORTE = new ol.format.GeoJSON();
var features_REGIONVALLESDELNORTE = format_REGIONVALLESDELNORTE.readFeatures(geojson_REGIONVALLESDELNORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_REGIONVALLESDELNORTE = new ol.source.Vector();
jsonSource_REGIONVALLESDELNORTE.addFeatures(features_REGIONVALLESDELNORTE);var lyr_REGIONVALLESDELNORTE = new ol.layer.Vector({
                source:jsonSource_REGIONVALLESDELNORTE, 
                style: style_REGIONVALLESDELNORTE,
                title: "REGION VALLES DEL NORTE"
            });var format_MUNICIPIOSVALLENORTE = new ol.format.GeoJSON();
var features_MUNICIPIOSVALLENORTE = format_MUNICIPIOSVALLENORTE.readFeatures(geojson_MUNICIPIOSVALLENORTE, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MUNICIPIOSVALLENORTE = new ol.source.Vector();
jsonSource_MUNICIPIOSVALLENORTE.addFeatures(features_MUNICIPIOSVALLENORTE);var lyr_MUNICIPIOSVALLENORTE = new ol.layer.Vector({
                source:jsonSource_MUNICIPIOSVALLENORTE, 
                style: style_MUNICIPIOSVALLENORTE,
                title: "MUNICIPIOS VALLE NORTE"
            });var format_MOCOMOCO = new ol.format.GeoJSON();
var features_MOCOMOCO = format_MOCOMOCO.readFeatures(geojson_MOCOMOCO, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:32719'});
var jsonSource_MOCOMOCO = new ol.source.Vector();
jsonSource_MOCOMOCO.addFeatures(features_MOCOMOCO);var lyr_MOCOMOCO = new ol.layer.Vector({
                source:jsonSource_MOCOMOCO, 
                style: style_MOCOMOCO,
                title: "MOCOMOCO"
            });

lyr_REGIONVALLESDELNORTE.setVisible(true);lyr_MUNICIPIOSVALLENORTE.setVisible(true);lyr_MOCOMOCO.setVisible(true);
var layersList = [baseLayer,lyr_REGIONVALLESDELNORTE,lyr_MUNICIPIOSVALLENORTE,lyr_MOCOMOCO];