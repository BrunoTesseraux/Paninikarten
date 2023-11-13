function createPaniniCard() {
  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const albums = document.getElementById("albums").value;
  const backgroundLink = document.getElementById("backgroundLink").value;

  class Musician {
    constructor(name, age, albums, backgroundLink) {
      this.name = name;
      this.age = age;
      this.albums = albums;
      this.backgroundLink = backgroundLink;
    }
  }

  const musician = new Musician(name, age, albums, backgroundLink);

  const paniniCardContainer = document.getElementById("paniniCard");

  const newPaniniCard = document.createElement("article");

  newPaniniCard.innerHTML = `<label>Künstlername:</label> ${musician.name}<br>
        <label>Alter:</label> ${musician.age}<br>
        <label>Verkaufte Alben:</label> ${musician.albums}</div>`;
  newPaniniCard.classList.add("panini-card");

  newPaniniCard.style.background = "url('" + backgroundLink + "')";
  newPaniniCard.style.backgroundSize = "cover";
  newPaniniCard.style.backgroundPosition = "center";

  paniniCardContainer.appendChild(newPaniniCard);

  document.getElementById("paniniForm").reset();
}
