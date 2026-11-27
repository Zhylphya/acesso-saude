import { Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div>
      <header>Cabeçalho</header>
      <main>
        <Outlet />
      </main>
      <nav>Barra de navegação</nav>
    </div>
  );
}