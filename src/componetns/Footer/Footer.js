import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import FooterLogo from "./footer-logo.png";
import Payment from "./payment.png";

interface Navigation {
  name: string;
  href: string;
}

const firstNavigation: Navigation[] = [
  { name: "Return Policy", href: "#" },
  { name: "Terms", href: "#" },
  { name: "Support-Policy", href: "#" },
  { name: "Privacy-Policy", href: "#" },
  { name: "All Categories", href: "#" },
  { name: "Blogs", href: "#" },
];

const secondNavigation: Navigation[] = [
  { name: "Login", href: "#" },
  { name: "Order History", href: "#" },
  { name: "My Wishlist", href: "#" },
  { name: "Track Order", href: "#" },
  { name: "Be an affiliate partner", href: "#" },
];

export default function Footer() {
  return (
    <div className="max-w-full bg-gray-900 pt-7 text-white px-0 text-xs font-light">
      <div className="px-8 py-10 w-full lg:grid-cols-12 grid gap-2 md:grid-cols-2 grid-cols-1 container mx-auto">
        <div className="flex flex-col flex-1 space-y-4 col-span-5">
          <img src={FooterLogo} alt="Footer logo" width="140px" />
          <div className="w-full">
            <form action="#" method="POST" className="flex w-80">
              <input
                type="email"
                id="email"
                name="email"
                required
                className="h-10 appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-400 focus:border-emerald-400 focus:z-10 sm:text-sm"
                placeholder="Your Email Address"
              />
              <button
                type="submit"
                className="h-10 text-sm rounded bg-green-600 text-white hover:bg-pink-600 py-2 px-4 smooth-transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-6 col-span-3" style={{fontFamily:'sans-serif'}}>
          <span className="text-md font-semibold uppercase">Contact Info</span>
          <div className="flex flex-col">
            <span className="text-slate-400">Address:</span>
            <p className="p-0 m-0 " style={{fontFamily:'sans-serif'}}>
              Salacious styles private limited.No.1580-H-1-B, Timber Market,
              Opposite DTC Terminal, GT Road Shahdara, East Delhi, North East
              Delhi, Inida, 110032
            </p>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400">Phone:</span>
            <p className="p-0 m-0">8282823392</p>
          </div>
          <div className="flex flex-col">
            <span className="text-slate-400">Email:</span>
            <p className="p-0 m-0">hello@beautyplayers.com</p>
          </div>
        </div>
        <div className="flex flex-col flex-1 space-y-6 col-span-2" style={{fontFamily:'sans-serif'}}>
          <span className="text-md font-semibold uppercase">
            Privacy Policy Page
          </span>
          <ul className="space-y-4 flex flex-col text-xs text-slate-400">
            {firstNavigation.map((item, index) => (
              <a
                href={item.href}
                key={`firstnav${index}`}
                style={{ textDecoration: "none", color: "rgb(160, 160, 160)" }}
              >
                <li className="hover:text-white smooth-transition">
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className="flex flex-col flex-1 space-y-6 col-span-2 " style={{fontFamily:'sans-serif'}}>
          <span className="text-md font-semibold uppercase">My Account</span>
          <ul className="space-y-4 flex flex-col text-xs text-slate-400">
            {secondNavigation.map((item, index) => (
              <a
                href={item.href}
                key={`secondnav${index}`}
                style={{ textDecoration: "none", color: "rgb(160, 160, 160)" }}
              >
                <li className="hover:text-white smooth-transition">
                  {item.name}
                </li>
              </a>
            ))}
          </ul>
          <span className="text-md font-semibold uppercase">Be A Seller</span>
          <button className="h-10 w-24 text-xs rounded bg-green-600 text-white hover:bg-pink-600 py-2 px-4 smooth-transition">
            Apply Now
          </button>
        </div>
      </div>
      <div className="py-5 px-2" style={{ backgroundColor: "#0d111b" }}>
        <div className="container mx-auto flex justify-between space-x-4 px-8 text-xs items-center">
          <span className="text-slate-400">
            © Copyrights 2022{" "}
            <span className="text-white">
              salacious styles private limited.
            </span>{" "}
            All rights reserved.
          </span>
          <div className="flex space-x-4">
            <a
              href="#"
              className="hover:-translate-y-1 smooth-transition bg-blue-600 w-9 h-9 p-3 rounded-full text-center"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a
              href="#"
              className="hover:-translate-y-1 smooth-transition bg-pink-600 w-9 h-9 p-3 rounded-full text-center"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a
              href="#"
              className="hover:-translate-y-1 smooth-transition bg-red-600 w-9 h-9 px-2 py-3 rounded-full text-center"
              style={{
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
          </div>
          <div className="flex space-x-1">
            <img
              src={Payment}
              alt="Payment"
              height="30px"
              style={{ maxHeight: "30px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}