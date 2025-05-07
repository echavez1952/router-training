import { Outlet, Link } from 'react-router-dom'

const Inicio = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
          <li>
            <Link to="/sobrenos">SobreNosotros</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Inicio;

