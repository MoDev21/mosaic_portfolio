import React from 'react';






const LinkButton = ({ link }) => {
  return (
    <li>
        <a href={link.href} target="_blank">
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