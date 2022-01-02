document.getElementById("upload").addEventListener("change", upload, false);
document.getElementById("download").addEventListener("click", download, false);
var out = "";
function upload(e) {
    document.getElementById('csvForm').innerHTML = "";

    var data = null;
    var file = e.target.files[0];
    // var file = "test.csv";

    console.log(file);

    var reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function (event) {
        var csvData = event.target.result;

        var parsedCSV = d3.csv.parseRows(csvData);

        parsedCSV.forEach(function (d, i) {
            if (i == 0) return true; // skip the header
            if (d.constructor === Array) {
                // console.log(d);
                // document.getElementById(d[0]).value = d[1];
                createForm(d);
            }
        });

    }
}

function createForm(csv) {
    // console.log(out);

    for (var i in csv) {
        out += '<input value="' + csv[i] + '">';
    }
    document.getElementById('csvForm').innerHTML = out;
    out += '<br>';
}

function download(e) {

    data = [["id", "value"]];

    var f = d3.selectAll("#csvForm > input")[0];

    f.forEach(function (d, i) {
        data.push([d.id, d.value]);
    });

    console.log(data);

    var csvContent = "data:text/csv;charset=utf-8,";
    data.forEach(function (d, i) {
        dataString = d.join(",");
        csvContent += i < data.length ? dataString + "\n" : dataString;
    });

    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "FormData.csv");
    link.click();
}