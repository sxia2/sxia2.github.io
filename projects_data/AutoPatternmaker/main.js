// document.getElementById("Armstrong").addEventListener("click", upload, false);
// document.getElementById("download").addEventListener("click", download, false);
var out = "";
var data = "";
var filename = "";
var method = "";
var DXF = "";
function filename_inital(pattern_mentod) {
    if (pattern_mentod == 'Armstrong') {
        filename = 'Armstrong.csv'
        method = 'armstrong'
    } else if (pattern_mentod == 'Others') {
        filename = 'test.csv'
        method = 'Others'

    } else {
        console.log('error in method...')
    }
    upload();
}
function upload() {
    document.getElementById('csvForm').innerHTML = "";
    d3.csv(filename, function (data) {
        for (var i = 0; i < data.length; i++) {
            // console.log(data[i].Name);
            // console.log(data[i].Age);
            out = document.getElementById('csvForm').innerHTML
            out += '<label for="fname">' + data[i].id + ': </label>';
            out += '<input size="4" value="' + data[i].value + '">';
            out += '<br>';
            document.getElementById('csvForm').innerHTML = out;
        }
    });
}
function draw_armstrong() {
    console.log('drawing...')
    // https://maker.js.org/docs/basic-drawing/#It%27s%20Just%20JSON
    var makerjs = require('makerjs');

    var model = {
        models: {
            ring1: new makerjs.models.Ring(40, 100),
            bc1: new makerjs.models.BoltCircle(90, 4, 10),
            bc2: new makerjs.models.BoltCircle(55, 7, 6, 30)
        }
    };

    var svg = makerjs.exporter.toSVG(model);
    DXF = makerjs.exporter.toDXF(model);
    // console.log(DXF)
    return svg


}

function display() {
    data = [["id", "value"]];

    var f_value = d3.selectAll("#csvForm > input")[0];
    var f_id = d3.selectAll("#csvForm > label")[0];
    for (var i = 0; i < f_value.length; i++) {
        data.push([f_id[i].textContent, f_value[i].value]);
    }
    // console.log(data);
    if (method == 'armstrong') {
        console.log('identified as armstrong')
        document.getElementById('canvas').innerHTML = draw_armstrong();

        
    }

    let element = document.getElementById("download");
    // let hidden = element.getAttribute("hidden");

    // if (hidden) {
    //     element.removeAttribute("hidden");
    //  } else {
    //     element.setAttribute("hidden", "hidden");
    //  }
    element.removeAttribute("hidden");
}

function download() {

    data = DXF

    var csvContent = "data:text/csv;charset=utf-8,";
    // data.forEach(function (d, i) {
    //     dataString = d.join("");
    //     csvContent += i < data.length ? dataString + "\n" : dataString;
    // });
    csvContent += String(data);

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "patterns.dxf");
    link.click();
//     console.log(data)
//     var element = document.createElement('a');
//     element.setAttribute('href', 'data:text/plain;charset=utf-8,', + encodeURIComponent(data));
//     element.setAttribute('download', "patterns.dxf");

//     element.style.display = 'none';
//     document.body.appendChild(element);

//     element.click();

//     document.body.removeChild(element);
}