const React = require('react');

function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* подключаем бутстрап */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossOrigin="anonymous" />
        <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" crossOrigin="anonymous" />
        {/* <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossOrigin="anonymous" /> */}
        {/* подключаем css файлы */}
        <link rel="stylesheet" href="/css/style.css" />
        <title>BookSaerch</title>
      </head>
      <body>
        <nav className="navbar navbar-expand-lg bg-light">

          <div className="container-fluid">
            <a className="navbar-brand" href="/">Панель навигации</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Переключатель навигации">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Главная</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/registration">Регистрация</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/autorization">Авторизация</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/logout">Выход</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        { children }
      </body>

    </html>
  );
}

module.exports = Layout;
