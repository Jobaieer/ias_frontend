import {Inter} from 'next/font/google';
import {Fredoka} from 'next/font/google';
import Link from 'next/link';
const inter = Inter({subsets: ['latin'], weight: '400' })
const fredoka = Fredoka({ subsets : ['latin'], weight:'600' })

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg ias-bg-normal" data-bs-theme="dark" >
      <div className="container">
        <Link className={`navbar-brand ${inter.className} fs-4 ias-color-light`} href="/">
         ☀️SUN-PLACE
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${fredoka.className}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item me-2">
              <Link className="nav-link text-white fw-bold" aria-current="page" href="/">
                Home
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-white fw-bold" href="#">
                Display
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-white fw-bold" href="#">
                Services
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-white fw-bold" href="#">
                About Us
              </Link>
            </li>
            <li className="nav-item me-2">
              <Link className="nav-link text-white fw-bold" href="#">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="btn mt-1 text-white fw-bold ias-bg-btn border-warning"  href="/user/signup">
                Booking!
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
