<h1 align="center">
    <img src="https://raw.githubusercontent.com/xSallus/dev.savings/master/src/icons/logo.svg" />
</h1>

> An web aplication designed to help administrate your finances

---

## Summary of Contents

- [Project Status](#project-status)
- [Features](#features)
- [Tools Used](#tools-used)
- [Embed Tecnologies](#embed-tecnologies)
- [How to run on Your Machine](#how-to-run-on-your-machine)
- [Known Bugs](#known-bugs)
- [Author](#author)

---

## Project Status

- Working currently finished.
- Working tree clean.

---

## Features

- [x] Add transactions, such as book aquire, a freelance receipt, etc.
- [x] Save transactions to a database, such as MongoDB.
- [x] Remove transactions.
- [x] Edit a transaction.
- [x] Select between three themes, <i>Normal, Dark and Rocket</i>..

---
## Tools Used

- [Visual Studio Code&trade;](https://code.visualstudio.com/)
- [Mongoose&trade;](https://mongosejs.com)
- [GoogleChrome&trade](https://google.com/chrome)
- [OperaStable&trade](https://opera.com)

---

## Embed Tecnologies

- [HTML 5](https://developer.mozilla.org/pt-BR/docs/Web/HTML/HTML5) <img src="https://cdn.iconscout.com/icon/free/png-512/html5-19-722707.png" height="12px"/>
- [CSS3](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" height="12px"/>
- [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnezP43GZwqlUjVNQ1LyyXnY7MzjhJn3NqKQ&usqp=CAU" height="12px" />
- [ReactJS](https://reactjs.org/docs/getting-started.html) <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png" height="12px" />
- [NextJS](https://nextjs.org/docs) <img src="https://raw.githubusercontent.com/xSallus/dev.savings/master/src/icons/next.svg" height="12px" />

---
## How to run on your machine

- First, clone ths repo using git bash:
```bash
$ git clone https://github.com/xSallus/dev.finances.git
```
Then setup a MongoDB cluster, a collection and a database. How to do it is out of this scope.

Create a next.config,js file with the following:
```js
module.exports = {
  env: {
    MONGO_URI: <your_mongodb_connection_uri>,
    PORT: <the_port_used_for_localhost_connection>
  }
}

// PORT is commonoly '3000' under development
```
Start node local server by running:
```bash
$ yarn dev
```
> Enjoy! :D

---

## Known Bugs

- When updating, deleting or adding new transactions, cards may not update values before full reload

---

# Author

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYVJlVcxIsdw-VHpQugNpWnhcqfU0lFLpE7A&usqp=CAU" height="12px" /> [Salomão de Souza Vasconcelos](https://github.com/xSallus/)
