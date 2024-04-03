import nlwUniteIcon from '../assets/nlw-unite-icon.svg'

export function Header() {
  return (
    <header className="flex items-center gap-5 py-2">
      <img src={nlwUniteIcon} alt="NLW Unite Icon" />

      <nav className="flex items-center gap-5">
        <a href="#eventos" className="text-sm font-medium text-zinc-400">
          Eventos
        </a>
        <a href="#participantes" className="text-sm font-medium">
          Participantes
        </a>
      </nav>
    </header>
  )
}
