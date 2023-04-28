const main_video = document.querySelector('.main-video video');
const main_video_title = document.querySelector('.main-video .title');
const video_playlist = document.querySelector('.video-playlist .videos');
const playlistBtns = document.getElementById('btn-PlayList');
const playlistBtn = document.getElementById('btn-PlayList');

let data = [
  {
    'id': 'a1',
    'title': 'Fiesta en el desierto',
    'name': 'Fiesta en el Desierto.mp4',
    'duration': '5:37',
  },
  {
    'id': 'a2',
    'title': 'Los Brazos de Papá',
    'name': 'Los Brazos de Papá.mp4',
    'duration': '12:17',
  },
  {
    'id': 'a3',
    'title': 'Ambientacion Sound',
    'name': 'ambientacionpiano.mp4',
    'duration': '39:49',
  },
];

let data1 = [
  {
    'id': 'a4',
    'title': 'Joseo',
    'name': 'Joseo.mp4',
    'duration': '2:39',
  },
  {
    'id': 'a5',
    'title': 'Luces Led',
    'name': 'Luces LED.mp4',
    'duration': '2:56',
  },
];


function ShowPlayList(video_playlist){
  video_playlist.innerHTML = '';
  for(let song of video_playlist){
    let video_element = `
    <div class="video" data-id="${video.id}">
      <img src="images/play.svg" alt="">
      <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
      <h3 class="title">${video.title}</h3>
      <p class="time">${video.duration}</p>
    </div>`;
    video_playlist.innerHTML += video_element;
  }
}

playlistBtn.addEventListener("click", function(){
  ShowPlayList(data);
});


playlistBtns.addEventListener("click", function(){
  curren_Playlist = data1; 
  ShowPlayList(data);
})

// variable para hacer un seguimiento de la posición del video actual

let current_video_index = 0;

// función para reproducir el siguiente video en la lista

function playNextVideo() {

  // cambia la posición del video actual en la lista
  current_video_index++;
  if (current_video_index >= data.length) {

    // si hemos llegado al final de la lista, reiniciamos al primer video

    current_video_index = 0;
  }

  // reproduce el siguiente video en la lista

  let next_video = data[current_video_index];
  main_video.src = 'videos/' + next_video.name;
  main_video_title.innerHTML = next_video.title;
  main_video.play();

  // actualiza la lista de reproducción para que el siguiente video tenga la clase "active"

  videos.forEach((video, i) => {
    if (i === current_video_index) {
      video.classList.add('active');
      video.querySelector('img').src = 'images/pause.svg';
    } else {
      video.classList.remove('active');
      video.querySelector('img').src = 'images/play.svg';
    }
  });
}

data.forEach((video, i) => {
  let video_element = `
    <div class="video" data-id="${video.id}">
      <img src="images/play.svg" alt="">
      <p>${i + 1 > 9 ? i + 1 : '0' + (i + 1)}. </p>
      <h3 class="title">${video.title}</h3>
      <p class="time">${video.duration}</p>
    </div>
  `;
  video_playlist.innerHTML += video_element;
});

let videos = document.querySelectorAll('.video');
videos[0].classList.add('active');
videos[0].querySelector('img').src = 'images/pause.svg';

videos.forEach(selected_video => {
    selected_video.onclick = () => {
        for (all_videos of videos) {
            all_videos.classList.remove('active');
            all_videos.querySelector('img').src = 'images/play.svg';
        }

        selected_video.classList.add('active');
        selected_video.querySelector('img').src = 'images/pause.svg';

        let match_video = data.find(video => video.id == selected_video.dataset.id);
        main_video.src = 'videos/' + match_video.name;
        main_video_title.innerHTML = match_video.title;
        currentIndex = data.findIndex(video => video.id == selected_video.dataset.id);
    }
});

main_video.onended = function() {
    currentIndex++;
    if (currentIndex >= data.length) {
        currentIndex = 0;
    }
    let next_video = document.querySelector(`.video[data-id="${data[currentIndex].id}"]`);
    next_video.onclick();
    main_video.play();
}; 
