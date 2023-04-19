const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "name",
      message: "What is your name?",
    },
    {
      type: "input",
      name: "location",
      message: "What is your location?",
    },
    {
      type: "input",
      name: "bio",
      message: "Write a short bio about yourself.",
    },
    {
      type: "input",
      name: "linkedin",
      message: "What is your LinkedIn URL?",
    },
    {
      type: "input",
      name: "github",
      message: "What is your GitHub profile URL?",
    },
  ])
  .then((userInput) => {
    const portfolioPage = generateHTMLPortfolio(userInput);

    fs.writeFile("portfolio.html", portfolioPage, (err) =>
      err
        ? console.log(err)
        : console.log("Successfully created your profile - portfolio.html")
    );
  });

const generateHTMLPortfolio = (userInput) =>
  `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <title>Cover Template for Bootstrap</title>
  </head>
  <body class="text-center">
    <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      <main role="main" class="inner cover">
        <h1 class="cover-heading">My name is ${userInput.name}</h1>
        <h2 class="cover-subheading">I am based in ${userInput.location}</h2>
        <p class="lead">${userInput.bio}</p>
        <p class="lead">
          <a href="https://www.linkedin.com/in/${userInput.linkedin}" class="btn btn-lg btn-secondary">GitHub Link!</a>
          <a href="https://github.com/${userInput.github}" class="btn btn-lg btn-secondary">Linkedin Link!</a>
        </p>
      </main>
    </div>
  </body>
</html>`;
