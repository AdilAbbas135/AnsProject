import { Link } from "react-router-dom";

const footerNavigation = {
  raises: [
    { name: "Offerings", href: "/offerings" },
    // { name: 'Clubs', href: '/social' },
    { name: "Organizations", href: "/organizations" },
    // { name: 'Blog', href: '/blog' },
  ],
  company: [
    {
      name: "Who we are",
      href: "/assets/NEW-Educational-Materials-ChainRaise-Portal-LLC-9_28_22.docx.pdf",
      target: true,
    },
    {
      name: "Terms & Conditions",
      href: "/assets/Terms-of-Use-ChainRaise.pdf",
      target: true,
    },
    {
      name: "Privacy Policy",
      href: "/assets/Privacy-Policy-ChainRaise-LLC-2.pdf",
      target: true,
    },
  ],
  customerService: [
    { name: "Contact", href: "/contact" },
    { name: "FAQ", href: "/faq" },
  ],
};

export default function Footer() {
  return (
    <footer aria-labelledby="footer-heading" className="bg-gray-100">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-gray-100 py-5 text-center">
          <p className="text-sm text-cr-primary font-bold ">
            &copy; 2023 Care & Share Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
