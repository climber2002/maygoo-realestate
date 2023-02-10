import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav id="topnav" className="defaultscroll is-sticky">
      <div className="container">
        { /* Start Logo container */ }
        <Link href="/" className="logo">
          <span className="inline-block dark:hidden">
            <Image src="/logo-dark.png" className="l-dark" height="24" width="98" alt="" />
            <Image src="/logo-light.png" className="l-light" height="24" width="98" alt="" />
          </span>
        </Link>
        { /* End Logo container */ }

        { /* Start Mobile toggle */ }
        <div className="menu-extras">
          <div className="menu-item">
            <a className="navbar-toggle" id="isToggle">
                <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </a>
          </div>
        </div>
        { /* End Mobile toggle */ }

        { /* Login button start */ }
        <ul className="buy-button list-none mb-0">
          <li className="inline mb-0">
              <a href="auth-login.html" className="btn btn-icon bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">
                <i data-feather="user" className="h-4 w-4 stroke-[3]" />
              </a>
          </li>
          <li className="sm:inline ltr:pl-1 rtl:pr-1 mb-0 hidden">
              <a href="auth-signup.html" className="btn bg-green-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">Signup</a>
          </li>
        </ul>
        { /* Login button end */ }
      </div>
    </nav>
  )
}