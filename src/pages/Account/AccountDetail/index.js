import React from 'react'
export const AccountDetail = () => {
  return (
    <>
      {/* Account details */}
      <div className="ps-md-3 ps-lg-0 mt-md-2 py-md-4">

        <h1 className="h2 pt-xl-1 pb-3">Detalle de cuenta</h1>
        {/* Basic info */}
        <h2 className="h5 text-primary mb-4">Información</h2>
        <form className="needs-validation border-bottom pb-3 pb-lg-4" noValidate>
          <div className="row pb-2">
            <div className="col-sm-12 mb-4">
              <label htmlFor="nombre" className="form-label fs-base">Nombre</label>
              <input type="text" id="nombre" className="form-control form-control-lg" />
            </div>

            <div className="col-sm-6 mb-4">
              <label htmlFor="email" className="form-label fs-base">Correo electrónico</label>
              <input type="email" id="email" className="form-control form-control-lg" />
            </div>
            <div className="col-sm-6 mb-4">
              <label htmlFor="phone" className="form-label fs-base">Celular <small className="text-muted">(Opcional)</small></label>
              <input type="text" id="phone" className="form-control form-control-lg" />
            </div>
          </div>
          <div className="d-flex mb-3">
            <button type="reset" className="btn btn-secondary me-3">Cancel</button>
            <button type="submit" className="btn btn-primary">Guardar cambios</button>
          </div>
        </form>

        {/* Delete account */}
        <h2 className="h5 text-primary pt-1 pt-lg-3 mt-4">Eliminar cuenta</h2>
        <p>Al eliminar tu cuenta, este proceso es irreversible.</p>
        <div className="form-check mb-4">
          <input type="checkbox" id="delete-account" className="form-check-input" />
          <label htmlFor="delete-account" className="form-check-label fs-base">Si, quiero eliminar mi cuenta.</label>
        </div>
        <button type="button" className="btn btn-danger">Eliminar</button>
      </div>
    </>
  )
}
