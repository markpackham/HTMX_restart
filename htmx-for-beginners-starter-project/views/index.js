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
  <div class="search" style="text-align: center">

  Post requests occur when words keyed into the field then either "Enter" hit or cursor leaves field, has a delay of 300 milliseconds 
    <input 
    type="search" 
    name="search"
    placeholder="search books by title..."
    hx-post="/books/search"
    tx-trigger="keyup changed delay:300ms"
    hx-target=".book-list"
    />

  </div>

        <div class="book-list">
          <!-- using hx-swap="outerHTML" rather than the default "innerHTML", the entire element gets replaced rather than just "Show Button" -->
          <!-- <button hx-get="/books" hx-swap="outerHTML">Show Books</button> -->

          <!-- Find target and inject right before end of target via hx-swap="beforeend" so we don't replace everything before </div> -->
          <!-- <button hx-get="/books" hx-swap="beforeend" hx-target=".book-list">Show Books beforeend</button>

          <button hx-get="/books" hx-swap="afterend" hx-target=".book-list">Show Books afterend</button> -->

          <!-- Find closest element using keyword eg the div
          <button hx-get="/books" hx-target="closest div">Show Books</button> -->

          <!--  innerHTML is the default so we don't need to actually include hx-swap="innerHTML"
          <button hx-get="/books" hx-swap="innerHTML" hx-target=".book-list">Show Books afterend</button> -->

          <!-- If we add hx-trigger="dblclick" then only double clicks will work for the button -->
          <!-- <button hx-get="/books" hx-target=".book-list" hx-trigger="dblclick">Show Books</button> -->

          <button hx-get="/books" 
          hx-target=".book-list" 
          >Show Books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          
          <form 
          hx-post="/books" 
          hx-on::after-request="document.querySelector('form').reset()" 
          hx-target=".book-list ul"
          hx-swap="beforeend"
          >

            <input type="text"
            name="title"
            placeholder="title"
            required
            >

            <input type="text"
            name="author"
            placeholder="author"
            required
            >

            <!-- We can use a double colon "::"" instead of :htmx: for htmx events -->
            <!-- hx-on:htmx:after-request=""  -->
            <button
           >Add Book</button>

          </form>
        </div>
      </main>
    </body>
  </html>
`;

export default createHomepageTemplate;
