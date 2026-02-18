import PropTypes from 'prop-types';
import './Card.css';

export default function Card({ 
  children, 
  variant = 'default', 
  hoverable = false,
  className = '',
  ...props 
}) {
  const cardClass = `
    card 
    card--${variant}
    ${hoverable ? 'card--hoverable' : ''}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={cardClass} {...props}>
      {children}
    </div>
  );
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['default', 'glass', 'gradient']),
  hoverable: PropTypes.bool,
  className: PropTypes.string,
};
