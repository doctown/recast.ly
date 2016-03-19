var Nav = (props) => (
  <nav className="navbar">
    <div className="col-md-6 col-md-offset-3">
      <Search handleSearch={props.handleSearch}/>
    </div>
  </nav>
);

window.Nav = Nav;
