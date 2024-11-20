document.addEventListener("DOMContentLoaded", () => {
  let cards = [
    { id: 1, name: "Leanne Graham", username: "Bret", email: "Sincere@april.biz", address: { city: "Gwenborough" }, company: { name: "Romaguera-Crona" } },
    { id: 2, name: "Ervin Howell", username: "Antonette", email: "Shanna@melissa.tv", address: { city: "Wisokyburgh" }, company: { name: "Deckow-Crist" } },
    { id: 3, name: "Clementine Bauch", username: "Samantha", email: "Nathan@yesenia.net", address: { city: "McKenziehaven" }, company: { name: "Romaguera-Jacobson" } },
    { id: 4, name: "Patricia Lebsack", username: "Karianne", email: "Julianne.OConner@kory.org", address: { city: "South Elvis" }, company: { name: "Robel-Corkery" } },
    { id: 5, name: "Chelsey Dietrich", username: "Kamren", email: "Lucio_Hettinger@annie.ca", address: { city: "Roscoeview" }, company: { name: "Keebler LLC" } },
    { id: 6, name: "Mrs. Dennis Schulist", username: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", address: { city: "South Christy" }, company: { name: "Considine-Lockman" } },
    { id: 7, name: "Kurtis Weissnat", username: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", address: { city: "Howemouth" }, company: { name: "Johns Group" } },
    { id: 8, name: "Nicholas Runolfsdottir V", username: "Maxime_Nienow", email: "Sherwood@rosamond.me", address: { city: "Aliyaview" }, company: { name: "Abernathy Group" } },
    { id: 9, name: "Glenna Reichert", username: "Delphine", email: "Chaim_McDermott@dana.io", address: { city: "Bartholomebury" }, company: { name: "Yost and Sons" } },
    { id: 10, name: "Clementina DuBuque", username: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", address: { city: "Lebsackbury" }, company: { name: "Hoeger LLC" } },
  ];

  // Fetch the stored data from localStorage or set initial cards
  let datas = localStorage.getItem("cards") ? JSON.parse(localStorage.getItem("cards")) : cards;

  // Container for cards display
  let container = document.querySelector(".container");
  container.classList.add("container", "d-flex", "flex-wrap", "justify-content-around", "gap-3");

  // Display cards based on input
  function displayCards(datas) {
    // Clear any existing cards
    container.innerHTML = '';

    datas.forEach(user => {
      let card = document.createElement("div");
      let name = document.createElement("h3");
      let userName = document.createElement("h3");
      let email = document.createElement("p");
      let city = document.createElement("p");
      let company = document.createElement("p");

      // Assign values to elements
      name.textContent = user.name;
      userName.textContent = user.username;
      email.textContent = user.email;
      city.textContent = user.address.city;
      company.textContent = user.company.name;

      // Append elements to card
      card.append(name, userName, email, city, company);
      container.append(card);

      // Style the card
      card.classList.add("card", "p-3", "bg-info");
      card.style.width = "300px";

      // Add click event to redirect to user details page
      card.addEventListener("click", () => {
        window.location.replace(`/user1.html?${user.id}`);
      });
    });
  }

  // Input field for filtering by ID
  let inputField = document.createElement("input");
  inputField.setAttribute("type", "text");
  inputField.setAttribute("placeholder", "kerakli raqamni kiriting");
  inputField.classList.add("form-control", "mb-3");
  document.body.prepend(inputField); // Prepend input field to the body

  // Listen for input changes to filter cards
  inputField.addEventListener("input", () => {
    let inputValue = inputField.value;

    // If input is empty, show all cards
    if (inputValue === "") {
      displayCards(datas);
    } else {
      // Filter the cards by the ID entered in the input
      let filteredData = datas.filter(user => user.id === parseInt(inputValue));
      displayCards(filteredData);
    }
  });

  // Initially display all cards
  displayCards(datas);
});
