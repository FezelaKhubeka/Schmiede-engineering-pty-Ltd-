<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="SCHMIEDE Engineering (Pty) Ltd — Custom metal fabrication, laser-cut components and engineered steel products."
    />
    <meta
      name="keywords"
      content="SCHMIEDE Engineering, custom metal fabrication, sheet metal, laser cutting, steel fabrication, Pretoria, Gauteng"
    />
    <meta name="author" content="SCHMIEDE Engineering (Pty) Ltd" />
    <meta name="theme-color" content="#111214" />
    <title>SCHMIEDE Engineering | Built to Conquer</title>

    <style>
      :root {
        --bg: #f3f2ee;
        --bg-soft: #e7e2d7;
        --panel: #f9f7f2;
        --ink: #111214;
        --muted: #555555;
        --line: #d9d3ca;
        --gold: #c7a35d;
        --gold-deep: #927235;
        --charcoal: #111416;
        --white: #ffffff;
      }

      * {
        box-sizing: border-box;
      }

      html {
        scroll-behavior: smooth;
      }

      body {
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background: var(--bg);
        color: var(--ink);
        line-height: 1.6;
        overflow-x: hidden;
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      img {
        display: block;
        max-width: 100%;
      }

      button,
      input,
      textarea {
        font: inherit;
      }

      .container {
        width: min(1180px, calc(100% - 32px));
        margin: 0 auto;
      }

      .eyebrow {
        margin: 0 0 18px;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 4px;
        text-transform: uppercase;
        color: var(--gold-deep);
      }

      .btn {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 52px;
        padding: 0 24px;
        border: 1px solid var(--ink);
        font-size: 13px;
        font-weight: 700;
        letter-spacing: 0.02em;
        transition: 0.25s ease;
      }

      .btn-primary {
        background: var(--ink);
        color: var(--white);
      }

      .btn-primary:hover {
        background: #2c2f31;
      }

      .btn-secondary {
        background: transparent;
        color: var(--ink);
      }

      .btn-secondary:hover {
        background: var(--ink);
        color: var(--white);
      }

      .section {
        padding: 110px 0;
      }

      .section-header {
        max-width: 760px;
        margin-bottom: 46px;
      }

      .section-header h2 {
        margin: 0;
        font-size: clamp(38px, 4vw, 64px);
        line-height: 0.96;
        letter-spacing: -3px;
      }

      /* Header */
      header {
        position: sticky;
        top: 0;
        z-index: 1000;
        background: rgba(243, 242, 238, 0.92);
        backdrop-filter: blur(12px);
        border-bottom: 1px solid var(--line);
      }

      .header-inner {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-height: 82px;
        gap: 24px;
      }

      .logo {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .logo-mark {
        width: 42px;
        height: 42px;
        display: grid;
        place-items: center;
        background: var(--ink);
        color: var(--gold);
        font-size: 24px;
        font-weight: 800;
        transform: skew(-8deg);
      }

      .logo-text strong {
        display: block;
        font-size: 17px;
        letter-spacing: 3px;
      }

      .logo-text small {
        display: block;
        font-size: 8px;
        letter-spacing: 2px;
        color: #777;
      }

      nav {
        display: flex;
        align-items: center;
        gap: 28px;
      }

      nav a {
        font-size: 13px;
        font-weight: 700;
        transition: color 0.25s ease;
      }

      nav a:hover {
        color: var(--gold-deep);
      }

      .nav-cta {
        padding: 11px 18px;
        background: var(--ink);
        color: var(--white);
      }

      .nav-cta:hover {
        color: var(--white) !important;
        background: #2d3135;
      }

      .menu-button {
        display: none;
        border: 0;
        background: transparent;
        font-size: 28px;
        cursor: pointer;
      }

      /* Hero */
      .hero {
        background:
          radial-gradient(circle at top left, rgba(199, 163, 93, 0.18), transparent 35%),
          linear-gradient(180deg, #ece7df 0%, #e3ded4 100%);
      }

      .hero-wrap {
        display: grid;
        grid-template-columns: 1.15fr 0.85fr;
        align-items: center;
        gap: 56px;
        padding: 88px 0 76px;
      }

      .hero-copy h1 {
        margin: 0;
        font-size: clamp(62px, 8vw, 122px);
        line-height: 0.9;
        letter-spacing: -6px;
      }

      .hero-copy h1 .accent {
        color: var(--gold-deep);
      }

      .hero-lead {
        max-width: 620px;
        margin: 26px 0 34px;
        color: #4f4f4f;
        font-size: 20px;
      }

      .hero-actions {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
      }

      .hero-meta {
        display: flex;
        flex-wrap: wrap;
        gap: 18px 24px;
        margin-top: 30px;
        color: #595959;
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.12em;
        text-transform: uppercase;
      }

      .hero-visual {
        position: relative;
        min-height: 560px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .grid-overlay {
        position: absolute;
        inset: 0;
        background-image:
          linear-gradient(rgba(138, 133, 122, 0.18) 1px, transparent 1px),
          linear-gradient(90deg, rgba(138, 133, 122, 0.18) 1px, transparent 1px);
        background-size: 42px 42px;
      }

      .metal-card {
        position: relative;
        width: min(92%, 460px);
        height: 420px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #3b3e40 0%, #101214 100%);
        box-shadow: 25px 30px 70px rgba(0, 0, 0, 0.22);
        transform: rotate(-4deg);
        color: var(--white);
      }

      .metal-card .letter {
        font-size: clamp(150px, 16vw, 210px);
        font-weight: 900;
        line-height: 1;
        color: var(--gold);
      }

      .metal-card .label,
      .metal-card .caption {
        position: absolute;
        font-size: 9px;
        letter-spacing: 3px;
        text-transform: uppercase;
      }

      .metal-card .label { top: 24px; left: 24px; }
      .metal-card .caption { bottom: 24px; right: 24px; }

      .spec {
        position: absolute;
        background: rgba(247, 246, 241, 0.96);
        padding: 14px 18px;
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
        font-size: 12px;
        font-weight: 700;
        z-index: 2;
      }

      .spec small {
        display: block;
        color: #777;
        font-size: 8px;
        letter-spacing: 2px;
        text-transform: uppercase;
      }

      .spec-one { top: 10%; right: -8px; }
      .spec-two { bottom: 11%; left: -10px; }

      .brand-strip {
        background: var(--ink);
        color: rgba(255, 255, 255, 0.76);
        padding: 18px 0;
      }

      .brand-strip-inner {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 18px 28px;
        font-size: 9px;
        letter-spacing: 3px;
        text-transform: uppercase;
      }

      /* Services */
      .services-grid {
        display: grid;
        grid-template-columns: repeat(3, minmax(0, 1fr));
        gap: 18px;
      }

      .service-card {
        position: relative;
        min-height: 340px;
        padding: 32px 28px 28px;
        background: var(--white);
        border: 1px solid var(--line);
        transition: transform 0.25s ease, box-shadow 0.25s ease;
      }

      .service-card:hover {
        transform: translateY(-6px);
        box-shadow: 0 20px 45px rgba(0, 0, 0, 0.08);
      }

      .service-number {
        color: var(--gold-deep);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .service-card h3 {
        margin: 72px 0 0;
        font-size: clamp(24px, 2vw, 28px);
        line-height: 1.1;
      }

      .service-card p {
        margin: 14px 0 0;
        color: var(--muted);
        font-size: 15px;
      }

      .service-card .arrow {
        position: absolute;
        right: 28px;
        bottom: 24px;
        font-size: 28px;
        color: var(--ink);
      }

      /* Products */
      .dark-section {
        background: var(--charcoal);
        color: var(--white);
        padding: 110px 0;
      }

      .product-grid {
        display: grid;
        grid-template-columns: 2fr 1fr 1fr;
        gap: 2px;
        background: rgba(255, 255, 255, 0.2);
        margin-top: 54px;
      }

      .product {
        min-height: 290px;
        padding: 30px 28px;
        background: #1c2125;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
      }

      .product-large {
        grid-row: span 2;
        min-height: 580px;
        background: linear-gradient(145deg, #363a3d 0%, #101214 100%);
      }

      .product-number {
        color: var(--gold);
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.18em;
        text-transform: uppercase;
      }

      .product h3 {
        margin: 12px 0 8px;
        font-size: clamp(24px, 2vw, 30px);
      }

      .product p {
        margin: 0;
        color: #b3b3b3;
        font-size: 14px;
      }

      /* Process */
      .steps {
        display: grid;
        grid-template-columns: repeat(4, minmax(0, 1fr));
        gap: 20px;
        margin-top: 52px;
      }

      .step {
        padding-top: 20px;
        border-top: 1px solid #b6b0a6;
      }

      .step-number {
        font-size: 30px;
        font-weight: 800;
        line-height: 1;
        color: var(--gold-deep);
      }

      .step h3 {
        margin: 12px 0 8px;
        font-size: 18px;
      }

      .step p {
        margin: 0;
        color: var(--muted);
        font-size: 14px;
      }

      /* About */
      .about {
        background: #dedbd3;
        padding: 110px 0;
      }

      .about-inner {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 72px;
      }

      .about-card {
        padding: 34px;
        background: rgba(255, 255, 255, 0.24);
        border: 1px solid rgba(0, 0, 0, 0.08);
      }

      .about-card h3 {
        margin: 0 0 10px;
        font-size: 12px;
        letter-spacing: 3px;
        text-transform: uppercase;
        color: var(--gold-deep);
      }

      .about-card p {
        margin: 0;
        color: var(--muted);
        font-size: 16px;
      }

      .about-copy p {
        margin: 0 0 20px;
        color: #4b4b4b;
        font-size: 18px;
      }

      .about-link {
        display: inline-block;
        margin-top: 12px;
        padding-bottom: 5px;
        border-bottom: 1px solid var(--ink);
        font-weight: 700;
      }

      /* Quote */
      .quote-wrapper {
        background: var(--gold);
        padding: 110px 0;
      }

      .quote-wrap {
        display: grid;
        grid-template-columns: 0.8fr 1.2fr;
        align-items: start;
        gap: 80px;
      }

      .quote-copy h2 {
        margin: 0;
        font-size: clamp(42px, 5vw, 70px);
        line-height: 0.96;
        letter-spacing: -3px;
      }

      .quote-copy p {
        margin: 18px 0 0;
        color: rgba(17, 18, 20, 0.8);
        font-size: 18px;
      }

      .contact-details {
        display: grid;
        gap: 6px;
        margin-top: 28px;
        font-weight: 700;
      }

      .quote-form {
        background: #f3efe8;
        padding: 40px;
        display: grid;
        gap: 18px;
      }

      .field {
        display: grid;
        gap: 8px;
      }

      .field label {
        font-size: 11px;
        font-weight: 700;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        color: var(--ink);
      }

      .field input,
      .field textarea {
        width: 100%;
        padding: 14px 16px;
        border: 1px solid #cfc9be;
        background: var(--white);
        font-size: 14px;
        outline: none;
      }

      .field input:focus,
      .field textarea:focus {
        border-color: var(--gold-deep);
        box-shadow: 0 0 0 3px rgba(146, 114, 53, 0.12);
      }

      .form-note {
        margin-top: -4px;
        font-size: 11px;
        color: #5d5d5d;
      }

      /* Footer */
      footer {
        background: #0d1113;
        color: #d7d7d7;
        padding: 50px 0 28px;
      }

      .footer-top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 28px;
        flex-wrap: wrap;
      }

      .footer-brand {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      .footer-brand .logo-mark {
        width: 36px;
        height: 36px;
        font-size: 20px;
      }

      .footer-brand strong {
        display: block;
      }

      .footer-brand small {
        display: block;
        color: #7d7d7d;
      }

      .footer-links {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }

      .footer-links a {
        color: #c3c3c3;
        font-size: 12px;
      }

      .copyright {
        margin-top: 32px;
        padding-top: 18px;
        border-top: 1px solid rgba(255, 255, 255, 0.08);
        color: #6e6e6e;
        font-size: 10px;
        letter-spacing: 0.08em;
        text-transform: uppercase;
      }

      /* Responsive */
      @media (max-width: 850px) {
        .menu-button {
          display: block;
        }

        nav {
          display: none;
          position: absolute;
          top: 82px;
          left: 0;
          right: 0;
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          padding: 24px 16px 28px;
          background: rgba(243, 242, 238, 0.98);
          border-bottom: 1px solid var(--line);
        }

        nav.open {
          display: flex;
        }

        .hero-wrap,
        .about-inner,
        .quote-wrap {
          grid-template-columns: 1fr;
        }

        .hero-wrap {
          padding-top: 60px;
        }

        .services-grid,
        .steps {
          grid-template-columns: 1fr 1fr;
        }

        .product-grid {
          grid-template-columns: 1fr 1fr;
        }

        .product-large {
          grid-column: 1 / -1;
          grid-row: auto;
          min-height: 430px;
        }
      }

      @media (max-width: 560px) {
        .header-inner {
          min-height: 74px;
        }

        .hero-wrap {
          gap: 28px;
          padding: 54px 0 62px;
        }

        .hero-lead {
          font-size: 18px;
        }

        .hero-meta {
          gap: 14px;
          letter-spacing: 0.08