import BOOKS_DATA from "../data/data";
import createBookTemplate from "./book";

const createListTemplate = () => /*html*/ `
<ul>
    ${BOOKS_DATA.map((book) => createBookTemplate(book))}
</ul>
`;
