import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="landing-container" style={{ minHeight: "100vh", position: "relative" }}>
      {/* Navigation */}
      <nav style={{
        position: "absolute",
        top: 0,
        width: "100%",
        padding: "2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
        background: "linear-gradient(to bottom, rgba(3,3,3,0.8), transparent)"
      }}>
        <div className="logo-container">
          <h1 style={{
            fontSize: "1.5rem",
            letterSpacing: "0.2em",
            color: "var(--text-high)",
            margin: 0
          }}>QUEVELUG</h1>
        </div>
        <div style={{ display: "flex", gap: "2rem" }}>
          <Link href="/monitoring" className="font-tactical" style={{ color: "var(--text-high)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>CONTROL</Link>
          <Link href="/guards" className="font-tactical" style={{ color: "var(--text-high)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>GUARDIAS</Link>
          <Link href="/reporting" className="font-tactical" style={{ color: "var(--text-high)", fontSize: "0.8rem", letterSpacing: "0.1em" }}>REPORTES</Link>
        </div>
      </nav>

      {/* Hero Section */}
      <main style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div className="hero-image" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}>
          <Image
            src="/brand/IMG_01.jpg"
            alt="Quevelug Authority"
            fill
            style={{ objectFit: "cover", opacity: 0.6 }}
            priority
          />
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at center, transparent, var(--bg-deep))"
          }}></div>
        </div>

        <div style={{
          position: "relative",
          zIndex: 5,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "0 2rem"
        }}>
          <span className="tag" style={{ color: "white", opacity: 0.8 }}>Código de Autoridad Absoluta</span>
          <div className="hairline" style={{ width: "100px", margin: "1.5rem auto" }}></div>
          <h2 style={{
            fontSize: "clamp(3rem, 10vw, 7rem)",
            color: "var(--text-high)",
            marginBottom: "1rem",
            textTransform: "uppercase"
          }}>
            La Fortaleza<br />Inquebrantable
          </h2>
          <p className="font-tactical" style={{
            maxWidth: "600px",
            fontSize: "1.1rem",
            color: "var(--text-mid)",
            marginBottom: "3rem"
          }}>
            Erradicamos la incertidumbre mediante resguardo patrimonial de élite y tecnología táctica anticipatoria.
          </p>

          <div style={{ display: "flex", gap: "1rem" }}>
            <button style={{
              backgroundColor: "var(--gold-matte)",
              color: "white",
              border: "none",
              padding: "1rem 2.5rem",
              fontFamily: "var(--font-tactical)",
              letterSpacing: "0.1em",
              cursor: "pointer",
              fontSize: "0.9rem",
              transition: "transform 0.2s ease"
            }}>
              DESPLEGAR CONTROL
            </button>
            <button style={{
              backgroundColor: "transparent",
              color: "white",
              border: "1px solid var(--gold-matte)",
              padding: "1rem 2.5rem",
              fontFamily: "var(--font-tactical)",
              letterSpacing: "0.1em",
              cursor: "pointer",
              fontSize: "0.9rem"
            }}>
              VER INFRAESTRUCTURA
            </button>
          </div>
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer style={{
        position: "absolute",
        bottom: 0,
        width: "100%",
        padding: "1.5rem 2rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 10,
        borderTop: "1px solid rgba(197, 160, 89, 0.2)",
        background: "rgba(3,3,3,0.9)"
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#00ff00", boxShadow: "0 0 10px #00ff00" }}></div>
          <span className="font-tactical" style={{ fontSize: "0.7rem", color: "var(--text-mid)", letterSpacing: "0.1rem" }}>SISTEMA OPERATIVO : V1.0.0</span>
        </div>
        <div>
          <span className="font-tactical" style={{ fontSize: "0.7rem", color: "var(--text-low)" }}>© 2026 QUEVELUG SECURITY INFRASTRUCTURE</span>
        </div>
      </footer>
    </div>
  );
}
