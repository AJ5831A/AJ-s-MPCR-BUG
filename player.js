class KHILADI {
  constructor() {
    this.naam = "";
    this.distance = 0;
    this.position = 0;
  }
  readKhiladiGnt() {
    var PLCNT = database.ref("PlayerCnt");
    PLCNT.on("value", function (data) {
      Plstorage = data.val();
    });
  }

  writeKhiladiGnt(n) {
    database.ref("/").update({
      PlayerCnt: n,
    });
  }

  CPF() {
    var f = "ALLPLAYERS/PLAYER" + this.position;
    database.ref(f).set({
      Name: this.naam,
      Doori: this.distance,
    });
  }

  readp() {
    var RP = database.ref("ALLPLAYERS");
    RP.on("value", function (data) {
      readplayer = data.val();
    });
  }
}
