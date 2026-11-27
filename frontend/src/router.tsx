import { createBrowserRouter } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Locais } from './pages/Locais';
import { LocalDetalhe } from './pages/LocalDetalhe';
import { NaoEncontrada } from './pages/NaoEncontrada';
import { ComoSerAtendido } from './pages/ComoSerAtendido';


export const router = createBrowserRouter([
  { path: '/', element: <Inicio /> },
  { path: '/locais', element: <Locais /> },
  { path: '/locais/:id', element: <LocalDetalhe /> },
  { path: '/locais/:id/atendimento', element: <ComoSerAtendido /> },
  { path: '/como-usar', element: <ComoSerAtendido /> },
  { path: '/*', element: <NaoEncontrada /> },
]);