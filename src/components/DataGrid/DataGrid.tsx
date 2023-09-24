"use client";

import Box from "../Box";
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
        <Box>Recuadro 1</Box>
        <Box>Recuadro 2</Box>
      </SC.GridWrapper>

      <SC.GridWrapper $columns={3}>
        <Box>Recuadro 1</Box>
        <Box>Recuadro 2</Box>
        <Box>Recuadro 3</Box>
      </SC.GridWrapper>
    </>
  );
};

export default DataGrid;
