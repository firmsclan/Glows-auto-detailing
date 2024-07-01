import Link from 'next/link';
import { headerContent } from '../../content/content';
import './header.scss';

const Header = () => {
  const { logoUrl, phoneNumber, navigations } = headerContent;

  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img src={logoUrl} alt="Logo" className="logo" />
        </div>
        <span className="phone-number">{phoneNumber}</span>
      </div>
      <div className="header-right">
        <nav className="nav">
          <ul className="nav-list">
            {navigations.map((navItem, index) => (
              <li key={index} className="nav-item">
                <Link href={navItem.url}>
                  <span className="nav-link">{navItem.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
