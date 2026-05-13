import "./App.css";

import asmara from "./assets/asmara.jpg";
import truebeauty from "./assets/truebeauty.jpg";
import upinipin from "./assets/upinipin.jpg";

function App() {

  const nama = "Ginda Azahra";
  const nim = "23552011281";
  const kelas = "TIF RP 23B";
  const universitas = "Universitas Teknologi Bandung";
  const tanggalLahir = "20 Juni 2005";

  const filmFavorite = [
    {
      nama: "Asmara Gen Z",
      gambar: asmara,
    },

    {
      nama: "True Beauty",
      gambar: truebeauty,
    },

    {
      nama: "Upin Ipin",
      gambar: upinipin,
    },
  ];

  const cekZodiac = () => {
    alert("Zodiac kamu adalah Gemini ♊");
  };

  return (
    <div className="container">

      <div className="card">

        <h1>✨ My Profile ✨</h1>

        <div className="info">
          <p><span>Nama :</span> {nama}</p>
          <p><span>NIM :</span> {nim}</p>
          <p><span>Kelas :</span> {kelas}</p>
          <p><span>Universitas :</span> {universitas}</p>
          <p><span>Tanggal Lahir :</span> {tanggalLahir}</p>
        </div>

        <button onClick={cekZodiac}>
          Cek Zodiac
        </button>

        <div className="film">

          <h2>🎬 Film Favorite</h2>

          <div className="film-container">

            {filmFavorite.map((film, index) => (
              <div className="film-card" key={index}>

                <img src={film.gambar} alt={film.nama} />

                <p>{film.nama}</p>

              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;