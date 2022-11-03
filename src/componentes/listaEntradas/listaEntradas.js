import React from 'react';
import { MiNavbar } from '../miNavbar/miNavbar';
import { TablaEntradas } from './tablaEntradas';

export const ListaEntradas = () => {
    return(
        <>
            <MiNavbar/>
            <TablaEntradas/>
        </>
    );
}