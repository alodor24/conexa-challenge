"use client";

import * as SC from "./DataGrid.styles";

const DataGrid = () => {
  return (
    <>
      <SC.Title>¿Qué tanto conoces sobre la serie animada?</SC.Title>
      <SC.Subtitle>
        Elegí un personaje del recuadro 1 y recuadro 2 para tener más
        información de los personajes
      </SC.Subtitle>

      <SC.GridWrapper>
        <SC.Box>Recuadro 1</SC.Box>
        <SC.Box>Recuadro 2</SC.Box>
      </SC.GridWrapper>

      <SC.GridWrapper $columns={3}>
        <SC.Box>Recuadro 1</SC.Box>
        <SC.Box>Recuadro 2</SC.Box>
        <SC.Box>Recuadro 3</SC.Box>
      </SC.GridWrapper>
    </>
  );
};

export default DataGrid;
