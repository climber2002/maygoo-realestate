"use client";
import Link from 'next/link';
import Image from 'next/image';
import { User } from 'react-feather';
import { useState, useEffect } from 'react';
import classNames from 'classnames';

export default function Navbar() {
  const [atTop, setAtTop] = useState(true);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = (event: any) => {
      event.preventDefault();
      if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
      ) {
        setAtTop(false);
      } else {
        setAtTop(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  }

  return (
    <nav id="topnav" className={classNames("defaultscroll is-sticky", { 'nav-sticky': !atTop })}>
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
        <div className="menu-extras" onClick={() => toggleMobileMenu() }>
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
              <a href="auth-login.html" className="btn btn-icon bg-orange-600 hover:bg-green-700 border-green-600 dark:border-green-600 text-white rounded-full">
                <User className="h-4 w-4 stroke-[3]" />
              </a>
          </li>
          <li className="sm:inline ltr:pl-1 rtl:pr-1 mb-0 hidden">
              <a href="auth-signup.html" className="btn bg-orange-600 hover:bg-orange-700 border-orange-600 dark:border-orange-600 text-white rounded-full">Signup</a>
          </li>
        </ul>
        { /* Login button end */ }

        <div id="navigation" style={{ display: mobileMenuOpen ? 'block' : 'none' }}>
          { /* Start Navigation Menu */ }
          <ul className="navigation-menu justify-end nav-light">
            <li className="sub-menu-item">
              <Link href='/'>Home</Link>
            </li>
            <li className="sub-menu-item">
              <Link href='/buy'>Buy</Link>
            </li>
            <li className="sub-menu-item">
              <Link href='/buy'>Sell</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}