/* 
Export the HeaderM component
The pathname prop is the current pathname of the page.
The prefix prop is the prefix for the current pathname.
The handleNavigation function is used to handle navigation events.
*/
export default function HeaderM({ pathname, prefix, handleNavigation }) {

/* 
The img element with the src attribute `/images/${prefix}1.png` renders the first image in the header.
The select element with the onChange attribute `handleNavigation` renders a dropdown menu with the navigation options.
The img element with the src attribute `/images/${prefix}2.png` renders the second image in the header.
*/

  return (
    <header>
      <img
        src={`/images/${prefix}1.png`}
        alt=""
        className={`${prefix}1 header-img`}
      />
      <select onChange={handleNavigation} defaultValue={pathname}>
        <option value="/">Home</option>
        <option value="/upper">UpperBody</option>
        <option value="/lower">LowerBody</option>
        <option value="/core">Core</option>
      </select>
      <img
        src={`/images/${prefix}2.png`}
        alt=""
        className={`${prefix}2 header-img`}
      />
    </header>
  );
}
