export function getYoutubeIdFromUrl(url) {
  return (
    url.match(
      /.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/
    )?.[1] ?? ""
  );
}

export function embed(video) {
  return `https://www.youtube.com/embed/${getYoutubeIdFromUrl(video)}`;
}

export function getThumbnailFromId(id) {
  return `https://img.youtube.com/vi/${id}/mqdefault.jpg`;
}
