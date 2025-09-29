import { FaFacebook, FaWhatsapp, FaInstagram, FaTelegram, FaTwitter } from "react-icons/fa";
import Header from "../../components/shared/Header";
import Footer from "../../components/shared/Footer";

export default function Contact() {
    return (
        <>
            <section id="contact" className="py-5 bg-light">
                <Header />
                <div className="container text-center">
                    <h1 className="fw-bold mb-3">Hubungi Kami</h1>
                    <p className="text-muted mb-5">
                        Jangan ragu untuk menghubungi kami melalui platform media sosial berikut:
                    </p>

                    <div className="d-flex flex-wrap gap-3 justify-content-center">
                        <a
                            href="https://www.facebook.com/AlvinAndTheChipmunks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-primary d-flex align-items-center gap-2 px-4 py-2"
                        >
                            <FaFacebook size={20} /> Facebook
                        </a>

                        <a
                            href="https://whatsapp.com/channel/0029Va4K0PZ5a245NkngBA2M"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-success d-flex align-items-center gap-2 px-4 py-2"
                        >
                            <FaWhatsapp size={20} /> Whatsapp
                        </a>

                        <a
                            href="https://www.instagram.com/officialalvinandthechipmunks/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-danger d-flex align-items-center gap-2 px-4 py-2"
                        >
                            <FaInstagram size={20} /> Instagram
                        </a>

                        <a
                            href="https://t.me/joinchat/AAAAAFlFjao0ol2o_JTvxA"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-info d-flex align-items-center gap-2 px-4 py-2"
                        >
                            <FaTelegram size={20} /> Telegram
                        </a>

                        <a
                            href="https://x.com/officialalvinnn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-outline-dark d-flex align-items-center gap-2 px-4 py-2"
                        >
                            <FaTwitter size={20} /> Twitter (X)
                        </a>

                    </div>
                </div>
                <Footer />

                <style jsx>{`
                    .btn {
                        border-radius: 30px;
                        transition: all 0.3s ease;
                    }
                    .btn:hover {
                        transform: translateY(-3px);
                        box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
                    }
                `}</style>
            </section>
        </>
    );
}
