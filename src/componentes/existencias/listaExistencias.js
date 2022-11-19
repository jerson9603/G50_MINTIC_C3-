import React from 'react';
import { MiNavbar } from '../miNavbar/miNavbar';
import { Existencias } from './existencias';

export const ListaExistencias = () => {
    return(
        <>
            <MiNavbar/>
            <Existencias/>
        </>
    );
}