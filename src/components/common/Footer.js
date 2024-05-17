import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'], weight: '400' })

export default function Footer() {
    return (
        <footer className="container-fluid py-3" style={{ backgroundColor: "#F8BD0D" }}>
            <div className='container'>
                <div className="row">
                    <div className="col-3">
                        <a className={`${inter.className} fs-4 text-decoration-none`} style={{ color: "#4781B8" }} href="#">☀️SUN-PLACE</a>
                        <p className={`${inter.className} fs-6 text-white`}>INN & RESORT</p>
                    </div>
                    <div className='col-3'>
                        <h4>About</h4>
                        <p><a href='#' className='text-white text-decoration-none'>Company</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Our Story</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Career</a></p>
                    </div>
                    <div className='col-3'>
                        <h4>Contacts</h4>
                        <p><a href='#' className='text-white text-decoration-none'>E-mail Us</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Cell No</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Live Chat</a></p>
                    </div>
                    <div className='col-3'>
                        <h4>Connect</h4>
                        <p><a href='#' className='text-white text-decoration-none'>Facebook</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Booking.com</a></p>
                        <p><a href='#' className='text-white text-decoration-none'>Instagram</a></p>
                    </div>
                </div>
            </div>

        </footer>
    );
}
