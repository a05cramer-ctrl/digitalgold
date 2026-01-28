import { useEffect, useState, useCallback } from 'react'
import './App.css'
import heroImage from './hf_20260126_100914_28161e13-8151-4968-9349-fd471a244865.png'
import iconImage from './hf_20260126_100712_4288b067-2eba-45c1-86a3-249b95829156 (1).png'

const CONTRACT_ADDRESS = '3eH1UQLbAAB5PsC9hLdJqqr4rjN8YtsepBrwiCy9bonk'

function App() {
  const [scrollY, setScrollY] = useState(0)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const copyToClipboard = useCallback(() => {
    navigator.clipboard.writeText(CONTRACT_ADDRESS)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <div className="app">
      {/* Noise overlay for texture */}
      <div className="noise-overlay" />
      
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <img 
            src={heroImage} 
            alt="Creation of Digital Gold" 
            className="hero-image"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div className="hero-overlay" />
          <div className="hero-glow" />
        </div>
        
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="title">
              <span className="title-digital">DIGITAL</span>
              <span className="title-gold">GOLD</span>
            </h1>
            <p className="subtitle">From Ancient Value to On-Chain Eternity</p>
            
            <div className="ca-container" onClick={copyToClipboard}>
              <span className="ca-label">CA</span>
              <span className="ca-address">{CONTRACT_ADDRESS}</span>
              <span className="ca-copy">{copied ? '✓ Copied!' : 'Copy'}</span>
            </div>
          </div>

          <div className="scroll-indicator">
            <span>Descend</span>
            <div className="scroll-line" />
          </div>
        </div>
      </section>

      {/* Why Gold Matters Section */}
      <section className="section why-gold">
        <div className="section-content">
          <h2 className="section-title">Why Gold Matters</h2>
          <div className="pillars">
            <article className="pillar">
              <div className="pillar-icon">⚱️</div>
              <h3>The Original Store of Value</h3>
              <p>
                For 5,000 years, civilizations have agreed on one thing: 
                gold is wealth. Empires rose and fell. Currencies came and went. 
                Gold remained.
              </p>
            </article>
            <article className="pillar">
              <div className="pillar-icon">⚡</div>
              <h3>The Conductor of Tomorrow</h3>
              <p>
                Every phone, every satellite, every quantum computer — 
                they all need gold. The future literally runs on this ancient metal.
              </p>
            </article>
            <article className="pillar">
              <div className="pillar-icon">🛡️</div>
              <h3>The Survivor</h3>
              <p>
                Wars. Pandemics. Crashes. Collapses. 
                When everything burns, gold doesn't just survive — it thrives. 
                Fear makes gold immortal.
              </p>
            </article>
          </div>
        </div>
        <div className="section-divider">
          <div className="divider-line" />
          <div className="divider-symbol">✧</div>
          <div className="divider-line" />
        </div>
      </section>

      {/* Why Digital Gold Section */}
      <section className="section why-digital">
        <div className="section-content">
          <h2 className="section-title">Why Digital Gold</h2>
          <div className="manifesto">
            <div className="manifesto-block">
              <span className="manifesto-number">I</span>
              <div className="manifesto-text">
                <h3>Trust Without Borders</h3>
                <p>
                  Gold needed vaults. Armies. Governments. 
                  Digital Gold needs only the blockchain — 
                  a ledger no emperor can corrupt, no bank can freeze.
                </p>
              </div>
            </div>
            <div className="manifesto-block">
              <span className="manifesto-number">II</span>
              <div className="manifesto-text">
                <h3>Digital Scarcity</h3>
                <p>
                  They can't print more gold. They can't print more of this. 
                  In a world drowning in infinite money, 
                  scarcity is the ultimate rebellion.
                </p>
              </div>
            </div>
            <div className="manifesto-block">
              <span className="manifesto-number">III</span>
              <div className="manifesto-text">
                <h3>Meme as Money</h3>
                <p>
                  Every currency is a shared belief. 
                  Gold was the first meme that stuck. 
                  We're just continuing the tradition — with better technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Meme Angle Section */}
      <section className="section meme-angle">
        <div className="meme-bg">
          <img 
            src={iconImage} 
            alt="Digital Gold Icon" 
            className="meme-image"
          />
        </div>
        <div className="section-content">
          <div className="meme-container">
            <blockquote className="meme-quote">
              "If gods had wallets, they'd hold gold."
            </blockquote>
            <div className="meme-subtext">
              <p>The pharaohs knew. The emperors knew. The algorithms know.</p>
              <p className="highlight">Now you know.</p>
            </div>
            <div className="meme-pixels">
              {[...Array(12)].map((_, i) => (
                <div 
                  key={i} 
                  className="floating-pixel"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.3}s`,
                    animationDuration: `${3 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section cta">
        <div className="cta-content">
          <h2 className="cta-title">The Eternal Awaits</h2>
          <p className="cta-subtitle">
            Gold doesn't ask for permission. Neither should you.
          </p>
          <div className="cta-buttons">
            <button className="cta-button primary">
              <span className="button-glow" />
              <span className="button-text">Touch the Gold</span>
            </button>
            <button className="cta-button secondary">
              <span className="button-text">Mint the Eternal</span>
            </button>
          </div>
          <p className="cta-tagline">Store Value. Meme Hard.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={iconImage} alt="Digital Gold" className="footer-icon" />
            <span>DIGITAL GOLD</span>
          </div>
          <p className="footer-text">
            Not financial advice. Just eternal truth.
          </p>
          <div className="footer-links">
            <a href="https://x.com/digtalgold_sol" target="_blank" rel="noopener noreferrer" aria-label="Twitter">𝕏</a>
            <a href="#" aria-label="Telegram">✈</a>
            <a href="#" aria-label="Discord">⌘</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
