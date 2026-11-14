import { useRef, useState, type MouseEvent } from "react";

function ArrowDown() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4v15m0 0 6-6m-6 6-6-6" />
    </svg>
  );
}

function HalftoneSky() {
  return (
    <svg
      className="halftone-sky"
      viewBox="0 0 1600 1100"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <pattern id="blue-dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.7" fill="#4e91de" />
          <circle cx="6" cy="6" r="1.7" fill="#4e91de" />
        </pattern>
        <pattern id="white-dots" width="10" height="10" patternUnits="userSpaceOnUse">
          <circle cx="2.5" cy="2.5" r="2" fill="#f8fcff" />
          <circle cx="7.5" cy="7.5" r="2" fill="#f8fcff" />
        </pattern>
        <pattern id="fine-white-dots" width="7" height="7" patternUnits="userSpaceOnUse">
          <circle cx="3.5" cy="3.5" r="1.25" fill="#f8fcff" />
        </pattern>
        <filter id="rough-edge" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.035"
            numOctaves="2"
            seed="8"
            result="noise"
          />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="22" />
        </filter>
      </defs>

      <rect width="1600" height="1100" fill="#82b8f2" />
      <rect width="1600" height="1100" fill="url(#blue-dots)" opacity="0.34" />

      <g filter="url(#rough-edge)">
        <path
          d="M-80-30H1680V112c-92 2-126 58-229 47-73-8-84-61-161-65-97-6-113 77-213 64-81-11-108-73-194-61-91 12-104 82-199 70-79-9-108-62-184-45-70 16-92 79-176 67-92-13-109-78-197-59-73 15-101 62-207 48Z"
          fill="#f9fcff"
        />
        <path
          d="M-120 542c108-46 184-22 257 17 76 41 125 16 189-24 77-48 153-37 231 18 61 43 119 44 186 4 95-56 164-61 253 4 62 46 122 48 198 4 112-65 224-28 320 42 63 46 116 44 206 4v354H-120Z"
          fill="#f9fcff"
        />
      </g>

      <path
        d="M-60 146c104-20 160 27 245 34 98 8 151-59 249-45 87 13 117 76 214 67 105-11 135-73 245-57 96 14 122 78 221 66 104-13 139-72 251-51 81 15 130 51 235 31v166H-60Z"
        fill="url(#white-dots)"
        opacity="0.9"
      />
      <path
        d="M-50 446c99-34 188 25 276 18 97-8 146-62 243-47 93 14 133 69 237 59 97-9 134-66 238-48 88 16 126 68 226 59 109-11 161-70 270-36 68 21 104 53 210 42v191H-50Z"
        fill="url(#fine-white-dots)"
        opacity="0.88"
      />
      <path
        d="M-80 627c92-47 171-19 249 29 85 52 145 10 217-29 89-47 167-22 244 31 75 52 141 46 222-7 83-54 158-59 248 7 72 53 137 52 223 1 91-54 171-46 277 22v236H-80Z"
        fill="url(#blue-dots)"
        opacity="0.88"
      />
      <path
        d="M-20 330c116-35 192-10 281 35s183 51 296-12c116-64 223-33 318 15 107 54 189 39 292-12 100-49 213-36 345 19"
        fill="none"
        stroke="url(#white-dots)"
        strokeWidth="72"
        opacity="0.78"
      />
      <path
        d="M-30 940c130-73 257-72 366-10 99 56 195 61 302 2 122-67 237-67 351-2 95 54 194 65 307 5 101-54 190-57 334-3"
        fill="none"
        stroke="url(#blue-dots)"
        strokeWidth="140"
        opacity="0.72"
      />
    </svg>
  );
}

function HalftoneGrass({ style }: { style: React.CSSProperties }) {
  return (
    <svg
      className="grass-image"
      viewBox="0 0 900 720"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      style={style}
    >
      <defs>
        <linearGradient id="field-green" x1="0" y1="0" x2="0.15" y2="1">
          <stop offset="0" stopColor="#a9ca72" />
          <stop offset="0.43" stopColor="#76a952" />
          <stop offset="1" stopColor="#285f32" />
        </linearGradient>
        <pattern id="field-dots" width="6" height="6" patternUnits="userSpaceOnUse">
          <circle cx="1.5" cy="1.5" r="1.15" fill="#194e2b" />
          <circle cx="4.5" cy="4.5" r="1.15" fill="#194e2b" />
        </pattern>
        <pattern id="light-field-dots" width="8" height="8" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1.5" fill="#d5e6a3" />
          <circle cx="6" cy="6" r="1.5" fill="#d5e6a3" />
        </pattern>
        <filter id="grass-warp" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.025"
            numOctaves="2"
            seed="17"
            result="grassNoise"
          />
          <feDisplacementMap in="SourceGraphic" in2="grassNoise" scale="34" />
        </filter>
      </defs>

      <rect width="900" height="720" fill="url(#field-green)" />
      <rect width="900" height="720" fill="url(#field-dots)" opacity="0.3" />

      <g filter="url(#grass-warp)">
        <path
          d="M-70 162c120-83 211-60 307 4 87 58 171 43 264-16 110-70 224-64 356 35 69 52 122 51 167 35v207H-70Z"
          fill="#78a956"
          opacity="0.82"
        />
        <path
          d="M-80 386c120-54 234-42 325 32 73 60 143 61 232 6 118-72 232-54 340 24 73 53 137 59 211 29v295H-80Z"
          fill="#245f32"
          opacity="0.88"
        />
      </g>

      <path
        d="M-40 175c101-64 187-38 282 19 86 51 164 42 255-17 113-72 222-54 347 37 73 53 129 52 191 25v156c-96 35-169 19-247-39-98-73-177-78-284-12-103 64-192 65-292 3-86-54-157-64-252-24Z"
        fill="url(#light-field-dots)"
        opacity="0.53"
      />
      <path
        d="M-40 432c113-65 220-48 318 23 76 55 151 55 246-3 111-68 222-45 328 29 68 48 124 57 187 34v239H-40Z"
        fill="url(#field-dots)"
        opacity="0.92"
      />
      <path
        d="M-30 95c136-58 236-35 341 25 95 55 189 46 293-13 104-60 203-51 326 19"
        fill="none"
        stroke="url(#light-field-dots)"
        strokeWidth="82"
        opacity="0.48"
      />
    </svg>
  );
}

export default function App() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  function handleMove(event: MouseEvent<HTMLDivElement>) {
    const bounds = cardRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setTilt({ x, y });
  }

  return (
    <main>
      <section className="hero" id="home">
        <HalftoneSky />
        <header className="site-header">
          <a className="wordmark" href="#home" aria-label="Back to top">
            CECE<span>.</span>
          </a>
          <nav aria-label="Primary navigation">
            <a href="#work">ABOUT</a>
            <a href="#about">PROJECTS</a>
          </nav>
          <a className="contact-link" href="mailto:hello@example.com">
            CONTACT
          </a>
        </header>

        <div
          className="landscape-card"
          ref={cardRef}
          onMouseMove={handleMove}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          style={{
            transform: `translate(-50%, -50%) perspective(1100px) rotateX(${tilt.y * -4}deg) rotateY(${tilt.x * 5}deg) translate3d(${tilt.x * 7}px, ${tilt.y * 7}px, 0)`,
          }}
        >
          <HalftoneGrass
            style={{
              transform: `scale(1.05) translate3d(${tilt.x * -12}px, ${tilt.y * -10}px, 0)`,
            }}
          />
          <div className="landscape-noise" />
          <div className="card-meta">
            <span>Independent creative</span>
            <span>Portfolio / 2025</span>
          </div>
          <div className="hero-title">
            <p>Hello, I&apos;m</p>
            <h1>Your Name</h1>
            <p className="title-subline">I turn ideas into memorable digital experiences.</p>
          </div>
          <span className="card-coordinate">
            36.7783° N<br />
            119.4179° W
          </span>
        </div>

        <a className="scroll-cue" href="#work" aria-label="Scroll to selected work">
          <span>Scroll to explore</span>
          <ArrowDown />
        </a>
      </section>

      <section className="work-section white-frame" id="work">
        <div className="section-kicker">
          <span>Project menu</span>
          <p></p>
          <span>2 selections</span>
        </div>
        <div className="work-heading">
          <h2>Portfolio.</h2>
        </div>

        <div className="project-menu">
          <article className="project-item project-item--menu">
            <div className="menu-index">01.</div>
            <div className="project-window" aria-label="Blank desktop project thumbnail">
              <div className="window-bar">
                <div className="window-controls" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="window-address">project-01.local</span>
              </div>
              <div className="window-empty-state" />
            </div>
            <div className="project-info">
              <h3 className="project-title--animatic">Morningside Nook</h3>
              <p>
                A short description of the project, your role, and the idea behind the work can live
                here.
              </p>
            </div>
            <div className="project-price">
              <span>Price</span>
              <strong>XX.XX USD</strong>
            </div>
          </article>

          <article className="project-item project-item--menu">
            <div className="menu-index">02.</div>
            <div
              className="project-window project-window--plain"
              aria-label="Blank desktop project thumbnail"
            >
              <div className="window-empty-state" />
            </div>
            <div className="project-info">
              <h3 className="project-title--animatic">Animatic</h3>
              <p>
                Use this space for a second project summary, including its purpose, approach, and
                outcome.
              </p>
            </div>
            <div className="project-price">
              <strong>XX.XX USD</strong>
            </div>
          </article>
        </div>
      </section>

      <section className="about-section white-frame" id="about">
        <div className="section-kicker">
          <span>02</span>
          <p>Staff profile</p>
          <span>Identification</span>
        </div>

        <div className="id-stage">
          <aside className="links-receipt" aria-label="Other links">
            <div className="receipt-topline">* * Receipt * *</div>
            <h2>Other links</h2>
            <p>Order #001 for cece</p>
            <div className="receipt-rule" />
            <div className="receipt-labels">
              <span>Qty</span>
              <span>Item</span>
            </div>
            <nav className="receipt-links" aria-label="Portfolio links">
              <a href="#work">
                <span>01</span>
                <strong>Portfolio</strong>
              </a>
              <a href="https://github.com">
                <span>02</span>
                <strong>Github</strong>
              </a>
              <a href="mailto:hello@example.com">
                <span>03</span>
                <strong>LINKEDIN</strong>
              </a>
            </nav>
            <div className="receipt-total">
              <span>Total</span>
              <strong>XX.XX USD</strong>
              <span>Date</span>
              <strong>xx.xx.2026</strong>
            </div>
            <p className="receipt-thanks">Thank you</p>
          </aside>

          <article className="id-card">
            <div className="id-card-header">
              <div className="id-heading">
                <span>Cafe staff</span>
                <strong>Identification card</strong>
              </div>
            </div>

            <div className="id-card-body">
              <div className="id-details">
                <p className="id-intro">
                  I’m a designer and software engineer in New York studying computer science at
                  Barnard College of Columbia University. I love connecting with others through art,
                  anime, tech, food and cats!
                </p>
                <div className="id-fields">
                  <div>
                    <span>University</span>
                    <strong>Columbia University</strong>
                  </div>
                  <div>
                    <span>Position</span>
                    <strong>Designer &amp; Software Engineer</strong>
                  </div>
                  <div>
                    <span>Based in</span>
                    <strong>New York City</strong>
                  </div>
                  <div>
                    <span>Date of issue</span>
                    <strong>2026</strong>
                  </div>
                </div>
                <div className="signature">
                  <span>Signature</span>
                  <strong>Cecilia</strong>
                </div>
              </div>

              <div className="id-photo" aria-label="Blank staff photo placeholder" />
            </div>

            <div className="id-card-footer">
              <div className="barcode" aria-hidden="true" />
              <div className="id-owner">
                <span>Holder</span>
                <strong>Cecilia Zhuo</strong>
              </div>
            </div>
          </article>
        </div>

        <footer>
          <a href="mailto:hello@example.com">Contact / CECILIAJIAZHUO@GMAIL.com</a>
          <a href="#home">cloud 9 ↑</a>
        </footer>
      </section>
    </main>
  );
}
