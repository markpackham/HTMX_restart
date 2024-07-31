// Use VS Code Inline Html plugin for Emmet assistance via /*html*/

const createHomepageTemplate = () => /*html*/ `
  <!DOCTYPE html>
  <html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@2.0.1" integrity="sha384-QWGpdj554B4ETpJJC9z+ZHJcA/i59TyjxEPXiiUgN2WmTyV5OEZWCD6gQhgkdpB/" crossorigin="anonymous"></script>
      <script src="https://unpkg.com/htmx.org@1.9.12"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div class="book-list">
          <!-- using hx-swap="outerHTML" rather than the default innerHTML, the entire element gets replaced rather than just "Show Button" -->
          <!-- <button hx-get="/books" hx-swap="outerHTML">Show Books</button> -->

          <!-- Find target and inject right before end of target via hx-swap="beforeend" so we don't replace everything before </div> -->
          <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <!-- form template here later -->
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
