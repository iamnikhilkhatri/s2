import { createClient } from "contentful";
const client = createClient({
  space: "y4sk54o5iczw",
  accessToken: "ckY-Ecs8KF6cDilA7WzobT4-RuoC7G9ug5iAZbbERp0",
});
export const getGalleryImages = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "gallery",
    });
    const filteredEntries = entries.items.map((data) => {
      const filteredEntry = data;
      return filteredEntry;
    });
    return filteredEntries;
  } catch (error) {
    console.log(error);
  }
};

export const getMenuImages = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "eurofortytwo",
    });
    const filteredEntries = entries.items.map((data) => {
      const filteredEntry = data;
      return filteredEntry;
    });
    return filteredEntries;
  } catch (error) {
    console.log(error);
  }
};

export const getFoodImages = async () => {
  try {
    const entries = await client.getEntries({
      content_type: "eurothirty",
    });
    const filteredEntries = entries.items.map((data) => {
      const filteredEntry = data;
      return filteredEntry;
    });
    return filteredEntries;
  } catch (error) {
    console.log(error);
  }
};
