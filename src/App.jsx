import alvin from "./assets/image/alvin.jpg";
import simon from "./assets/image/simon.jpg";
import theodore from "./assets/image/theodore.jpg";


function Team() {
  return (
    <section id="team">
      <main>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <h1 className="fw-light text-center">Team Pembuat</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

              {/* Card 1 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={alvin}
                    className="card-img-top"
                    alt="Foto Anggota 1"
                    height="225"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Alvin Seville
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 2 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={simon}
                    className="card-img-top"
                    alt="Foto Anggota 2"
                    height="225"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Simon Seville
                    </p>
                  </div>
                </div>
              </div>

              {/* Card 3 */}
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src={theodore}
                    className="card-img-top"
                    alt="Foto Anggota 3"
                    height="225"
                    style={{ objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <p className="card-text">
                      Theodore Seville
                    </p>
                  </div>
                </div>
              </div>

              {/* card lain bisa ditambah di sini */}
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}


function Contact() {
  return (
    <section id="contact">
      <h1 className="fw-light text-center">Hubungi Kontak:</h1>
      <div className="d-flex gap-2 justify-content-center py-5">

        <a
          href="https://www.facebook.com/AlvinAndTheChipmunks/"
          target="_blank"
          rel="noopener noreferrer"
          className="badge bg-primary-subtle text-primary-emphasis rounded-pill text-decoration-none"
        >
          Facebook
        </a>

        <a
          href="https://whatsapp.com/channel/0029Va4K0PZ5a245NkngBA2M "
          target="_blank"
          rel="noopener noreferrer"
          className="badge bg-success-subtle text-success-emphasis rounded-pill text-decoration-none"
        >
          Whatsapp
        </a>

        <a
          href="https://www.instagram.com/officialalvinandthechipmunks/"
          target="_blank"
          rel="noopener noreferrer"
          className="badge bg-danger-subtle text-danger-emphasis rounded-pill text-decoration-none"
        >
          Instagram
        </a>

        <a
          href="https://t.me/joinchat/AAAAAFlFjao0ol2o_JTvxA"
          target="_blank"
          rel="noopener noreferrer"
          className="badge bg-info-subtle text-info-emphasis rounded-pill text-decoration-none"
        >
          Telegram
        </a>

        <a
          href="https://x.com/officialalvinnn"
          target="_blank"
          rel="noopener noreferrer"
          className="badge bg-dark-subtle text-dark-emphasis rounded-pill text-decoration-none"
        >
          X
        </a>

      </div>
    </section>
  )
}


function Footer() {
  return (
    <section id="footer">
      <div className="container">
        <footer className="py-3 my-4">
          <ul className="nav justify-content-center border-bottom pb-3 mb-3">
            <li className="nav-item">
              <a href="#home" className="nav-link px-2 text-body-secondary">Home</a>
            </li>
            <li className="nav-item">
              <a href="#book" className="nav-link px-2 text-body-secondary">Book</a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-link px-2 text-body-secondary">Team</a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link px-2 text-body-secondary">Contact</a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link px-2 text-body-secondary">About</a>
            </li>
          </ul>
          <p className="text-center text-body-secondary">© 2025 NF ACADEMY</p>
        </footer>
      </div>
    </section>
  )
}

function App() {
  return (
    <>
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a href="#home" className="d-inline-flex align-items-center link-body-emphasis text-decoration-none">
              <i className="fa-solid fa-book-skull fa-2xl" style={{ color: "#74C0FC" }}></i>
              <span className="ms-2 fs-4">BookStore</span>
            </a>
          </div>

          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li><a href="#home" className="nav-link px-2">Home</a></li>
            <li><a href="#book" className="nav-link px-2">Book</a></li>
            <li><a href="#team" className="nav-link px-2">Team</a></li>
            <li><a href="#contact" className="nav-link px-2">Contact</a></li>
          </ul>

          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">Login</button>
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </header>

        {/* Hero */}
        <section id="home">
          <div className="container my-5">
            <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg d-flex justify-content-center">
              <div className="col-lg-7 p-3 p-lg-5 pt-lg-3 text-center">
                <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                  Raditya Dika: Marmut Merah Jambu
                </h1>
                <p className="lead">
                  Marmut Merah Jambu adalah kumpulan tulisan komedi Raditya Dika. sebagian besar dari tiga belas tulisan ngawur di dalamnya adalah pengalaman dan observasi Raditya dalam menjalankan hal paling absurd di dunia: jatuh cinta.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-center mb-4 mb-lg-3">
                  <button type="button" className="btn btn-primary btn-lg px-4 me-md-2 fw-bold">Beli</button>
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4">Detail</button>
                </div>
              </div>
              <div className="col-lg-4 p-0 overflow-hidden shadow-lg d-flex justify-content-center">
                <img
                  className="rounded-lg-3"
                  src="https://bukune.com/wp-content/uploads/2017/08/marmut-merah-jambu.jpg"
                  alt="Marmut Merah Jambu"
                  height="400"
                  width="300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product */}
        <section id="book">
          <main>
            <section className="py-5 text-center container">
              <div className="row py-lg-5">
                <div className="col-lg-6 col-md-8 mx-auto">
                  <h1 className="fw-light">Best Seller</h1>
                  <p className="lead text-body-secondary">
                    Something short and leading about the collection below—its contents, the creator, etc.
                  </p>
                  <p>
                    <a href="#" className="btn btn-primary my-2 m-2">Lihat</a>
                    <a href="#product" className="btn btn-secondary my-2">Buku Lainnya</a>
                  </p>
                </div>
              </div>
            </section>
            <div className="album py-5 bg-body-tertiary">
              <div className="container" id="product">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                  {/* Card 1 */}
                  <div className="col">
                    <div className="card shadow-sm">
                      <img
                        src="https://cdn.gramedia.com/uploads/items/9789797808990_Koala-Kumal-Edisi-Revisi.jpg"
                        className="card-img-top"
                        alt="Buku 1"
                        height="500"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Koala Kumal
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                              Lihat
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                              Beli
                            </button>
                          </div>
                          <small className="text-body-secondary">-2015</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="col">
                    <div className="card shadow-sm">
                      <img
                        src="https://bukukita.com/babacms/displaybuku/101539_f.jpg"
                        className="card-img-top"
                        alt="Buku 1"
                        height="500"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Radikus Makankakus
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                              Lihat
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                              Beli
                            </button>
                          </div>
                          <small className="text-body-secondary">2017</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 3 */}
                  <div className="col">
                    <div className="card shadow-sm">
                      <img
                        src="https://bukukita.com/babacms/displaybuku/101535_f.jpg"
                        className="card-img-top"
                        alt="Buku 1"
                        height="500"
                        style={{ objectFit: "cover" }}
                      />
                      <div className="card-body">
                        <p className="card-text">
                          Cinta Brontosaurus
                        </p>
                        <div className="d-flex justify-content-between align-items-center">
                          <div className="btn-group">
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                              Lihat
                            </button>
                            <button type="button" className="btn btn-sm btn-outline-secondary">
                              Beli
                            </button>
                          </div>
                          <small className="text-body-secondary">2018</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </main>
        </section>
      </div>

      {/* Sections bawah */}
      <Team />
      <Contact />
      <Footer />
    </>
  )
}

export default App
