/* Import the Link component from Next.js */
import Link from "next/link";

/* 
Export the Home component 
Return the Home component
This aside section contains the author's name, title, and a brief description of the website
This image section contains an image of the author
The navigation section contains links to the different exercise categories
Link are added to take user to different sections/pages of App
*/
export default function Home() {
  return (
    <section id="sec-home">
      <article>
        <aside>
          <h1>
            Hi, my name is <span>Trae Zeeofor</span>
          </h1>
          <h2>I have been a Fitness Junkie since August 2020</h2>
          <h2>
            This website lists my favourite Calisthenics (body-weight) exercises
          </h2>
        </aside>
        <div id="art-div">
          <img src="./images/home-trae-zeeofor.jpg" id="traez" alt="" />
        </div>
      </article>
      <nav>
        <div id="nav-up">
          <img
            src="./images/home-upper-body.jpg"
            id="homeup"
            alt=""
            className="nav-img"
          />
        </div>
        <div id="nav-up-te">
          <h3>
            <Link href="/upper" className="nav-h3">
              UpperBody Exercises
            </Link>
          </h3>
        </div>
        <div id="nav-lo">
          <img
            src="./images/home-lower-body.jpg"
            id="homelo"
            alt=""
            className="nav-img"
          />
        </div>
        <div id="nav-lo-te">
          <h3>
            <Link href="/lower" className="nav-h3">
              LowerBody Exercises
            </Link>
          </h3>
        </div>
        <div id="nav-co">
          <img
            src="./images/home-core.jpeg"
            id="homeco"
            alt=""
            className="nav-img"
          />
        </div>
        <div id="nav-co-te">
          <h3>
            <Link href="/core" className="nav-h3">
              Core (Cardio/Aerobics/Miscellaneous) Exercises
            </Link>
          </h3>
        </div>
      </nav>
    </section>
  );
}
