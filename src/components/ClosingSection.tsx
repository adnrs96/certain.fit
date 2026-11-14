import { Link } from "react-router-dom";

const ClosingSection = () => (
  <section className="closing" aria-labelledby="closing-title">
    <div className="container closing-inner" data-reveal="">
      <svg
        className="closing-signature"
        viewBox="0 0 360 95"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="closingInk" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FFFFFF"></stop>
            <stop offset="60%" stopColor="#BFE3FD"></stop>
            <stop offset="100%" stopColor="#8ED1FC"></stop>
          </linearGradient>
        </defs>
        <path
          className="sig-path"
          pathLength="100"
          d="M 52 24 C 24 14, 14 48, 22 68 C 30 85, 62 82, 82 58 C 92 45, 76 42, 72 56 C 68 70, 88 76, 104 58 C 110 46, 114 46, 114 68 C 114 52, 124 44, 134 50 C 144 58, 152 38, 156 22 C 153 46, 152 68, 164 68 C 174 68, 186 46, 198 48 C 208 50, 204 68, 192 68 C 180 68, 180 48, 196 48 C 206 48, 206 68, 218 68 C 228 68, 232 48, 232 68 C 232 68, 244 68, 252 50 C 256 44, 258 68, 258 68 C 262 50, 274 44, 282 58 C 288 68, 304 68, 326 52"
          fill="none"
          stroke="url(#closingInk)"
          strokeWidth="4.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
        <path
          className="sig-mark"
          d="M 140 38 L 176 35"
          fill="none"
          stroke="#8ED1FC"
          strokeWidth="3.2"
          strokeLinecap="round"
        ></path>
        <circle
          className="sig-mark"
          cx="232"
          cy="34"
          r="3.4"
          fill="#8ED1FC"
        ></circle>
      </svg>
      <h2 className="closing-title" id="closing-title">
        Make this the last time{" "}
        <span className="serif-italic">you start over.</span>
      </h2>
      <p>
        Supported, not supervised. Someone in your corner, throughout your
        transformation.
      </p>
      <div className="closing-ctas">
        <Link className="btn-ocean-lg on-dark" to="/start-journey">
          Meet your coach →
        </Link>
        <Link className="btn-ghost-lg on-dark" to="/timeline">
          See my timeline
        </Link>
      </div>
    </div>
  </section>
);

export default ClosingSection;
