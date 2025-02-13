import EventModel from "./event.mongo.js";

async function GetSongs() {
  try {
    const songs = await EventModel.find();
    return songs;
  } catch (error) {
    console.log(error);
   throw new Error("Error while fetching songs");
  }
}

export { GetSongs };
