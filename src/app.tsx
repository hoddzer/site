import {
  ArrowRight,
  BarChart3,
  CalendarDays,
  Disc3,
  Gamepad2,
  Globe,
  Instagram,
  LayoutGrid,
  Music2,
  Send,
  ShieldCheck,
  Star,
  Target,
  Twitch,
  Twitter,
  Wrench,
  Youtube,
} from 'lucide-react';

const sections = [
  {
    title: 'Pagina inicial',
    description: 'Entrada principal do projeto com acesso rapido aos blocos centrais.',
    icon: LayoutGrid,
    accent: 'accent-indigo',
  },
  {
    title: 'Analises',
    description: 'Espaco reservado para resumos, tendencias e acompanhamento de dados.',
    icon: BarChart3,
    accent: 'accent-emerald',
  },
  {
    title: 'Planejamento',
    description: 'Area para agenda, organizacao de rotinas e acompanhamento semanal.',
    icon: CalendarDays,
    accent: 'accent-rose',
  },
  {
    title: 'Ferramentas',
    description: 'Bloco preparado para calculadoras, utilitarios e recursos auxiliares.',
    icon: Wrench,
    accent: 'accent-amber',
  },
];

const highlights = [
  {
    title: 'Estrutura clara',
    text: 'Home montada com secoes simples para facilitar a expansao do projeto.',
    icon: Target,
  },
  {
    title: 'Base estavel',
    text: 'Layout funcionando no ambiente atual sem depender do dev server quebrado.',
    icon: ShieldCheck,
  },
  {
    title: 'Visual definido',
    text: 'Paleta escura com acentos fortes e icones consistentes para o sistema.',
    icon: Star,
  },
];

const socialGroups = {
  featured: [
    {
      title: 'TikTok',
      href: 'https://www.tiktok.com/@hoddzer',
      icon: Music2,
      accent: 'social-card--fuchsia',
    },
    {
      title: 'YouTube',
      href: 'https://www.youtube.com/@hoddzer',
      icon: Youtube,
      accent: 'social-card--red',
    },
    {
      title: 'Twitter',
      href: 'https://x.com/hoddzer',
      icon: Twitter,
      accent: 'social-card--sky',
    },
    {
      title: 'Twitch',
      href: 'https://www.twitch.tv/hoddzer',
      icon: Twitch,
      accent: 'social-card--purple',
    },
  ],
  secondary: [
    {
      title: 'Instagram',
      href: 'https://www.instagram.com/hoddzer',
      icon: Instagram,
      accent: 'social-card--pink',
    },
    {
      title: 'Supersocial',
      href: 'https://supersocial.onelink.me/KasW/i93vco1m',
      icon: Globe,
      accent: 'social-card--blue',
    },
    {
      title: 'Telegram',
      href: 'https://t.me/hoddzer',
      icon: Send,
      accent: 'social-card--sky',
    },
    {
      title: 'Discord',
      href: 'https://discord.gg/uZz34ysqqs',
      icon: Gamepad2,
      accent: 'social-card--indigo',
    },
  ],
};

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
                Estrutura inicial da home com visual definido, blocos organizados
                e base pronta para evoluir.
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

        <main className="sections">
          <section className="section-card accent-indigo">
            <div className="section-card__header">
              <div className="section-card__title-wrap">
                <div className="section-card__icon">
                  <LayoutGrid size={28} />
                </div>
                <div>
                  <h2 className="section-card__title">Visao geral</h2>
                  <p className="section-card__description">
                    Estrutura basica da pagina inicial
                  </p>
                </div>
              </div>
            </div>

            <div className="hero-summary-grid">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <article className="link-card" key={item.title}>
                    <div className="link-card__top">
                      <div className="link-card__icon">
                        <Icon size={16} />
                      </div>
                      <span className="link-card__title">{item.title}</span>
                    </div>
                    <div className="link-card__bottom">
                      <p>{item.text}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="section-card accent-purple">
            <div className="section-card__header">
              <div className="section-card__title-wrap">
                <div className="section-card__icon">
                  <Star size={28} />
                </div>
                <div>
                  <h2 className="section-card__title">Modulos base</h2>
                  <p className="section-card__description">
                    Areas iniciais reservadas para o crescimento do site
                  </p>
                </div>
              </div>
            </div>

            <div className="link-grid">
              {sections.map((section) => {
                const Icon = section.icon;

                return (
                  <article className={`link-card ${section.accent}`} key={section.title}>
                    <div className="link-card__top">
                      <div className="link-card__icon">
                        <Icon size={16} />
                      </div>
                      <span className="link-card__title">{section.title}</span>
                    </div>
                    <div className="link-card__bottom">
                      <p>{section.description}</p>
                      <ArrowRight size={12} />
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        </main>

        <section className="system-footer">
          <div className="system-footer__meta">
            <div>
              <span className="system-footer__label">Projeto</span>
              <strong>home-base</strong>
            </div>
            <div>
              <span className="system-footer__label">Deploy</span>
              <strong>github-pages /site</strong>
            </div>
          </div>
          <span className="system-footer__cta">
            Estrutura inicial
            <ArrowRight size={14} />
          </span>
        </section>

        <section className="social-section">
          <div className="social-section__header">
            <div className="section-card__title-wrap">
              <div className="section-card__icon">
                <Disc3 size={28} />
              </div>
              <div>
                <h2 className="section-card__title">Siga-nos nas redes</h2>
                <p className="section-card__description">
                  Canais oficiais do Hoddzer
                </p>
              </div>
            </div>
          </div>

          <div className="social-row">
            {socialGroups.featured.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className={`social-card ${item.accent}`}
                  href={item.href}
                  key={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                  <span>{item.title}</span>
                </a>
              );
            })}
          </div>

          <div className="social-row social-row--secondary">
            {socialGroups.secondary.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  className={`social-card ${item.accent}`}
                  href={item.href}
                  key={item.title}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                  <span>{item.title}</span>
                </a>
              );
            })}
          </div>
        </section>

        <footer className="page-footer">
          <p>Hoddzer base interface</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
