import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <div className="logo">
        <h1>App List</h1>
      </div>
      <Link href="/"><a>Home</a></Link>
      <Link href="/about"><a>About</a></Link>
      <Link href="app"><a>Content</a></Link>
    </div>
  );
}
 
export default Navbar;