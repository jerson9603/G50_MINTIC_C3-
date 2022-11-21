import React from "react";
import { ExistenciasList } from "../components/existencias/tablaExistencias";
import { PageLayout } from "../components/page-layout";

export const HomePage = () => (
  <PageLayout>
    <ExistenciasList />
  </PageLayout>
);
