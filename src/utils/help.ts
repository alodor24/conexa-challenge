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

const getEpisode = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Network response was not ok for ${url}`);
  }

  return response.json();
};

export const getEpisodeFromUrls = async (urls: string[]) => {
  try {
    const fetchDataPromises = urls.map((url) => getEpisode(url));
    const episodeData = await Promise.all(fetchDataPromises);
    return episodeData;
  } catch (error) {
    throw error;
  }
};
