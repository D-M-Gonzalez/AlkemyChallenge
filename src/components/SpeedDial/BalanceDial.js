import * as React from 'react';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import PrintIcon from '@mui/icons-material/Print';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const actions = [
  { icon: <AddCircleIcon />, name: 'Add new movement' },
  { icon: <CreateIcon />, name: 'Edit movements' },
  { icon: <DeleteIcon />, name: 'Delete movement' },
  { icon: <PrintIcon />, name: 'Print movements' },
];

//Dial utilizado para las acciones, no implementado.

export default function BalanceDial() {
  return (
      <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 50, right: 50 }}
        icon={<SpeedDialIcon />}
        FabProps={{ size: "large", color: "success" }}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
  );
}