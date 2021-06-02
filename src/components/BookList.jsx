import { Component } from "react";
import { Container, Row } from "react-bootstrap";
import SingleBook from "./singleBookComponent/SingleBook.jsx";

import Fantasy from "../json/fantasy.json";
import History from "../json/history.json";
import Horror from "../json/horror.json";
import Romance from "../json/romance.json";
import Scifi from "../json/scifi.json";
import FilterBooksList from "./FilterBooksList.jsx";

class BookList extends Component {
  state = {
    categories: [...Fantasy, ...Horror, ...History, ...Romance, ...Scifi],
    query: "",
  };

  // getFilteredBooks = (event) =>
  //   this.state.categories.filter((book) =>
  //     book.title
  //       .toLocaleLowerCase()
  //       .includes(event.currentTarget.value.toLocaleLowerCase())
  //   );

  render() {
    return (
      <Container>
        <FilterBooksList
          passQuery={(input_value) => this.setState({ query: input_value })}
        />

        <h2 className="text-center">List Of Books</h2>
        <Row className="m-2 no-gutters">
          {this.state.categories
            .filter(
              (book) =>
                book.title.toLowerCase().indexOf(this.state.query) !== -1
            )
            .map((book) => (
              <SingleBook
                title={book.title}
                img={book.img}
                key={book.asin}
                category={book.category}
                price={book.price}
              />
            ))}
        </Row>
      </Container>
    );
  }
}
export default BookList;
