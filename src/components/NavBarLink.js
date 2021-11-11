import React from "react";
import { Link, useRouteMatch} from "react-router-dom";

function NavBarLink({name, path, exact}) {
  const match = useRouteMatch({path, exact});
  return (
    <Link 
      className={`nav-link ${match && 'active'}`}
      aria-current="page"
      to={path}
    >
      {name}
    </Link>
  );
}

export default NavBarLink;