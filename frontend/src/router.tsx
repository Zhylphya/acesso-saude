import { createBrowserRouter } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Inicio } from './pages/Inicio';
import { Locais } from './pages/Locais';
import { LocalDetalhe } from './pages/LocalDetalhe';
import { NaoEncontrada } from './pages/NaoEncontrada';
import { ComoSerAtendido } from './pages/ComoSerAtendido';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Inicio /> },
      { path: 'locais', element: <Locais /> },
      { path: 'locais/:id', element: <LocalDetalhe /> },
      { path: 'locais/:id/atendimento', element: <ComoSerAtendido /> },
      { path: 'como-usar', element: <ComoSerAtendido /> },
      { path: '*', element: <NaoEncontrada /> },
    ],
  },
]);