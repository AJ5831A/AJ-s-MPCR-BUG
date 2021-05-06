class KHEL {
  constructor() {}
  readGameState() {
    var GMVL = database.ref("GameState");
    GMVL.on("value", function (data) {
      Gmstorage = data.val();
    });
  }

  writeGameState(v) {
    database.ref("/").update({
      GameState: v,
    });
  }

  startTheGame() {
    if (Gmstorage == 0) {
      patra = new PTR();
      player = new KHILADI();
      player.readKhiladiGnt();
      patra.display();
    }
    cs1 = createSprite(10, 10, 50, 50);
    cs4 = createSprite(70, 10, 50, 50);
    cararray.push(cs1);
    cararray.push(cs4);
  }

  playTheGM() {
    patra.greeting.hide();
    patra.heading.hide();
    patra.button.hide();
    patra.inputbox.hide();
    player.readp();
    var i = 0;
    var x = 200;
    for (var plr in readplayer) {
      console.log("plr"+x+" "+plr+" " +player.distance);
      cararray[i].x = x;
      cararray[i].y = displayHeight - readplayer[plr].distance;
      i = i + 1;
      x = x + 400;
    }
    drawSprites();

 

    if (keyDown(UP_ARROW)) {
      player.distance = player.distance + 1;
      player.CPF();
    }
  }
}
