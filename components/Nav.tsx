export default function Nav() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top">THE HOLE <span>IN ONE</span> CHALLENGE</a>
        <div className="links">
          <a href="#courses">For Courses</a>
          <a href="#golfers">For Golfers</a>
          <a href="#how">How It Works</a>
          <a href="#contact">Contact</a>
        </div>
        <a className="cta" href="#contact">Bring It To Your Course</a>
      </div>
    </nav>
  );
}
