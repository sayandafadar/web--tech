import React from "react";
import { GoTrashcan } from "react-icons/go";

import {
  useFetchAlbumsQuery,
  useAddAlbumMutation,
  useDeleteAlbumMutation,
} from "../store";
import Skeleton from "./Skeleton";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import PhotosList from "./PhotosList";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  const [addAlbum, results] = useAddAlbumMutation();
  const [deleteAlbum] = useDeleteAlbumMutation();

  const handleAddAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skeleton times={3} className='h-10 w-full' />;
  } else if (error) {
    content = <div>Error fetching albums...</div>;
  } else {
    content = data.map((album) => {
      const header = (
        <div className='flex flex-row justify-between items-center m-2'>
          <Button
            danger
            className='mr-3'
            loading={results.isLoading}
            onClick={() => deleteAlbum(album)}>
            <GoTrashcan />
          </Button>
          <div>{album.title}</div>
        </div>
      );
      return (
        <ExpandablePanel header={header} key={album.id}>
          <PhotosList album={album} />
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div className='flex flex-row justify-between items-center m-2'>
        <h3 className='text-lg font-bold'>
          <div>Albums by {user.name}</div>
        </h3>
        <Button loading={results.isLoading} onClick={handleAddAlbum}>
          + Add Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
