import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function FooterComponent() {
  return (
    <footer>
      <p>Made with ❤️ by Abdo MHMD</p>
      <p>© 2022 Abdo MHMD. All rights reserved.</p>

      <div className="social-icons">
        <a href="https://github.com/abdomhmd" target="_blank">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
        <a href="https://twitter.com/abdomhmd" target="_blank">
          <FontAwesomeIcon icon={['fab', 'twitter']} />
        </a>
        <a href="https://www.linkedin.com/in/abdo-mhmd-9b8b0b1b3/" target="_blank">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
        </a>
      </div>
    </footer>
  );
}