import React from "react";

export const Main = () => {
  const products = [
    { name: "Micrófono Shure", price: "230.000", category: "Audio", img: "https://www.miche.com.co/cdn/shop/products/MIC014_800x800.png?v=1576616415" },
    { name: "Cabinas", price: "553.000", category: "Audio", img: "https://electroferia.com/wp-content/uploads/2020/08/CABINA-8PMXZ-MAXLIM-1.jpg" },
    { name: "Consola de sonidos", price: "420.900", category: "Audio", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTJumKmfDmDybrBtTJGea4qN89LuweEbNfbA&s" },
    { name: "Base Micrófono", price: "49.000", category: "Audio", img: "https://allmusic.com.co/cdn/shop/products/WhatsAppImage2021-10-06at8.41.52PM.jpg?v=1634262425" }
  ];

  return (
    <main className="container py-3">
      <div className="row g-3">
        <aside className="col-4">
          <div className="card shadow-sm">
            <div className="card-header bg-primary text-white py-2"><strong>Nuevo producto</strong></div>
            <div className="card-body py-3">
              <form>
                <div className="mb-2">
                  <label className="form-label mb-1">Nombre</label>
                  <input className="form-control form-control-sm" />
                </div>
                <div className="row g-2 mb-2">
                  <div className="col">
                    <label className="form-label mb-1">Precio</label>
                    <input type="number" className="form-control form-control-sm" />
                  </div>
                  <div className="col">
                    <label className="form-label mb-1">Stock</label>
                    <input type="number" className="form-control form-control-sm" />
                  </div>
                </div>
                <div className="mb-3">
                  <label className="form-label mb-1">Categoría</label>
                  <select className="form-select form-select-sm"><option>Audio</option></select>
                </div>
                <button className="btn btn-success btn-sm w-100">Agregar</button>
              </form>
            </div>
          </div>
        </aside>
        <section className="col-8">
          <h5 className="mb-2">Productos</h5>
          <div className="d-flex flex-column gap-2">
            {products.map((p, i) => (
              <div key={i} className="card shadow-sm">
                <div className="row g-0 align-items-center">
                  <div className="col-3">
                    <img src={p.img} alt={p.name} className="img-fluid" style={{ height: "90px", objectFit: "cover" }} />
                  </div>
                  <div className="col-6">
                    <div className="card-body py-2">
                      <small className="badge bg-secondary mb-1">{p.category}</small>
                      <div className="fw-semibold">{p.name}</div>
                      <div className="text-primary fw-bold">COP ${p.price}</div>
                    </div>
                  </div>
                  <div className="col-3 px-2">
                    <button className="btn btn-outline-primary btn-sm w-100">Comprar</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
};