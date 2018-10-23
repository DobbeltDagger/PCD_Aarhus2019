import Link from "next/link";
import { withRouter } from "next/router";
import { Children } from "react";

// from here: https://gist.github.com/remy/0dde38897d6d660f0b63867c2344fb59
// Excellent

const ActiveLink = withRouter(({ router, children, ...props }) => (
  <Link {...props}>
    {React.cloneElement(Children.only(children), {
      className: router.pathname === props.href ? `active` : null
    })}
  </Link>
));

export default ActiveLink