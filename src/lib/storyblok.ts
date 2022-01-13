import StoryblokClient, { StoryData } from "storyblok-js-client";
import { useState, useEffect } from "react";

declare global {
  interface Window {
    StoryblokBridge: FunctionConstructor;
  }
  interface Function {
    on: Function;
  }
}

const Storyblok = new StoryblokClient({
  accessToken: process.env.STORYBLOK_ACCESS_TOKEN,
  cache: {
    type: "memory",
    clear: "auto",
  },
});

export type getStoryResponse = {
  story: StoryData | null;
  error?: undefined | string;
};

export const getLinks = async (slug?: string) => {
  let sbParams = {
    version: process.env.STORYBLOK_VERSION,
    starts_with: `${slug}/`,
  };
  let { data } = await Storyblok.get(`cdn/links/`, sbParams);
  const stories = Object.entries(data.links);
  return data ? stories : null;
};

export const getStory = async (
  uuid?: string,
  content?: string,
  slug?: string
): Promise<any> => {
  try {
    if (uuid) {
      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
        find_by: "uuid",
      };

      const response = await Storyblok.get(`cdn/stories/${uuid}`, sbParams);
      return { ...response.data };
    } else if (slug && content) {
      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
      };
      const fullSlug = content ? `${content}/${slug}` : `${slug}`;
      const response = await Storyblok.get(`cdn/stories/${fullSlug}`, sbParams);
      return { ...response.data };
    } else if (slug && !content) {
      const sbParams = {
        version: process.env.STORYBLOK_VERSION,
      };
      const response = await Storyblok.get(`cdn/stories/${slug}`, sbParams);
      return { ...response.data };
    } else throw new Error("NO SLUG or ID PRESENT");
  } catch (err) {
    if (err instanceof Error) {
      console.log(err.message);
      return { story: null, error: err.message as string };
    }
  }
};