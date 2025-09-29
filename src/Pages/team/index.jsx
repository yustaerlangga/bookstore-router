import alvin from "../../assets/image/alvin.jpg"
import simon from "../../assets/image/simon.jpg"
import theodore from "../../assets/image/theodore.jpg"
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function Team() {
    return (
        <>
            <section id="team" className="py-5 bg-light">
                <main>
                    <div className="container">
                        <Header/>
                        <h1 className="fw-bold text-center mb-4">
                            Team Pembuat
                        </h1>
                        <hr className="w-25 mx-auto mb-5 border-3 border-primary" />

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                            {/* Card 1 */}
                            <div className="col">
                                <div className="card h-100 shadow-sm border-0 team-card">
                                    <img
                                        src={alvin}
                                        className="card-img-top rounded-top"
                                        alt="Foto Anggota 1"
                                        height="225"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="card-body text-center">
                                        <p className="card-text fw-semibold mb-0">
                                            Alvin Seville
                                        </p>
                                        <small className="text-muted">
                                            Leader
                                        </small>
                                    </div>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="col">
                                <div className="card h-100 shadow-sm border-0 team-card">
                                    <img
                                        src={simon}
                                        className="card-img-top rounded-top"
                                        alt="Foto Anggota 2"
                                        height="225"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="card-body text-center">
                                        <p className="card-text fw-semibold mb-0">
                                            Simon Seville
                                        </p>
                                        <small className="text-muted">
                                            Programmer
                                        </small>
                                    </div>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="col">
                                <div className="card h-100 shadow-sm border-0 team-card">
                                    <img
                                        src={theodore}
                                        className="card-img-top rounded-top"
                                        alt="Foto Anggota 3"
                                        height="225"
                                        style={{ objectFit: "cover" }}
                                    />
                                    <div className="card-body text-center">
                                        <p className="card-text fw-semibold mb-0">
                                            Theodore Seville
                                        </p>
                                        <small className="text-muted">
                                            Designer
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <Footer/>
                    </div>
                </main>
            </section>

            <style jsx>{`
                .team-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .team-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
                }
            `}</style>
        </>
    );
}