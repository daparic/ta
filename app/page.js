import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.logo}>truthadjustr</div>
        <nav className={styles.nav}>
          <a href="#features" className={styles.navLink}>Features</a>
          <a href="#testimonials" className={styles.navLink}>Testimonials</a>
          <a href="#contact" className={styles.navLink}>Contact</a>
        </nav>
      </header>

      <main>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Agentic-aware Automated Software Testing
          </h1>
          <p className={styles.heroSubtitle}>
            Offering solutions for software testing that delivers deterministic, reliable validation, ensuring stability and confidence in the otherwise dynamic and rapidly evolving landscape of agentic software development.
          </p>
          <a href="#contact">
            <button className={styles.ctaButton}>Get a Free Trial</button>
          </a>
        </section>

        {/* Features Section */}
        <section id="features" className={styles.section}>
          <h2 className={styles.sectionTitle}>Domain Capabilities & Compliance</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Industry Domains</h3>
              <p className={styles.cardText}>
                Tailored solutions for mission-critical sectors including <strong>Aerospace, Automotive, Medical Devices, and Security</strong>.
                Ensure reliability where failure is not an option.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Supported Standards</h3>
              <p className={styles.cardText}>
                Built-in compliance for <strong>Joint Strike Fighter (JSF), AUTOSAR, MISRA, High Integrity C++, FDA C/C++, CWE, OWASP, PCI, SEI CERT, and UL 2900</strong>.
              </p>
            </div>
            <div className={styles.card}>
              <h3 className={styles.cardTitle}>Certification Metrics</h3>
              <p className={styles.cardText}>
                Achieve rigorous certification requirements with comprehensive code coverage metrics including <strong>MC/DC (Modified Condition/Decision Coverage)</strong>, crucial for <strong>DO-178C</strong> and <strong>ISO 26262</strong>.
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className={styles.testimonials}>
          <h2 className={styles.sectionTitle} style={{ color: 'white' }}>Industry Trusted</h2>
          <div className={styles.testimonialGrid}>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "If you are building any safety or security-critical software, Parasoft C/C++Test is a no-brainer. It has been instrumental in helping us achieve our compliance goals."
              </p>
              <span className={styles.author}>Verified User</span>
              <span className={styles.role}>G2 Reviewer</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "Specifically tailored for large teams, it streamlines compliance with functional safety and process standards like ISO 26262 and IEC 61508."
              </p>
              <span className={styles.author}>Product Review</span>
              <span className={styles.role}>Automotive Industry Analysis</span>
            </div>
            <div className={styles.testimonialCard}>
              <p className={styles.quote}>
                "We were looking for a tool that covers static analysis, unit testing, and code coverage for our safety-critical systems. Parasoft delivered exactly what we needed."
              </p>
              <span className={styles.author}>Software Engineering Lead</span>
              <span className={styles.role}>Aerospace Systems Manufacturer</span>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={`${styles.section} ${styles.contactSection}`}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactContainer}>
            <div className={styles.contactInfo}>
              <h3>Contact Information</h3>
              <p style={{ marginBottom: '2rem', color: 'var(--text-light)' }}>
                Ready to elevate your safety-critical software testing? Contact us today.
              </p>

              <div className={styles.infoItem}>
                <span>📍</span>
                <span>Cebu, Philippines</span>
              </div>
              <div className={styles.infoItem}>
                <span>📱</span>
                <span>09497363911</span>
              </div>
              <div className={styles.infoItem}>
                <span>✉️</span>
                <span>daparicio@parasoft.com</span>
              </div>
            </div>

            <form className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Full Name</label>
                <input type="text" id="name" className={styles.input} placeholder="" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Work Email</label>
                <input type="email" id="email" className={styles.input} placeholder="" />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>How can we help?</label>
                <textarea id="message" className={styles.textarea} placeholder=""></textarea>
              </div>

              <button type="submit" className={styles.submitBtn}>Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} truthadjustr. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>Optimized for Safety Critical Industries</p>
      </footer>
    </div>
  );
}
