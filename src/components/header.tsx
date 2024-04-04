import nlwUniteIcon from '../assets/nlw-unite-icon.svg'
import { NavLink } from './nav-link'

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="NLW Unite Icon" />

      <nav className="flex items-center gap-5">
        <NavLink href="#eventos" className="text-zinc-400">
          Eventos
        </NavLink>
        <NavLink href="#attendees">Participantes</NavLink>
      </nav>
    </header>
  )
}
