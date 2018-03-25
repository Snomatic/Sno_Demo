import React from 'react';
import { Button, ButtonGroup } from 'react-bootstrap';

class MapControls extends React.Component{
  render(){
    let style= {
      position: 'fixed',
      top: '0',
      left: '30%',
      zIndex: 99
    }

    const {onClick, canAddHydrant} = this.props;

    return (
      <div style={style}>
        <ButtonGroup >
          <Button bsStyle="primary" id='Trail' onClick={(e) => onClick(e.target.id)}>Trail</Button>
          {canAddHydrant ? (
            <Button bsStyle="primary" id='Hydrant' onClick={(e) => onClick(e.target.id)}>Hydrant</Button>
          ) : null}
          <Button bsStyle="primary" id='HydrantLine' onClick={(e) => onClick(e.target.id)}>Hydrant Line</Button>
          <Button bsStyle="primary" id='HydrantTrail' onClick={(e) => onClick(e.target.id)}>Hydrant Trail</Button>
          <Button bsStyle="success" id='removeInteraction' onClick={(e) => onClick(e.target.id)}>Save</Button>
        </ButtonGroup>
      </div>
    )
  }
}

export default MapControls;