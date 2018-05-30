var canvas = document.querySelector('canvas');
canvas.width = 1024;
canvas.height = 600;

var c = canvas.getContext('2d');

function rectangle(){
    var x = Math.floor(Math.random() * 1025); 
    var y = Math.floor(Math.random() * 601);
    var w = Math.floor(Math.random() * 301) + 1;
    var h = Math.floor(Math.random() * 301) + 1;

    if (c.getImageData(x, y, w, h).data.includes(255) === false && x + w < 1025 && y + h < 601) { // x+w < 1025 ir y+h < 601, kad nepaliktu nepanaudotu pixeliu apacioje ir desineje
        c.fillStyle = getRandomColor();
        c.fillRect(x, y, w, h);
    } else {
        rectangle();
    }
}
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
      for (var i = 0; i < 6; i++ ) {
          color += letters[Math.floor(Math.random() * 16)];
      }
    return color;
}

function fillRect(){                                // Bonus uzduotis
    setInterval(function () { rectangle() }, 1);
}