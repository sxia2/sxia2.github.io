function draw_armstrong(data) {

    var measurements = {};
    data.forEach(function (item) {
        // console.log(item)
        measurements[item[0]] = item[1];
    });
    console.log(measurements)
    var SVG = []
    var DXF = []
    console.log('drawing...')
    // https://maker.js.org/docs/basic-drawing/#It%27s%20Just%20JSON
    var makerjs = require('makerjs');
    // #1
    // front bodice
    console.log('front bodice...')
    var line = {
        type: 'line',
        origin: [0, 0],
        end: [50, 50]
    };

    var circle = {
        type: 'circle',
        origin: [0, 0],
        radius: 50
    };

    var pathObject = { myLine: line, myCircle: circle };

    var model = { paths: pathObject };
    var svg = makerjs.exporter.toSVG(model);
    // console.log(svg)
    var dxf = makerjs.exporter.toDXF(model, { usePOLYLINE: true, units: 'inch' })
    SVG.push(svg);
    DXF.push(dxf);
    // #2
    // front bodice
    console.log('front bodice...')
    var line = {
        type: 'line',
        origin: [0, 0],
        end: [50, 50]
    };

    var circle = {
        type: 'circle',
        origin: [0, 0],
        radius: 50
    };

    var pathObject = { myLine: line, myCircle: circle };

    var model = { paths: pathObject };
    var svg = makerjs.exporter.toSVG(model);
    // console.log(svg)
    var dxf = makerjs.exporter.toDXF(model, { usePOLYLINE: true, units: 'inch' })
    SVG.push(svg);
    DXF.push(dxf);

    // #3
    // front bodice
    console.log('front bodice...')
    var line = {
        type: 'line',
        origin: [0, 0],
        end: [50, 50]
    };

    var circle = {
        type: 'circle',
        origin: [0, 0],
        radius: 50
    };

    var pathObject = { myLine: line, myCircle: circle };

    var model = { paths: pathObject };
    var svg = makerjs.exporter.toSVG(model);
    // console.log(svg)
    var dxf = makerjs.exporter.toDXF(model, { usePOLYLINE: true, units: 'inch' })
    SVG.push(svg);
    DXF.push(dxf);
    // #4
    // front bodice
    console.log('front bodice...')
    var line = {
        type: 'line',
        origin: [0, 0],
        end: [50, 50]
    };

    var circle = {
        type: 'circle',
        origin: [0, 0],
        radius: 50
    };

    var pathObject = { myLine: line, myCircle: circle };

    var model = { paths: pathObject };
    var svg = makerjs.exporter.toSVG(model);
    // console.log(svg)
    var dxf = makerjs.exporter.toDXF(model, { usePOLYLINE: true, units: 'inch' })
    SVG.push(svg);
    DXF.push(dxf);


    // #5
    // front skirt
    console.log('front skirt...')
    var line = {
        type: 'line',
        origin: [0, 0],
        end: [50, 50]
    };

    var circle = {
        type: 'circle',
        origin: [0, 0],
        radius: 50
    };

    var pathObject = { myLine: line, myCircle: circle };

    var model = { paths: pathObject };
    var svg = makerjs.exporter.toSVG(model);
    // console.log(svg)
    var dxf = makerjs.exporter.toDXF(model, { usePOLYLINE: true, units: 'inch' })
    SVG.push(svg);
    DXF.push(dxf);



    // for (var i = 0; i < 5; i++) {
    //     // console.log(i)
    //     SVG.push(svg);
    //     DXF.push(dxf);
    // }
    // // console.log(SVG)
    // // console.log(DXF)
    return {
        svgs: SVG,
        dxfs: DXF
    };


}
