import { Link } from 'react-router-dom';

export function NotFoundPage() {
  return (
    <section className="panel">
      <p className="eyebrow">404</p>
      <h1>Pagina nao encontrada.</h1>
      <p className="lead">A rota acessada nao existe nesta versao inicial do site.</p>
      <Link className="button" to="/">
        Voltar para o inicio
      </Link>
    </section>
  );
}
