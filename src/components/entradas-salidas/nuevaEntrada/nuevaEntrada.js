import React from 'react';
import { MiNavbar } from '../../miNavbar/miNavbar';
import { CreateEntrada } from './entradaForm';

export const NuevaEntrada = () => {
    return(
        <>
            <MiNavbar/>
            <CreateEntrada/>
        </>
    );
}