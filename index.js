var fileSelector = null;
var fileList = null;

function loadFileAsText() {
    var fileToLoad = document.getElementById("files").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent) {
        console.log(fileLoadedEvent.target.result);
        fartInMyFace(fileLoadedEvent.target.result);
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
}

// my dumbass really mixed up async and sync
function fartInMyFace(text) {
    // var stuff = getFile(fileList);
    var chart = JSON.parse(text);
    var finalArray = [];
    var final = '';
    for (let i = 0; i < chart.song.notes.length; i++) {
        for (let b = 0; b < chart.song.notes[i].sectionNotes.length; b++) {
            var real = chart.song.notes[i].sectionNotes[b][1] + 1;
            var fart = real - 4; // i have to make these stupid variables????????
            if (real >= 5 && chart.song.notes[i].mustHitSection == false) {
                 finalArray.push([chart.song.notes[i].sectionNotes[b][0], fart, chart.song.notes[i].sectionNotes[b][2]]);
            } else if (chart.song.notes[i].mustHitSection == true) {
                 finalArray.push([chart.song.notes[i].sectionNotes[b][0], real, chart.song.notes[i].sectionNotes[b][2]]);
            }
        }
    }
     finalArray.sort((a, b) => a[0] - b[0]);
    for (let i = 0; i < finalArray.length; i++) {
        final = final + finalArray[i][0].toString() + '-' + finalArray[i][1].toString() + '-' + finalArray[i][2].toString() + '-';
    }
    final =  final.slice(0, final.length - 1);
    final = final + '=';
    var x = document.getElementById('files');
    var btn = document.getElementById('fart');
    var old = document.getElementById('old');
    document.body.removeChild(x);
    document.body.removeChild(btn);
    document.body.removeChild(old);
    var bruh = document.createElement('p');
    bruh.innerHTML = final;
    document.body.appendChild(bruh);
}
