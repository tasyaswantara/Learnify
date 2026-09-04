import Logo from './Logo'

function Header({ rightContent, children }) {
  return (
    <header className="flex items-center justify-between gap-4 py-2">
      <div className="flex items-center gap-3">
        <Logo />
        {children}
      </div>
      {rightContent && <div className="flex items-center gap-3">{rightContent}</div>}
    </header>
  )
}

export default Header
