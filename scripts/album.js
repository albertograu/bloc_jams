// -- EXAMPLE ALBUM --

var albumPicasso = {
  title: 'The Colors',
  artist: 'Pablo Picasso',
  label: 'Cubism Records',
  year: '1881',
  albumArtUrl: 'assets/images/album_covers/01.png',
  songs: [
    { title: 'Blue', duration: '4:26' },
    { title: 'Green', duration: '3:12' },
    { title: 'Red', duration: '1:58' },
    { title: 'Pink', duration: '4:01' },
    { title: 'white', duration: '2:15' }
  ]
};

// -- SECOND EXAMPLE ALBUM --

var albumMarconi = {
  title: 'The Telephone',
  artist: 'Guglielmo Marconi',
  label: 'Tele Records',
  year: '1909',
  albumArtUrl: 'assets/images/album_covers/20.png',
  songs: [
    { title: 'Hello, Operator?', duration: '1:01' },
    { title: 'Ring, ring, ring', duration: '5:01' },
    { title: 'Text me like a normal person', duration: '2:54' },
    { title: 'Can you hear me now?', duration: '3:49' },
    { title: 'Wrong number ', duration: '0:12' }
  ]
};

// -- THIRD EXAMPLE ALBUM --

var albumEmoji = {
  title: 'Songs of Emoji',
  artist: 'Dr Moji',
  label: 'Text Records',
  year: '2016',
  albumArtUrl: 'assets/images/album_covers/02.png',
  songs: [
    { title: 'Smiley', duration: '1:01' },
    { title: 'Dancing Lady in Red', duration: '5:01' },
    { title: 'Cool Sunglasses', duration: '2:54' },
    { title: 'Taco Emoji', duration: '3:49' },
    { title: 'Poop Emoji', duration: '0:12' }
  ]
};


// -- DYNAMICALLY GENERATE SONG ROW CONTENT --

var createSongRow = function(songNumber, songName, songLength) {
  var template =
    '<tr class="album-view-song-item">'
  + ' <td class="song-item-number">' + songNumber + '</td>'
  + ' <td class="song-item-title">' + songName + '</td>'
  + ' <td class="song-item-duration">' + songLength + '</td>'
  + '</tr>'
  ;

  return template;
};

// -- SET CURRENT ALBUM WHEN WINDOW.ONLOAD --

var albumTitle = document.getElementsByClassName('album-view-title')[0];
var albumArtist = document.getElementsByClassName('album-view-artist')[0];
var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
var albumImage = document.getElementsByClassName('album-cover-art')[0];
var albumSongList = document.getElementsByClassName('album-view-song-list')[0];

var setCurrentAlbum = function(album) {

  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);

  albumSongList.innerHTML = ' ';

  for (var i = 0; i < album.songs.length; i++) {
    albumSongList.innerHTML += createSongRow( i + 1, album.songs[i].title, album.songs[i].duration);
  }
};

// -- EVENT LISTENER ONLOAD --

window.onload = function() {
  setCurrentAlbum(albumPicasso);
};

// -- EVENT LISTENER ALBUM TOGGLE --

var albums = [albumPicasso, albumMarconi, albumEmoji];
var index = 1;

albumImage.addEventListener("click", function(event) {
  setCurrentAlbum(albums[index]);
  index++;
    if (index == albums.length) {
      index = 0;
    }
  });