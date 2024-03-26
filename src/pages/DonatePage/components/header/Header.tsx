import { useState } from "react";
import "./header.css";

type TCategory =
  | "Pendidikan"
  | "Kesehatan"
  | "Hunian Layak"
  | "Sembako"
  | "None";

export default function Header() {
  const [category, setCategory] = useState<TCategory | null>(null);
  const [sort, setSort] = useState(false);

  return (
    <div className="header-form">
      <div className="dropdown-sort">
        <div className="dropdown">
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            {!category ? "Filter Kategori" : category}
          </button>
          <ul className="dropdown-menu">
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Kesehatan")}
              >
                Kesehatan
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Sembako")}
              >
                Sembako
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Pendidikan")}
              >
                Pendidikan
              </a>
            </li>
            <li>
              <a
                className="dropdown-item"
                onClick={() => setCategory("Hunian Layak")}
              >
                Hunian Layak
              </a>
            </li>
            <li>
              <a className="dropdown-item" onClick={() => setCategory("None")}>
                None
              </a>
            </li>
          </ul>
        </div>
        <div className="sorting">
          <button className="btn" onClick={() => setSort(!sort)}>
            Urutkan {sort ? "Terlama" : "Terbaru"}
          </button>
        </div>
      </div>
      <div className="search">
        <input type="text" className="form-control" placeholder="Cari donasi" />
      </div>
    </div>
  );
}
