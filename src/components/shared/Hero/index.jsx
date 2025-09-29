export default function Hero() {
    return (
        <>
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
        </>
    )
}