// https://zfcnfpmjxxpbekowzyks.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg
import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("cabins").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be loaded");
  }

  return data;
}

export async function createEditCabin({ newCabinData, id }) {
  const hasImagePath = newCabinData.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabinData.image.name}`.replaceAll(
    "/",
    "",
  );

  const imagePAth = hasImagePath
    ? newCabinData.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  // 1. Create/Edit the cabin
  let query = supabase.from("cabins");

  // A) CREATE
  if (!id) {
    query = query.insert([{ ...newCabinData, image: imagePAth }]);
  }

  // B) EDIT
  if (id) {
    query = query.update({ ...newCabinData, image: imagePAth }).eq("id", id);
  }

  const { data, error } = await query.select();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created");
  }

  // 2. Upload the image
  if (hasImagePath) return data;

  const { error: storageError } = await supabase.storage
    .from("cabin-images")
    .upload(imageName, newCabinData.image);

  // 3. Delete the cabin is there was an error uploading the corresponding image
  if (storageError) {
    await supabase.from("cabins").delete().eq("id", data.id);
    console.error(storageError);
    throw new Error(
      "Cabin could not be uploaded and the cabin was not created",
    );
  }

  return data;
}

export async function deleteCabin(id) {
  const { error } = await supabase.from("cabins").delete().eq("id", id);

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be deleted");
  }
}
