import PropTypes from 'prop-types';
import { useState } from 'react';
import './Button.css';

export default function Button({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false, 
  disabled = false,
  className = '',
  onClick,
  type = 'button',
  ...props 
}) {
  const [isHovering, setIsHovering] = useState(false);

  const buttonClass = `
    btn 
    btn--${variant} 
    btn--${size}
    ${isHovering ? 'btn--hovering' : ''}
    ${fullWidth ? 'btn--full-width' : ''}
    ${disabled ? 'btn--disabled' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const handleMouseMove = (event) => {
    if (disabled) return;

    const { currentTarget, clientX, clientY } = event;
    const rect = currentTarget.getBoundingClientRect();
    const localX = clientX - rect.left;
    const localY = clientY - rect.top;
    const offsetX = (localX - rect.width / 2) / 12;
    const offsetY = (localY - rect.height / 2) / 12;

    currentTarget.style.setProperty('--btn-x', `${localX}px`);
    currentTarget.style.setProperty('--btn-y', `${localY}px`);
    currentTarget.style.setProperty('--btn-translate-x', `${offsetX}px`);
    currentTarget.style.setProperty('--btn-translate-y', `${offsetY}px`);
    setIsHovering(true);
  };

  const handleMouseLeave = (event) => {
    event.currentTarget.style.setProperty('--btn-translate-x', '0px');
    event.currentTarget.style.setProperty('--btn-translate-y', '0px');
    setIsHovering(false);
  };

  return (
    <button
      type={type}
      className={buttonClass}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['sm', 'md', 'lg']),
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
