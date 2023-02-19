import * as React from "react";
import "../styles/index.css";
import { SEO } from "../components/seo"

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
            <p>Studio Mineral is a Berlin-based design studio developing creative and strategic work.<span>Studio</span></p>
            <div className="buttons">
              <a
                href="mailto:admin@mi-ne-ral.com"
              >
                <button>
                  Let's chat
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

export const Head = () => (
  <SEO />
)
