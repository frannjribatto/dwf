// crear la clase Banda aquí
interface Album {
  title: string;
  songs: string[];
}

class Banda {
  members: string[];
  albums: Album[];

  constructor(members: string[], albums: Album[]) {
    this.members = members;
    this.albums = albums;
  }

  getFirstAlbum() {
    return this.albums[0];
  }
  getAllAlbums() {
    return this.albums;
  }
  getAllMembers() {
    return this.members;
  }
  getRandomSong(albumTitle) {
    const album = this.albums.find((album) => {
      if (albumTitle == album.title) {
        return album;
      }
    });
    const song = Math.floor(Math.random() * album.songs.length);

    return album.songs[song];
  }
}

// no modificar este test
function testClaseBanda() {
  const members = ["dana", "pau"];
  const fa = {
    title: "album 1",
    songs: ["album 1 - tema 1", "album 1 - tema 2"],
  };
  const banda = new Banda(members, [
    fa,
    {
      title: "album 2",
      songs: ["album 2 - tema 1", "album 2 - tema 2", "album 2 - tema 3"],
    },
  ]);

  const firstAlbum = banda.getFirstAlbum();
  const allMembers = banda.getAllMembers();
  const randomSongAlbum1 = banda.getRandomSong("album 1");

  if (
    firstAlbum.title == fa.title &&
    fa.songs.length == firstAlbum.songs.length &&
    JSON.stringify(allMembers.sort()) == JSON.stringify(members.sort()) &&
    fa.songs.includes(randomSongAlbum1)
  ) {
    console.log("testClaseBanda passed");
  } else {
    throw "testClaseBanda not passed";
  }
}

function main() {
  testClaseBanda();
}

main();
