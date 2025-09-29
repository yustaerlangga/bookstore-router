export default function Product() {
    return (
        <>
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
        </>
    )
}