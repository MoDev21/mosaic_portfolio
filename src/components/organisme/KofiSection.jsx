import React, { useState } from 'react';

export default function KofiSection({ username, buttonText = "Buy me a coffee" }) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  // Component Inline Styles
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '40px 20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '12px',
    textAlign: 'center',
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
    maxWidth: '500px',
    margin: '20px auto',
  };

  const headerStyle = {
    margin: '0 0 10px 0',
    color: '#292b2c',
    fontSize: '1.5rem',
    fontWeight: 700,
  };

  const textStyle = {
    margin: '0 0 24px 0',
    color: '#5f6368',
    fontSize: '1rem',
    lineHeight: 1.5,
  };

  const buttonStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    backgroundColor: isHovered ? '#ff4a4a' : '#ff5f5f',
    color: '#ffffff',
    textDecoration: 'none',
    padding: '12px 24px',
    borderRadius: '100px',
    fontWeight: 700,
    fontSize: '1rem',
    transition: 'background-color 0.2s ease, transform 0.1s ease',
    boxShadow: '0 4px 12px rgba(255, 95, 95, 0.3)',
    transform: isPressed ? 'scale(0.98)' : isHovered ? 'scale(1.02)' : 'scale(1)',
    cursor: 'pointer',
  };

  return (
    <section style={containerStyle}>
      <h3 style={headerStyle}>Support My Work</h3>
      <p style={textStyle}>
        If you enjoy what I do, consider buying me a coffee! Your support keeps this project running.
      </p>

      <a
        href={`https://ko-fi.com{username}`}
        target="_blank"
        rel="noopener noreferrer"
        style={buttonStyle}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setIsPressed(false);
        }}
        onMouseDown={() => setIsPressed(true)}
        onMouseUp={() => setIsPressed(false)}
      >
        <svg version="1.1" width="22" height="22" viewBox="0 0 256 256" style={{ marginRight: '10px', fill: '#ffffff' }}>
          <path d="M228.4,103.5c-4.9-19.8-19.2-34.1-39.1-39.1c-1.7-0.4-3.5-0.7-5.3-0.7H32c-8.8,0-16,7.2-16,16v80c0,26.5,21.5,48,48,48h96c26.5,0,48-21.5,48-48c0-1.8-0.1-3.6-0.3-5.3C221.7,149.3,233.1,127.4,228.4,103.5z M192,151.7V80h12c11,0,20,9,20,20C224,124,210,147.2,192,151.7z" />
        </svg>
        <span>{buttonText}</span>
      </a>
    </section>
  );
}
