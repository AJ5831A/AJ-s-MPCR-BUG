class PTR {
  constructor() {
    this.heading = createElement("h1");
    this.inputbox = createInput("YOUR NAME HERE");
    this.button = createButton("KHELO!!");
    this.greeting = createElement("h1");
  }

  display() {
    this.heading.html("PLEASE REGISTER HERE!!");
    this.heading.position(450, 100);
    this.inputbox.position(500, 300);
    this.button.position(500, 400);
    this.button.mousePressed(() => {
      this.inputbox.hide();
      this.button.hide();
      Plstorage = Plstorage + 1;
      player.position = Plstorage;
      player.writeKhiladiGnt(Plstorage);
      player.naam = this.inputbox.value();
      this.greeting.position(250, 250);
      this.greeting.html("RAAM RAAM " + player.naam);
      player.CPF();
    });
  }
}
