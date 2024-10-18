import song2 from "../assets/img/song2.jpg";
import chloe from "../assets/img/chloe.jpg";
import song1 from "../assets/img/song1.jpg";
import song3 from "../assets/img/song3.jpg";
import song4 from "../assets/img/song4.jpg";
import song5 from "../assets/img/song5.jpg";
import blablabla from "../assets/img/blablabla.jpg";
import song6 from "../assets/img/song6.jpg";
import chloe2 from "../assets/img/chloe2.jpg";

const PlayList = () => {
  const tracks = [
    { title: "Joji - Slow Dancing in the Dark", artist: "Chloe Moriondo", imgSrc: chloe2, duration: "5 min" },
    { title: "Buttercup", artist: "Chloe Moriondo", imgSrc: chloe, duration: "4 min" },
    { title: "Y si veo tu mamá", artist: "Bad Bunny", imgSrc: song1, duration: "3 min" },
    { title: "Nevermind", artist: "Nirvana", imgSrc: song2, duration: "3 min" },
    { title: "Sombras", artist: "Zoe", imgSrc: song3, duration: "3 min" },
    { title: "Paparazzi", artist: "Kim Dracula", imgSrc: song4, duration: "3 min" },
    { title: "It's boy", artist: "BBNO$", imgSrc: song5, duration: "3 min" },
    { title: "Engravings", artist: "Ethan Bortnick", imgSrc: song6, duration: "3 min" },
    { title: "Blablabla", artist: "Maneskin", imgSrc: blablabla, duration: "4 min" },
  ];

  return (
    <article className="medium-height scroll surface">
      <p>You may like</p>
      {tracks.map((track, index) => (
        <div key={index}>
          <div className="small-space"></div>
          <a className="row no-padding surface-container round surface-container-highest">
            <img className="circle large" src={track.imgSrc} alt={track.title} />
            <div className="max">
              <h6 className="small">{track.title} </h6>
              <div>{track.artist}</div>
            </div>
            <label className="padding">{track.duration}</label>
          </a>
          <div className="small-space"></div>
          <hr />
          
        </div>
      ))}
    </article>
  );
};

export default PlayList;
