import Logo from './PandaXLogo';
import Nav from './Menu';

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full bg-gray-900 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
        <Logo />

        {/* Navigation Menu */}
        <Nav />
      </div>
    </header>
  );
}
