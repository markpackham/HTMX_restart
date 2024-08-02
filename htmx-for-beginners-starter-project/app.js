import express from "express";
import BOOKS_DATA from "./data/data.js";
import createHomepageTemplate from "./views/index.js";
import createListTemplate from "./views/list.js";
import createBookTemplate from "./views/book.js";
import createEditFormTemplate from "./views/edit.js";

// create app
const app = express();
app.use(express.urlencoded({ extended: false }));

// static assets
app.use(express.static("public"));

// routes
app.get("/", (req, res) => {
  res.send(createHomepageTemplate());
});

app.get("/books", (req, res) => {
  res.send(createListTemplate());
});

app.post("/books", (req, res) => {
  const { title, author } = req.body;
  const id = Math.random().toString();

  BOOKS_DATA.push({ id, title, author });

  res.redirect(`/books/${id}`);
});

// Runs when POST request made for book
app.get("/books/:id", (req, res) => {
  const { id } = req.params;
  const book = BOOKS_DATA.find((b) => b.id === id);

  res.send(createBookTemplate(book));
});

app.delete("/books/:id", (req, res) => {
  const id = req.params.id;
  // Book index
  const indx = BOOKS_DATA.findIndex((b) => b.id === id);
  // Remove 1
  BOOKS_DATA.splice(indx, 1);

  // htmx demands for us to send a response
  // it is fine if we send an empty response
  // we want to replace the inner html of the Delete button with nothing
  res.send();
});

app.put("/books/:id", (req, res) => {
  const { title, author } = req.body;
  const { id } = req.params;

  const updatedBook = { title, author, id };

  const indx = BOOKS_DATA.findIndex((b) => b.id === id);
  BOOKS_DATA[indx] = updatedBook;

  res.send(createBookTemplate(updatedBook));
});

app.get("/books/edit/:id", (req, res) => {
  const book = BOOKS_DATA.find((b) => b.id === req.params.id);

  res.send(createEditFormTemplate(book));
});

// listen to port
app.listen(3000, () => {
  console.log("App listening on port 3000");
});
