const React = require('react');

const Layout = require('./Layout');

function Home() {
  return (
    <Layout>

      <script defer src="/js/click.js" />

      <div className="headerBook">
        <div className="row1">
          <h1>
            Комната без книг,
            <br />
            {' '}
            как тело без души!
          </h1>
        </div>
        <div className="row2">
          <h2>Найди свою книгу</h2>
          <div className="input-group mb-3 search">
            <input id="search" type="search" className="form-control" placeholder="Введи автора или название" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button id="submit" type="button" className="btn btn-secondary">Найти</button>
            </div>
          </div>
          <img src="https://bookmix.ru/notes/img/notes_1456089545.jpg" alt="" />
        </div>
      </div>

      <div className="container">
        {/* {allBooks.map((el) => ( */}
        {/* <div className="card">
            <img src="https://www.assessor.ru/images/malenkie-zhenschiny-film.jpg" alt="" />
            <div className="bottom">
              <h3 className="title">Название книги</h3>
              <p className="amount"> 3290 г.</p>
            </div>
          </div> */}
        {/* ))} */}
      </div>
    </Layout>
  );
}

module.exports = Home;
