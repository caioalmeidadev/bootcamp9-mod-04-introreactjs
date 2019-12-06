import React from 'react';
import PropTypes from 'prop-types';

TechItem.defaultProps = {
    tech: 'Oculto'
}

TechItem.prototype ={
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default function TechItem({tech, onDelete}) {
  return (
    <li >
    {tech}
    <button onClick={onDelete} type="button">Remover</button>
</li>
  );
}
