// just wait until they find out i steal code from other sites
function fartInMyFace(){
  var stuff = document.getElementById("beep").value;
  var chart = JSON.parse(stuff);
  var finalArray = [];
  var final = '';
  for (let i = 0; i < chart.song.notes.length; i++){
    for (let b = 0; b < chart.song.notes[i].sectionNotes.length; b++){
      var real = chart.song.notes[i].sectionNotes[b][1] + 1;
      var fart = real-4; // i have to make these stupid variables????????
      if(real >= 5 && chart.song.notes[i].mustHitSection == false){
        finalArray.push([chart.song.notes[i].sectionNotes[b][0], fart]);
      } else if(chart.song.notes[i].mustHitSection == true) {
        finalArray.push([chart.song.notes[i].sectionNotes[b][0], real]);
      }
    }
  }
  finalArray.sort((a, b) => a[0] - b[0]);
  for (let i = 0; i < finalArray.length; i++){
    final = final + finalArray[i][0].toString() + '-' + finalArray[i][1].toString() + '-';
  }
  final = final.slice(0, final.length - 1);
  final = final + '=';
  var x = document.getElementById('beep');
  var btn = document.getElementById('fart');
  var text = document.getElementById('iHaveToMakeSoManyStupidIds');
  document.body.removeChild(x);
  document.body.removeChild(btn);
  document.body.removeChild(text);
  var bruh = document.createElement('p');
  bruh.innerHTML = final;
  document.body.appendChild(bruh);
}
