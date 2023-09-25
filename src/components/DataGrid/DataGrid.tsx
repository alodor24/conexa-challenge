"use client";

import Box from "../Box";
import Card from "../Card";
import * as SC from "./DataGrid.styles";

const DataGrid = () => {
  return (
    <>
      <SC.Title>¿Qué tanto conocés sobre la serie animada?</SC.Title>
      <SC.Subtitle>
        Elegí un personaje del recuadro 1 y recuadro 2 para tener más
        información de los personajes
      </SC.Subtitle>

      <SC.GridWrapper>
        <Box title="Personaje #1">
          <SC.GridCard>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                name="General Store Owner"
                status="alive"
                specie="Alien"
              />
            ))}
          </SC.GridCard>
        </Box>

        <Box title="Personaje #2" align="right">
          <SC.GridCard>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card
                key={index}
                name="Scarecrow Morty"
                status="dead"
                specie="Robot"
              />
            ))}
          </SC.GridCard>
        </Box>
      </SC.GridWrapper>

      <SC.GridWrapper $columns={3}>
        <Box title="Personaje #1 - Solo Episodios">
          <SC.List>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <li key={index}>
                <b>episodio</b> - nombre - <i>fecha de transmisión</i>
              </li>
            ))}
          </SC.List>
        </Box>

        <Box title="Personaje #1 & #2 - Episodios Compartidos">
          <SC.List>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <li key={index}>
                <b>episodio</b> - nombre - <i>fecha de transmisión</i>
              </li>
            ))}
          </SC.List>
        </Box>

        <Box title="Personaje #2 - Solo Episodios">
          <SC.List>
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <li key={index}>
                <b>episodio</b> - nombre - <i>fecha de transmisión</i>
              </li>
            ))}
          </SC.List>
        </Box>
      </SC.GridWrapper>
    </>
  );
};

export default DataGrid;
