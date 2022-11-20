import React from 'react';
import { MiNavbar } from '../../miNavbar/miNavbar';
import { EntradasList } from './tablaEntradas';

export const ListaEntradas = () => {
    return(
        <>
            <MiNavbar/>
            <EntradasList/>
        </>
    );
}