const playlistBtns = document.querySelectorAll('.playlist-btn');

playlistBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const playlistIndex = btn.dataset.playlist;
    loadPlaylist(playlistIndex);
  });
});
