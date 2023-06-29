/* Import the Link component from Next.js */
import Link from "next/link";

/* Export the HeaderD component */
export default function HeaderD({ pathname, prefix }) {
  /* 
The pathname prop is the current pathname of the page.
The prefix prop is the prefix for the current pathname.
The img element with the src attribute `/images/${prefix}1.png` renders the first image in the header.
The menu element renders a list of links to the different pages.
The Link component is used to create links that can be navigated to by clicking on them.
The img element with the src attribute `/images/${prefix}2.png` renders the second image in the header.
  */

  return (
    <header>
      <img
        src={`/images/${prefix}1.png`}
        alt=""
        className={`${prefix}1 header-img`}
      />
      <menu>
        <li>
          <Link
            href="/"
            className={`menu-li${pathname === "/" ? " highlight" : ""}`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/upper"
            className={`menu-li${pathname.startsWith("/upper") ? " highlight" : ""}`}
          >
            UpperBody
          </Link>
        </li>
        <li>
          <Link
            href="/lower"
            className={`menu-li${pathname.startsWith("/lower") ? " highlight" : ""}`}
          >
            LowerBody
          </Link>
        </li>
        <li>
          <Link
            href="/core"
            className={`menu-li${pathname.startsWith("/core") ? " highlight" : ""}`}
          >
            Core
          </Link>
        </li>
      </menu>
      <img
        src={`/images/${prefix}2.png`}
        alt=""
        className={`${prefix}2 header-img`}
      />
    </header>
  );
}
