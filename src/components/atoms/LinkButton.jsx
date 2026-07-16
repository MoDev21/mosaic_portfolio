import React from 'react';
import './LinkButton.css';





const LinkButton = ({ link, active, activate_page}) => {
  return (
    <li>
        <a target="_blank" className={active === true ? 'active' : ''} onClick={() => activate_page(link.label)}>
          {link.icon && (
            <svg
              className="button-icon"
              role="presentation"
              aria-hidden="true"
              
            >
              <use href={`/icons.svg#${link.icon}`}></use>
            </svg>
          )}
          {link.label}
        </a>
    </li>
  );
}

export default LinkButton;