"use client";

import useGetAllCharacters from "@/hooks/useGetAllCharacters";
import Box from "../Box";
import Card from "../Card";
import Pagination from "../Pagination";
import * as SC from "./DataGrid.styles";
import { toUpperCaseFirstLetter } from "@/utils/help";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

const DataGrid = () => {
  const { url } = useSelector((state: RootState) => state.pagination);

  const {
    data: dataCharacter,
    loading,
    error,
  } = useGetAllCharacters({
    url,
  });

  return (
    <>
      <SC.Title>¿Qué tanto conocés sobre la serie animada?</SC.Title>
      <SC.Subtitle>
        Elegí un personaje del recuadro 1 y recuadro 2 para tener más
        información de los personajes
      </SC.Subtitle>

      <SC.GridWrapper>
        <Box title="Personaje #1">
          {!loading ? (
            <SC.GridCard>
              {dataCharacter &&
                dataCharacter.results
                  .slice(0, 10)
                  .map((item) => (
                    <Card
                      key={item.id}
                      name={item.name}
                      status={toUpperCaseFirstLetter(item.status)}
                      specie={item.species}
                      image={item.image}
                    />
                  ))}
            </SC.GridCard>
          ) : (
            <p>Loading...!!</p>
          )}
        </Box>

        <Box title="Personaje #2" align="right">
          {!loading ? (
            <SC.GridCard>
              {dataCharacter &&
                dataCharacter.results
                  .slice(10)
                  .map((item) => (
                    <Card
                      key={item.id}
                      name={item.name}
                      status={toUpperCaseFirstLetter(item.status)}
                      specie={item.species}
                      image={item.image}
                    />
                  ))}
            </SC.GridCard>
          ) : (
            <p>Loading...!!</p>
          )}
        </Box>
      </SC.GridWrapper>

      {dataCharacter && (
        <Pagination
          nextPage={dataCharacter?.info.next}
          prevPage={dataCharacter?.info.prev}
        />
      )}

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
