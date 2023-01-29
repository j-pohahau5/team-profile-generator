// myTeam function is using the data to correctly display the app
function myTeam(teamArr) {
  // empty array to take in all the html strings with data
  const htmlTeam = [];
  //  myManager functIon is inserting the correct data in to the html string and pushing it in to an array
  const myManager = (manager) => {
    // the manager html template
    let htmlManager = `
        <div class="manager-card container bg-light mb-2">
                <h2 class="manager-name container">${manager.name}</h2>
                <ul class="manger-info container">
                    <li class="id col">ID: ${manager.id}</li>
                    <li class="email col">Email: <a href="mailto: ${manager.email}">${manager.email}</a></li>
                    <li class="office-number col">Office Number: ${manager.officeNumber}</li>
                </ul>
            </div>
        `;
    // pushing manager template in to htmlTeam array
    htmlTeam.push(htmlManager);
  };

  //  myEngineer functIon is inserting the correct data in to the html string and pushing it in to an array
  const myEngineer = (engineer) => {
    // the engineer html template
    let htmlEngineer = `
        <div class="engineer-card container bg-light mb-2">
                <h2 class="engineer-name container">${engineer.name}</h2>
                <ul class="engineer-info container">
                    <li class="id col">ID: ${engineer.id}</li>
                    <li class="engineer-email col">Email: <a href="mailto: ${engineer.email}">${engineer.email}</a></li>
                    <li class="engineer-username col">Github: <a href="https://github.com/${engineer.userName}">${engineer.userName}</a></li>
                </ul>
            </div>
        `;
    // pushing engineer template in to htmlTeam array
    htmlTeam.push(htmlEngineer);
  };

  //  myIntern functIon is inserting the correct data in to the html string and pushing it in to an array
  const myIntern = (intern) => {
    // the intern html template
    let htmlIntern = `
        <div class="intern-card container bg-light mb-2">
                <h2 class="intern-name container">${intern.name}</h2>
                <ul class="intern-info container">
                    <li class="intern-id col">ID: ${intern.id}</li>
                    <li class="intern-email col">Email: <a href="mailto: ${intern.email}">${intern.email}</a></li>
                    <li class="intern-school col">${intern.school}</li>
                </ul>
            </div>
        `;
    // pushing intern template in to htmlTeam array
    htmlTeam.push(htmlIntern);
  };
  //    a for loop so i can pass each function data and to create as many times ass needed
  for (var i = 0; i < teamArr.length; i++) {
    // saying if the role equals Manager then passing that data into the myManager function
    if (teamArr[i].getRole() === "Manager") {
      myManager(teamArr[i]);
    }
    // saying if the role equals Engineer then passing that data into the myManager function
    if (teamArr[i].getRole() === "Engineer") {
      myEngineer(teamArr[i]);
    }
    // saying if the role equals Intern then passing that data into the myManager function
    if (teamArr[i].getRole() === "Intern") {
      myIntern(teamArr[i]);
    }
  }
  // returning the joined arrays a string
  return htmlTeam.join("");
}

// creating an html template the being passed multiple div templates
function generateHTML(teamArr) {
  // giving the README  template literal so it is structured  and receives data input in the correct area
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <title>Document</title>
    </head>
    <body>
        <header>
            <h1 class="team-card">My Team</h1>
        </header>
    
        <main> ${myTeam(teamArr)} </main>
    
        <footer>
    
        </footer>
    
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
    </body>
    </html>
  `;
}

// exporting the function generateHTML
module.exports = generateHTML;
