const stack = [
  'Entrada principal em TypeScript com React 19',
  'Roteamento configurado para GitHub Pages com HashRouter',
  'Separacao inicial entre paginas, rotas e estilos globais',
  'Arquivos auxiliares para testes e metricas',
];

export function SobrePage() {
  return (
    <section className="panel">
      <p className="eyebrow">Estrutura</p>
      <h1>Organizacao inicial em /src</h1>
      <ul className="feature-list">
        {stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
