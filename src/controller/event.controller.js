import {GetSongs} from "../model/event.model.js";


async function getAllSongs(req,res){
  try{
    const songs = await GetSongs();
    res.status(200).json(songs);
  }catch(error){
    res.status(500).json({msg:error});
  }
}


export {getAllSongs};