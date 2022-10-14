const React = require('react');
const Layout = require('./Layout');

function Autorization() {
  return (
    <Layout>
      <script defer src="/js/login.js" />

      <form className="autorization" action="/autorization" method="POST" style={{ maxWidth: '30%' }}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">Email</label>
          <input name="email" type="email" className="form-control" id="exampleInputName" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>

        <h1 className="loginError" />
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </Layout>
  );
}

module.exports = Autorization;
