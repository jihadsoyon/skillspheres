import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (

    <footer className="bg-base-200 mt-20">

      <div className="max-w-7xl mx-auto footer sm:footer-horizontal p-10">

        <aside>

          <Image
            src="/logo.png"
            alt="logo"
            width={50}
            height={50}
          />

          <p className="font-bold">

            SkillSphere

            <br />

            Learn Skills From Industry Experts.

          </p>

        </aside>

        <nav>

          <h6 className="footer-title">
            Contact
          </h6>

          <a>Email : support@skillsphere.com</a>

          <a>Phone : +8801700000000</a>

        </nav>

        <nav>

          <h6 className="footer-title">
            Follow Us
          </h6>

          <Link href="https://facebook.com">
            Facebook
          </Link>

          <Link href="https://linkedin.com">
            LinkedIn
          </Link>

          <Link href="https://github.com">
            GitHub
          </Link>

        </nav>

        <nav>

          <h6 className="footer-title">
            Legal
          </h6>

          <Link href="#">
            Privacy Policy
          </Link>

          <Link href="#">
            Terms & Conditions
          </Link>

        </nav>

      </div>

    </footer>

  );
};

export default Footer;