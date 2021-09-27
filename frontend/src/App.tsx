/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from '@emotion/react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { AddBook } from './AddBook';
import { BookPage } from './BookPage';
import { Header } from './Header';
import { HomePage } from './HomePage';
import { NotFoundPage } from './NotFoundPage';
import { SearchPage } from './SearchPage';
import { SignInPage } from './SignInPage';
import { fontFamily, fontSize, gray2 } from './Styles';

function App() {
  return (
    <BrowserRouter>
      <div
        css={css`
          font-family: ${fontFamily};
          font-size: ${fontSize};
          color: ${gray2};
        `}
        className="App"
      >
        <Header />
        <Switch>
          <Redirect from="/home" to="/" />
          <Route exact path="/" component={HomePage} />
          <Route path="/signin" component={SignInPage} />
          <Route path="/add_book" component={AddBook} />
          <Route path="/search" component={SearchPage} />
          <Route path="/books/:bookId" component={BookPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
