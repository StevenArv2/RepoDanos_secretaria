var wms_layers = [];


        var lyr_Fondo_0 = new ol.layer.Tile({
            'title': 'Fondo',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://worldtiles3.waze.com/tiles/{z}/{x}/{y}.png'
            })
        });
var format_TramosparaRevision_1 = new ol.format.GeoJSON();
var features_TramosparaRevision_1 = format_TramosparaRevision_1.readFeatures(json_TramosparaRevision_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TramosparaRevision_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TramosparaRevision_1.addFeatures(features_TramosparaRevision_1);
var lyr_TramosparaRevision_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TramosparaRevision_1, 
                style: style_TramosparaRevision_1,
                interactive: true,
    title: 'Tramos para Revision<br />\
    <img src="styles/legend/TramosparaRevision_1_0.png" /> PRINCIPAL<br />\
    <img src="styles/legend/TramosparaRevision_1_1.png" /> TERCIARIA<br />\
    <img src="styles/legend/TramosparaRevision_1_2.png" /> SECUNDARIA<br />\
    <img src="styles/legend/TramosparaRevision_1_3.png" /> <br />'
        });

lyr_Fondo_0.setVisible(true);lyr_TramosparaRevision_1.setVisible(true);
var layersList = [lyr_Fondo_0,lyr_TramosparaRevision_1];
lyr_TramosparaRevision_1.set('fieldAliases', {'TRAMO': 'TRAMO', 'Longitud': 'Longitud', });
lyr_TramosparaRevision_1.set('fieldImages', {'TRAMO': 'TextEdit', 'Longitud': '', });
lyr_TramosparaRevision_1.set('fieldLabels', {'TRAMO': 'header label', 'Longitud': 'header label', });
lyr_TramosparaRevision_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});