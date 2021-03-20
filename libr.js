function touching(o1, o2) {
    if ((o1.x - o2.x < o2.width / 2 + o1.width / 2) && 
    (o2.x - o1.x < o2.width / 2 + o1.width / 2) && 
    (o1.y - o2.y < o2.height / 2 + o1.height / 2) && 
    (o2.y - o1.y < o2.height / 2 + o1.height / 2)) {
      return true;
    } else {
      return false;
    }
  }
  function boingboing(a, b) {

    if (a.x - b.x < b.width/2 + a.width/2
        && b.x - a.x < b.width/2 + a.width/2) {
      a.velocityX = a.velocityX * (-1);
      b.velocityX = b.velocityX * (-1);
    }
    if (a.y - b.y < b.height/2 + a.height/2
      && b.y - a.y < b.height/2 + a.height/2){
      a.velocityY = a.velocityY * (-1);
      b.velocityY = b.velocityY * (-1);
    }
    }