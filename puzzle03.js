
function repeatDown() {
  var count = 0;
  while (count < 2) {
    down ();
    count = count + 1;
  }
}

function repeatRight() {
  var Rcount = 0;
  while (Rcount < 2) {
    right ();
    Rcount = Rcount + 1;
  }
}

function repeatUp() {
  var Ucount = 0;
  while (Ucount < 2) {
    up ();
    Ucount = Ucount + 1;
  }
}

repeatDown();
var firstColorSeen = getColor();
repeatDown();
down();
repeatRight();
setColor(firstColorSeen);
repeatRight();
up();
