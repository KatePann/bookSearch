const React = require('react');
const Layout = require('./Layout');

function Registration() {
  return (
    <Layout>
      <form className="registration" action="/registration" method="POST" id="loginForm" style={{ maxWidth: '30%' }}>
        <div className="form-group">
          <label htmlFor="inputEmail">Имя</label>
          <input name="name" type="name" className="form-control" id="inputName" placeholder="Name" />
        </div>
        <div className="form-group">
          <label htmlFor="inputEmail">Email</label>
          <input name="email" type="email" className="form-control" id="inputEmail" placeholder="Email" />
        </div>
        <div className="form-group">
          <label htmlFor="inputPassword">Пароль</label>
          <input name="password" type="password" className="form-control" id="inputPassword" placeholder="Password" />
        </div>

        <button type="submit" className="btn btn-primary">Sign in</button>
      </form>
    </Layout>
  );
}

module.exports = Registration;
