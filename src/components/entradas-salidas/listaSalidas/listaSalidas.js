import React from 'react';
import { MiNavbar } from '../../miNavbar/miNavbar';
import { SalidasList } from './tablaSalidas';

export const ListaSalidas = () => {
    return(
        <>
            <MiNavbar/>
            <SalidasList/>
        </>
    );
}