import React from "react";
import { Link } from "react-router-dom";
import { ContextConsumer } from "../components/Context";
export default function Header() {
  let displayHeads = null;

  // if (context.signed_in === true) {
  //   displayHeads = <h1>Hi logged in</h1>;
  // } else {
  //   displayHeads = <h1>Hi logged out</h1>;
  // }
  return (
    <header>
      <div className="menu">
        <ul className="menu">
          <li>
            <Link className="active" to="/">
              Home
            </Link>
          </li>

          <li>
            <Link className="non-active" to="/passes">
              Tours/Passes
            </Link>
          </li>

          <li>
            <Link className="non-active" to="/merch">
              Merch
            </Link>
          </li>

          <ContextConsumer>
            {(context) => {
              if (context.signed_in) {
                return (
                  <div>
                    <a className="non-active">
                      <Link to="/signin">Log out</Link>
                    </a>
                  </div>
                );
              } else {
                return (
                  <div>
                    <a className="signup-btn">
                      <Link to="/signin" className="signup-text">
                        Log in
                      </Link>
                    </a>
                  </div>
                );
              }
            }}
          </ContextConsumer>
        </ul>
        {/*<a href="lion.html" className="no_und">
            <li className="allheads">New Music</li>
            </a>
            <a href="lion.html" className="no_und">
            <li className="allheads">Tour</li>
            </a>
            <a href="lion.html" className="no_und">
            <li className="allheads">Merch</li>
            </a>
            <a href="team_page/index.php" class="no_und">
            <li class="allheads">Team</li>
            </a>
        */}
      </div>
    </header>
  );
}
