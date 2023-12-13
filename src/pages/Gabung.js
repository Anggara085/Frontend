import React, { Fragment } from "react";
import Menu from "./Menu";

function Gabung() {
  return (
    <Fragment>
      <main
        className="login-body"
        style={{ backgroundImage: 'url("assets/img/BackgroundLogin.jpg")' }}
      >
        {/* Login Admin */}
        <form
          className="form-default"
          action="BackgroundLogin.jpg"
          method="POST"
        >
          <div className="login-form">
            {/* logo-login */}
            <div className="logo-login">
              <a href="index.html">
                <img src="assets/img/logo/loder.png" alt="" />
              </a>
            </div>
            <h2>Registrasi</h2>
            <div className="form-input text-left">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                name="name"
                placeholder="Masukan nama lengkap"
              />
            </div>
            <div className="form-input text-left">
              <label htmlFor="name">Alamat Email</label>
              <input type="email" name="email" placeholder="Alamat Email" />
            </div>
            <div className="form-input text-left">
              <label htmlFor="name">Password</label>
              <input
                type="password"
                name="password"
                placeholder="Masukan password"
              />
            </div>
            <div className="form-input text-left">
              <label htmlFor="name">Konfirmasi Password</label>
              <input
                type="password"
                name="password"
                placeholder="Konfirmasi Password"
              />
            </div>
            <div className="col-2 mx-auto back pt-30">
              <a href="/Login" className="btn btn3">
                Gabung
              </a>
            </div>
            {/* Forget Password */}
            <a href="/Login" className="registration text-left">
              Masuk
            </a>
          </div>
        </form>
        {/* /end login form */}
      </main>
    </Fragment>
  );
}

export default Gabung;
