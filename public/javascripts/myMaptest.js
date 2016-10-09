 var planeSVG = "m2,106h28l24,30h72l-44,-133h35l80,132h98c21,0 21,34 0,34l-98,0 -80,134h-35l43,-133h-71l-24,30h-28l15,-47";

 var targetSVG = "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

 AmCharts.makeChart( "mapdiv", {
   /**
    * this tells amCharts it's a map
    */
    "type": "map",
    "mouseWheelZoomEnabled": true,

   // *
   //  * create data provider object
   //  * map property is usually the same as the name of the map file.
   //  * getAreasFromMap indicates that amMap should read all the areas available
   //  * in the map data and treat them as they are included in your data provider.
   //  * in case you don't set it to true, all the areas except listed in data
   //  * provider will be treated as unlisted.

   "dataProvider": {
     "map": "worldLow",
     "backgroundZoomsToTop": true,
     "autoResize": true,

     "lines": [ {

      "id": "line1",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 40.639722],
      "longitudes": [ -3.560833, -73.778889]
    },
    {

      "id": "line2",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 41.978611],
      "longitudes": [ -3.560833, -87.904722]
    },
    {

      "id": "line3",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, -33.969444],
      "longitudes": [ -3.560833, 18.597222]
    },
    {

      "id": "line4",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 52.3081],
      "longitudes": [ -3.560833, 47.64169]
       },
    {

      "id": "line5",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 52.165833],
      "longitudes": [ -3.560833, 20.967222]
       },
    {

      "id": "line6",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 55.618056],
      "longitudes": [ -3.560833, 12.656111]
       },
    {

      "id": "line7",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 53.630278],
      "longitudes": [ -3.560833, 9.991111]
       },
    {

      "id": "line8",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, -33.94611],
      "longitudes": [ -3.560833, 151.177222]
       },
    {

      "id": "line9",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 45.208333],
      "longitudes": [ -3.560833, 7.649722]
       },
    {

      "id": "line10",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, -34.822222],
      "longitudes": [ -3.560833, -58.335833]
       },
    {

      "id": "line11",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, -25.239722],
      "longitudes": [ -3.560833, -57.519167]
       },
    {

      "id": "line12",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 37.4625],
      "longitudes": [ -3.560833, 126.439167]
       },
    {

      "id": "line13",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 55.972642],
      "longitudes": [ -3.560833, 37.414589]
       },
    {

      "id": "line14",
      //"arc": -0.85,
      "alpha": 0.3,
      "latitudes": [ 40.472222, 25.252778],
      "longitudes": [ -3.560833, 55.364444]

    }
    ],

     "images": [
     {
      "id": "plane1",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line1",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane2",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line2",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane3",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line3",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane4",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line4",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane5",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line5",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane6",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line6",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane7",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line7",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane8",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line8",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane9",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line9",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane10",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line10",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane11",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line11",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane12",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line12",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane13",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line13",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "id": "plane14",
      "svgPath": planeSVG,
      "positionOnLine": 0,
      "AnimatedAlongLine": true,
      "lineId": "line14",
      "flipDirection": false,
      "loop": true,
      "scale": 0.03,
      "positionScale": 1.8
    },
    {
      "svgPath": targetSVG,
      "title": "Chicago",
      "latitude": 41.978611,
      "longitude": -87.904722
    },
    {
      "svgPath": targetSVG,
      "title": "Madrid",
      "latitude": 40.472222,
      "longitude": -3.560833
    },
    {
      "svgPath": targetSVG,
      "title": "New York",
      "latitude": 40.639722,
      "longitude": -73.778889
       },
    {
      "svgPath": targetSVG,
      "title": "Cape Town",
      "latitude": -33.969444,
      "longitude": 18.597222
    },
    {
      "svgPath": targetSVG,
      "title": "Amsterdam",
      "latitude": 52.3081,
      "longitude": 47.64169
    },
    {
      "svgPath": targetSVG,
      "title": "Warsaw",
      "latitude": 52.165833,
      "longitude": 20.967222
    },
    {
      "svgPath": targetSVG,
      "title": "Conpenhague",
      "latitude": 55.618056,
      "longitude": 12.656111
    },
    {
      "svgPath": targetSVG,
      "title": "Hamburg",
      "latitude": 53.630278,
      "longitude": 9.991111
    },
    {
      "svgPath": targetSVG,
      "title": "Sydney",
      "latitude": -33.946111,
      "longitude": 151.177222
    },
    {
      "svgPath": targetSVG,
      "title": "Torino",
      "latitude": 45.208333,
      "longitude": 7.649722

    },
    {
      "svgPath": targetSVG,
      "title": "Buenos Aires",
      "latitude": -34.822222,
      "longitude": -58.335833
    },
    {
      "svgPath": targetSVG,
      "title": "Paraguay",
      "latitude": -25.239722,
      "longitude": -57.519167
    },
    {
      "svgPath": targetSVG,
      "title": "Incheon",
      "latitude": 37.4625,
      "longitude": 126.439167
    },
    {
      "svgPath": targetSVG,
      "title": "Moscow",
      "latitude": 55.972642,
      "longitude": 37.414589
    },
    {
      "svgPath": targetSVG,
      "title": "Dubai",
      "latitude": 25.252778,
      "longitude": 55.364444
    }
   ],
    
  },

   /**
    * create areas settings
    * autoZoom set to true means that the map will zoom-in when clicked on the area
    * selectedColor indicates color of the clicked area.
    */
    "areasSettings": {
           "unlistedAreasColor": "#CED8F6",
   },

   "imagesSettings": {
    "color": "#585869",
    "rollOverColor": "#585869",
    "selectedColor": "#585869",
    "pauseDuration": 0.2,
    "animationDuration": 4,
    "adjustAnimationSpeed": true
   },

   "linesSettings": {
      "color": "#585869",
      "alpha": 0.4
    },

    "listeners": [ {
    "event": "init",
    "method": function( e ) {

      // get map object
      var map = e.chart;

      // start first plane immediately
      var plane1 = map.getObjectById( "plane1" );
      plane1.lineId = "line1";

      var plane2 = map.getObjectById( "plane2" );
      plane2.lineId = "line2";

      var plane3 = map.getObjectById( "plane3" );
      plane3.lineId = "line3";

      var plane4 = map.getObjectById( "plane4" );
      plane4.lineId = "line4";

      var plane5 = map.getObjectById( "plane5" );
      plane5.lineId = "line5";

      var plane6 = map.getObjectById( "plane6" );
      plane6.lineId = "line6";

      var plane7 = map.getObjectById( "plane7" );
      plane7.lineId = "line7";

      var plane8 = map.getObjectById( "plane8" );
      plane8.lineId = "line8";

      var plane9 = map.getObjectById( "plane9" );
      plane9.lineId = "line9";

      var plane10 = map.getObjectById( "plane10" );
      plane10.lineId = "line10";

      var plane11 = map.getObjectById( "plane11" );
      plane11.lineId = "line11";

      var plane12 = map.getObjectById( "plane12" );
      plane12.lineId = "line12";

      var plane13 = map.getObjectById( "plane13" );
      plane13.lineId = "line13";

      var plane14 = map.getObjectById( "plane14" );
      plane14.lineId = "line14";

      plane1.animateAlong();
      plane2.animateAlong();
      plane3.animateAlong();
      plane4.animateAlong();
      plane5.animateAlong();
      plane6.animateAlong();
      plane7.animateAlong();
      plane8.animateAlong();
      plane9.animateAlong();
      plane10.animateAlong();
      plane11.animateAlong();
      plane12.animateAlong();
      plane13.animateAlong();
      plane14.animateAlong();


    }
  } ]

  } );