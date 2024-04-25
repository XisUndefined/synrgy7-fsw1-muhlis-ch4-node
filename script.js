const people = [
  {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
  },
  {
    id: 2,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
  },
  {
    id: 3,
    name: "Clementine Bauch",
    username: "Samantha",
    email: "Nathan@yesenia.net",
  },
  {
    id: 4,
    name: "Patricia Lebsack",
    username: "Karianne",
    email: "Julianne.OConner@kory.org",
  },
  {
    id: 5,
    name: "Chelsey Dietrich",
    username: "Kamren",
    email: "Lucio_Hettinger@annie.ca",
  },
  {
    id: 6,
    name: "Mrs. Dennis Schulist",
    username: "Leopoldo_Corkery",
    email: "Karley_Dach@jasper.info",
  },
  {
    id: 7,
    name: "Kurtis Weissnat",
    username: "Elwyn.Skiles",
    email: "Telly.Hoeger@billy.biz",
  },
  {
    id: 8,
    name: "Nicholas Runolfsdottir V",
    username: "Maxime_Nienow",
    email: "Sherwood@rosamond.me",
  },
  {
    id: 9,
    name: "Glenna Reichert",
    username: "Delphine",
    email: "Chaim_McDermott@dana.io",
  },
  {
    id: 10,
    name: "Clementina DuBuque",
    username: "Moriah.Stanton",
    email: "Rey.Padberg@karina.biz",
  },
];

const main = () => {
  const table = document.getElementById("table-data");

  table.innerHTML = `
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
    </tr>
  `;

  people.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${data.id}</td>
      <td>${data.name}</td>
      <td>${data.username}</td>
      <td>${data.email}</td>
    `;
    table.appendChild(row);
  });
};

const deleteRow = () => {
  if (people.length !== 0) people.pop();
  else {
    alert("There's no child elements to remove");
  }
  main();
};

const addData = (event) => {
  event.preventDefault();
  const formElement = document.getElementById("append-form");

  if (
    formElement.elements["name"].value !== "" &&
    formElement.elements["username"].value !== "" &&
    formElement.elements["email"].value !== ""
  ) {
    people.push({
      id: people.length + 1,
      name: formElement.elements["name"].value,
      username: formElement.elements["username"].value,
      email: formElement.elements["email"].value,
    });
  }

  formElement.elements["name"].value = "";
  formElement.elements["username"].value = "";
  formElement.elements["email"].value = "";

  main();
};

const searchData = (event) => {
  if (event) {
    event.preventDefault();
  }
  const formElement = document.getElementById("search-form");
  const table = document.getElementById("table-data");
  const query = formElement.elements["search"].value;

  table.innerHTML = `
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Username</th>
      <th>Email</th>
    </tr>
  `;

  people.forEach((data) => {
    if (data.name.includes(query)) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${data.id}</td>
        <td>${data.name}</td>
        <td>${data.username}</td>
        <td>${data.email}</td>
      `;
      table.appendChild(row);
    }
  });
};

main();
