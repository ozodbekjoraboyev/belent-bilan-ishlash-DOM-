let user1 = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
      street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496",
      },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets",
    },
  },
]

document.addEventListener("DOMContentLoaded", () => {
    let container = document.querySelector(".container");
    let gobackBtn = document.querySelector(".goback");
    gobackBtn.addEventListener("click", () => {
      location.replace("/index.html");
    });
    let userId = location.search.slice(1);
    let user = JSON.parse(localStorage.getItem("cards")).find(
      (val) => val.id == userId
    );
  });





  ///////////////////////////////////////////////////////////////////////////////////////////////
