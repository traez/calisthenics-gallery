/* 
Import the Link component from Next.js
Import the dataUpperBody data from the libraries/dataUpperBody.js file
Export the UpperHome component
Return the UpperHome component
The dataUpperBody.map() function iterates over the dataUpperBody array and renders a <div> element for each item in the array.
The <p> element with the className="drill-p" renders the name of the exercise.
The <img> element with the src attribute `images/${item.picture}` renders an image of the exercise.
The Link component with the href attribute `/upper/${item.id}` renders a link to the exercise's detail page.
*/
import Link from "next/link";
import dataCore from "../libraries/dataCore";

export default function CoreHome() {
  return (
    <section className="sec-drill">
    {dataCore.map((item) => (
      <div className="drill" key={item.id}>
       <p className="drill-p">{item.name}</p>
        <img src={`images/${item.picture}`} className="drill-img" alt="" />
        <Link href={`/core/${item.id}`}>Watch Video</Link>
      </div>
    ))}
  </section>
  );
}
