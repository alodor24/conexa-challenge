import { Character } from "@/types";

export const toUpperCaseFirstLetter = (text: string) => {
  return text[0].toUpperCase() + text.substring(1);
};

export const getSharedEpisodes = (dataMultipleCharacters: Character[]) => {
  const allEpisodes = dataMultipleCharacters.reduce(
    (episodes: string[], character) => {
      return episodes.concat(character.episode);
    },
    []
  );

  const sharedEpisodes = allEpisodes.filter((episode, index) => {
    return allEpisodes.indexOf(episode) !== index;
  });

  return sharedEpisodes;
};
