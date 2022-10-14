const React = require('react');
const Layout = require('./Layout');

function OneBook({ descriptions }) {
  return (
    <Layout>
      <div className="overlay">
        <div className="overlay-inner">
          <button className="close"><i className="fasfa-times" /></button>
          <div className="inner-box">
            <img src={descriptions.volumeInfo.imageLinks?.thumbnail} alt="" />
            <div className="info">
              <h1>{descriptions.volumeInfo.title}</h1>
              <h3>{descriptions.volumeInfo.authors}</h3>
              <br />
              <h4>
                {descriptions.volumeInfo.publisher}
                <span>{descriptions.volumeInfo.publishedDate}</span>
              </h4>
              <a href={descriptions.volumeInfo.previewLink}>Купить</a>
            </div>
          </div>
          <h4 className="description">{descriptions.volumeInfo.description}</h4>
        </div>
      </div>
    </Layout>
  );
}

module.exports = OneBook;
