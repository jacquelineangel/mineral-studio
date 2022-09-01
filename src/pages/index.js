import * as React from "react";
import "../styles/index.css";

const IndexPage = () => {
  return (
    <main>
      <div className="row">
        <div className="mobile-content">
          <h1>Mi Ne Ral</h1>
        </div>
        <div className="column">
          <div className="content">
            <h1>Mi</h1>
            <p>mi—ne—ral® is an innovation studio, founded and headquartered in Berlin, Germany.<span>Office</span></p>
            <div className="buttons">
              <a
                href="mailto:admin@mi-ne-ral.com"
              >
                <button>
                  email
                </button>
              </a>
              <a
                href="https://www.twitter.com/mineralstu"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  twitter
                </button>
              </a>
              <a
                href="https://www.instagram.com/mineralstu"
                target="_blank"
                rel="noreferrer"
              >
                <button>
                  instagram
                </button>
              </a>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <h1>Ne</h1>
            <p>Digital products and visual identities for early-stage startups.<span>Focus</span></p>
          </div>
        </div>
        <div className="column">
          <div className="content">
            <h1>Ral</h1>
            <p>Brand Strategy, Identity Design, Website Design, and Digital Product Design.<span>Services</span></p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default IndexPage

export const Head = () => <title>mi—ne—ral®</title>
