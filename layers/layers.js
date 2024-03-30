var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format___1 = new ol.format.GeoJSON();
var features___1 = format___1.readFeatures(json___1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___1.addFeatures(features___1);
var lyr___1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___1, 
                style: style___1,
                popuplayertitle: "萬榮鄉鎮生活圈_人次",
                interactive: true,
    title: '萬榮鄉鎮生活圈_人次<br />\
    <img src="styles/legend/__1_0.png" /> 1<br />\
    <img src="styles/legend/__1_1.png" /> 2<br />\
    <img src="styles/legend/__1_2.png" /> 5<br />\
    <img src="styles/legend/__1_3.png" /> 9<br />\
    <img src="styles/legend/__1_4.png" /> 11<br />\
    <img src="styles/legend/__1_5.png" /> 13<br />\
    <img src="styles/legend/__1_6.png" /> 26<br />\
    <img src="styles/legend/__1_7.png" /> 63<br />\
    <img src="styles/legend/__1_8.png" /> 316<br />\
    <img src="styles/legend/__1_9.png" /> 734<br />\
    <img src="styles/legend/__1_10.png" /> 1204<br />\
    <img src="styles/legend/__1_11.png" /> <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr___1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr___1];
lyr___1.set('fieldAliases', {'fid': 'fid', '起迄2': '起迄2', '起X': '起X', '起Y': '起Y', '迄X': '迄X', '迄Y': '迄Y', '班次數': '班次數', '實際正常搭乘人數': '實際正常搭乘人數', '實際里程': '實際里程', '每車人': '每車人', '每車長': '每車長', });
lyr___1.set('fieldImages', {'fid': 'TextEdit', '起迄2': 'TextEdit', '起X': 'TextEdit', '起Y': 'TextEdit', '迄X': 'TextEdit', '迄Y': 'TextEdit', '班次數': 'Range', '實際正常搭乘人數': 'Range', '實際里程': 'TextEdit', '每車人': 'TextEdit', '每車長': 'TextEdit', });
lyr___1.set('fieldLabels', {'fid': 'no label', '起迄2': 'no label', '起X': 'no label', '起Y': 'no label', '迄X': 'no label', '迄Y': 'no label', '班次數': 'no label', '實際正常搭乘人數': 'no label', '實際里程': 'no label', '每車人': 'no label', '每車長': 'no label', });
lyr___1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});