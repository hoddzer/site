import React from 'react';
import {
  // Gamepad2,
  Globe,
  Instagram,
  Music2,
  // Send,
  Twitch,
  Twitter,
  Youtube,
} from 'lucide-react';

interface SocialLink {
  title: string;
  href: string;
  icon: React.ElementType;
  color: string;
}

const socialLinks: SocialLink[] = [
  {
    title: 'TikTok',
    href: 'https://www.tiktok.com/@hoddzer',
    icon: Music2,
    color: '#d946ef',
  },
  {
    title: 'YouTube',
    href: 'https://www.youtube.com/@hoddzer',
    icon: Youtube,
    color: '#ef4444',
  },
  {
    title: 'Twitter / X',
    href: 'https://x.com/hoddzer',
    icon: Twitter,
    color: '#0ea5e9',
  },
  {
    title: 'Twitch',
    href: 'https://www.twitch.tv/hoddzer',
    icon: Twitch,
    color: '#a855f7',
  },
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/hoddzer',
    icon: Instagram,
    color: '#ec4899',
  },
  {
    title: 'Supersocial',
    href: 'https://supersocial.onelink.me/KasW/i93vco1m',
    icon: Globe,
    color: '#3b82f6',
  },
  // {
  //   title: 'Telegram',
  //   href: 'https://t.me/hoddzer',
  //   icon: Send,
  //   color: '#38bdf8',
  // },
  // {
  //   title: 'Discord',
  //   href: 'https://discord.gg/uZz34ysqqs',
  //   icon: Gamepad2,
  //   color: '#6366f1',
  // },
];

function App() {
  return (
    <div className="site-shell">
      <div className="site-shell__glow site-shell__glow--rose" />
      <div className="site-shell__glow site-shell__glow--indigo" />

      <div className="container page-stack">
        <header className="hero">
          <div className="hero__header">
            <div className="hero__identity">
              <div className="hero__badge">
                <span className="hero__pulse" />
                <span>Hoddzer Interface</span>
              </div>
              <h1 className="hero__title">
                HODD<span>ZER</span>
              </h1>
              <p className="hero__subtitle">
                Canais oficiais · Siga e fique por dentro
              </p>
            </div>
            <div className="hero__equity">
              <div className="hero__equity-label">
                <span>Status</span>
              </div>
              <div className="hero__equity-value">Online</div>
            </div>
          </div>
        </header>

        <main style={{ display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '480px', margin: '10px auto', width: '100%' }}>
          {socialLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  borderRadius: '12px',
                  border: '1px solid rgba(255,255,255,0.08)',
                  background: 'rgba(255,255,255,0.04)',
                  color: 'inherit',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.04)')}
              >
                <span style={{ color: item.color, display: 'flex', alignItems: 'center' }}>
                  <Icon size={20} />
                </span>
                <span style={{ flex: 1 }}>{item.title}</span>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: item.color, flexShrink: 0 }} />
              </a>
            );
          })}
        </main>

        <footer className="page-footer">
          <p>Hoddzer base interface</p>
        </footer>
      </div>
    </div>
  );
}

export default App;