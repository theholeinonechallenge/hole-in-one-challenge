import Nav from '../components/Nav';
import { Camera, DollarSign, Flag, Trophy, Users, Zap } from 'lucide-react';

export default function Home() {
  return (
    <main id="top">
      <Nav />
      <section className="hero">
        <div className="hero-inner">
          <div>
            <div className="eyebrow">A premium golf course attraction</div>
            <h1>One Shot. <span>Life</span> Changing.</h1>
            <p>The Hole In One Challenge brings excitement to your course, increases rounds, creates unforgettable moments, and gives golfers a chance to win a $10,000 prize.</p>
            <div className="actions">
              <a className="btn primary" href="#contact">Partner With Us</a>
              <a className="btn secondary" href="#how">See How It Works</a>
            </div>
          </div>
          <div className="hero-card">
            <div className="kiosk">
              <div className="ball" />
              <h2>HOLE <span>IN ONE</span></h2>
              <p>One Hole. One Shot. One Big Prize.</p>
              <a className="btn primary" href="#contact">Enter Challenge</a>
            </div>
          </div>
        </div>
      </section>
      <div className="strip"><div>A Big Prize.</div><div>A Simple Setup.</div><div>A Huge Impact.</div></div>
      <section className="section" id="courses">
        <h2>Built to help golf courses create excitement and revenue.</h2>
        <p className="lead">We handle the setup, operation, prize funding, signage, kiosk flow, and camera verification so your course gets a premium attraction without adding operational headaches.</p>
        <div className="grid">
          <div className="card"><div className="icon"><Users /></div><h3>Drive More Rounds</h3><p>Create a reason for golfers to choose your course, invite friends, and talk about the experience.</p></div>
          <div className="card"><div className="icon"><DollarSign /></div><h3>Earn More Revenue</h3><p>Your course can earn a percentage of every challenge entry while we manage the program.</p></div>
          <div className="card"><div className="icon"><Zap /></div><h3>Elevate The Experience</h3><p>A modern premium attraction that feels exciting, memorable, and different from a regular round.</p></div>
        </div>
      </section>
      <section className="section" id="how">
        <h2>How it works for golfers.</h2>
        <p className="lead">Simple for golfers, easy for courses, and designed to create a moment worth sharing.</p>
        <div className="steps">
          <div className="step"><div className="num">1</div><div><h3>Pay the entry fee</h3><p>Golfers enter their name, phone, and email before taking their shot.</p></div></div>
          <div className="step"><div className="num">2</div><div><h3>Accept the official rules</h3><p>Every participant confirms eligibility and receives a text/email receipt.</p></div></div>
          <div className="step"><div className="num">3</div><div><h3>Take their shot</h3><p>The golfer plays the designated challenge hole during their round.</p></div></div>
          <div className="step"><div className="num">4</div><div><h3>Verified by cameras</h3><p>Cameras on the designated hole help verify every prize-winning shot.</p></div></div>
        </div>
      </section>
      <section className="section" id="golfers">
        <h2>A $10,000 prize that changes the round.</h2>
        <p className="lead">The challenge gives everyday golfers a shot at a huge prize and gives courses a story golfers remember long after they leave.</p>
        <div className="grid">
          <div className="card"><div className="icon"><Trophy /></div><h3>Big Prize Energy</h3><p>A $10,000 prize adds pressure, excitement, and a reason to step up.</p></div>
          <div className="card"><div className="icon"><Flag /></div><h3>One Designated Hole</h3><p>Simple to understand: one hole, one shot, one big opportunity.</p></div>
          <div className="card"><div className="icon"><Camera /></div><h3>Shot Verification</h3><p>Camera coverage helps keep the challenge fair, official, and trusted.</p></div>
        </div>
      </section>
      <section className="section" id="contact">
        <div className="banner">
          <div><h2>Ready to bring the excitement to your course?</h2><p>Contact us today to learn how The Hole In One Challenge can become a premium attraction at your golf course.</p></div>
          <div><p><strong>Phone:</strong> (860) 975-8490</p><p><strong>Email:</strong> info@theholeinonechallenge.com</p></div>
        </div>
      </section>
      <footer className="footer">© 2026 The Hole In One Challenge. One Shot. Life Changing.</footer>
    </main>
  );
}
