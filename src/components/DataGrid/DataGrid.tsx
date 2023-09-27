"use client";

import useGetAllCharacters from "@/hooks/useGetAllCharacters";
import Box from "../Box";
import Card from "../Card";
import Pagination from "../Pagination";
import * as SC from "./DataGrid.styles";
import {
  getEpisodeFromUrls,
  getSharedEpisodes,
  toUpperCaseFirstLetter,
} from "@/utils/help";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import { useEffect, useState } from "react";
import { SectionCharacterEnum } from "@/constants";
import useGetMultipleCharacters from "@/hooks/useGetMultipleCharacters";
import { Episode } from "@/types";
import Loader from "../Loader";
import Error from "../Error";

const DataGrid = () => {
  const { url } = useSelector((state: RootState) => state.pagination);
  const [multiCharacter, setMultiCharacter] = useState({
    character1: 0,
    character2: 0,
  });
  const [episodesCharacter1, setEpisodesCharacter1] = useState<Episode[]>([]);
  const [episodesCharacter2, setEpisodesCharacter2] = useState<Episode[]>([]);
  const [episodesShared, setEpisodesShared] = useState<Episode[]>([]);

  const {
    data: dataCharacter,
    loading,
    error,
  } = useGetAllCharacters({
    url,
  });

  const { data: dataMultipleCharacters } = useGetMultipleCharacters({
    character1: multiCharacter.character1,
    character2: multiCharacter.character2,
  });

  useEffect(() => {
    if (dataMultipleCharacters) {
      getEpisodeFromUrls(dataMultipleCharacters[0].episode).then((data) => {
        setEpisodesCharacter1(data);
      });

      getEpisodeFromUrls(dataMultipleCharacters[1].episode).then((data) => {
        setEpisodesCharacter2(data);
      });

      const sharedEpisodes = getSharedEpisodes(dataMultipleCharacters);
      getEpisodeFromUrls(sharedEpisodes).then((data) => {
        setEpisodesShared(data);
      });
    }
  }, [dataMultipleCharacters]);

  const handleSelectCharacter = (id: number, section: string) => {
    if (section === SectionCharacterEnum.CHARACTER_1) {
      setMultiCharacter((prevState) => ({
        ...prevState,
        character1: id,
      }));
    } else {
      setMultiCharacter((prevState) => ({
        ...prevState,
        character2: id,
      }));
    }
  };

  return (
    <>
      <SC.Title>¿Qué tanto conocés sobre la serie animada?</SC.Title>
      <SC.Subtitle>
        Elegí un personaje del recuadro 1 y recuadro 2 para tener más
        información de los personajes
      </SC.Subtitle>

      <SC.GridWrapper>
        <Box title="Personaje #1">
          {error && <Error />}
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
                      isActive={multiCharacter.character1 === item.id && true}
                      onClick={() =>
                        handleSelectCharacter(
                          item.id,
                          SectionCharacterEnum.CHARACTER_1
                        )
                      }
                    />
                  ))}
            </SC.GridCard>
          ) : (
            <Loader />
          )}
        </Box>

        <Box title="Personaje #2" align="right">
          {error && <Error />}
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
                      isActive={multiCharacter.character2 === item.id && true}
                      onClick={() =>
                        handleSelectCharacter(
                          item.id,
                          SectionCharacterEnum.CHARACTER_2
                        )
                      }
                    />
                  ))}
            </SC.GridCard>
          ) : (
            <Loader />
          )}
        </Box>
      </SC.GridWrapper>

      {dataCharacter && (
        <Pagination
          nextPage={dataCharacter?.info.next}
          prevPage={dataCharacter?.info.prev}
        />
      )}

      {(dataMultipleCharacters || []).length > 0 && (
        <SC.GridWrapper $columns={3}>
          <Box title="Personaje #1 - Solo Episodios">
            <SC.List>
              {episodesCharacter1.map((item) => (
                <li key={item.id}>
                  <b>{item.episode}</b> - {item.name} - <i>{item.air_date}</i>
                </li>
              ))}
            </SC.List>
          </Box>

          <Box title="Personaje #1 & #2 - Episodios Compartidos">
            <SC.List>
              {episodesShared.map((item) => (
                <li key={item.id}>
                  <b>{item.episode}</b> - {item.name} - <i>{item.air_date}</i>
                </li>
              ))}
            </SC.List>
          </Box>

          <Box title="Personaje #2 - Solo Episodios">
            <SC.List>
              {episodesCharacter2.map((item) => (
                <li key={item.id}>
                  <b>{item.episode}</b> - {item.name} - <i>{item.air_date}</i>
                </li>
              ))}
            </SC.List>
          </Box>
        </SC.GridWrapper>
      )}
    </>
  );
};

export default DataGrid;
