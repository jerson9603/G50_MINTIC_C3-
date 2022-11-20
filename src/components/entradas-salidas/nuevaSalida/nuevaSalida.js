import React from 'react';
import { MiNavbar } from '../../miNavbar/miNavbar';
import { CreateSalida } from './salidaForm';

export const NuevaSalida = () => {
    return(
        <>
            <MiNavbar/>
            <CreateSalida/>
        </>
    );
}