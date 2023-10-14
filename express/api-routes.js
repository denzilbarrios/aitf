// Filename: api-routes.js
// Initialize express router
let router = require("express").Router();
// Set default API response
router.get("/", function(req, res) {
  res.json({
    status: "API Its Working",
    message: "Welcome to RESTHub crafted with love!"
  });
});

// Import user controller
var userController = require("./controllers/users.controller");
// user routes
router
  .route("/users")
  .get(userController.index)
  .post(userController.new);
router
  .route("/user/:user_id")
  .get(userController.view)
  .patch(userController.update)
  .put(userController.update)
  .delete(userController.delete);
router.route("/user/authenticate").post(userController.authenticate);
router
  .route("/user/changepassword/:user_id")
  .put(userController.changePassword);

// Import Contact controller
var contactController = require("./controllers/contact.controller");
// Contact routes
router
  .route("/contacts")
  .get(contactController.index)
  .post(contactController.new);
router
  .route("/contact/:contact_id")
  .get(contactController.view)
  .patch(contactController.update)
  .put(contactController.update)
  .delete(contactController.delete);

  
// Import agencia controller
var agenciaController = require("./controllers/agencia.controller");

// Rutas para el controlador de agencia
router
  .route("/agencias")
  .get(agenciaController.index)
  .post(agenciaController.new);
router
  .route("/agencia/:agencia_id")
  .get(agenciaController.view)
  .patch(agenciaController.update)
  .put(agenciaController.update)
  .delete(agenciaController.delete);

// Import boleto controller
var boletoController = require("./controllers/boleto.controller");

// Rutas para el controlador de boleto
router
  .route("/boletos")
  .get(boletoController.index)
  .post(boletoController.new);
router
  .route("/boleto/:boleto_id")
  .get(boletoController.view)
  .patch(boletoController.update)
  .put(boletoController.update)
  .delete(boletoController.delete);


  
// Import destino controller
var destinoController = require("./controllers/destino.controller");

// Rutas para el controlador de destino
router
  .route("/destinos")
  .get(destinoController.index)
  .post(destinoController.new);
router
  .route("/destino/:destino_id")
  .get(destinoController.view)
  .patch(destinoController.update)
  .put(destinoController.update)
  .delete(destinoController.delete);

// Import empleado controller
var empleadoController = require("./controllers/empleado.controller");

// Rutas para el controlador de empleado
router
  .route("/empleados")
  .get(empleadoController.index)
  .post(empleadoController.new);
router
  .route("/empleado/:empleado_id")
  .get(empleadoController.view)
  .patch(empleadoController.update)
  .put(empleadoController.update)
  .delete(empleadoController.delete);

// Import empresa controller
var empresaController = require("./controllers/empresa.controller");

// Rutas para el controlador de empresa
router
  .route("/empresas")
  .get(empresaController.index)
  .post(empresaController.new);
router
  .route("/empresa/:empresa_id")
  .get(empresaController.view)
  .patch(empresaController.update)
  .put(empresaController.update)
  .delete(empresaController.delete);

// Import factura controller
var facturaController = require("./controllers/factura.controller");

// Rutas para el controlador de factura
router
  .route("/facturas")
  .get(facturaController.index)
  .post(facturaController.new);
router
  .route("/factura/:factura_id")
  .get(facturaController.view)
  .patch(facturaController.update)
  .put(facturaController.update)
  .delete(facturaController.delete);

// Import facturaDetalle controller
var facturaDetalleController = require("./controllers/facturaDetalle.controller");

// Rutas para el controlador de facturaDetalle
router
  .route("/facturaDetalles")
  .get(facturaDetalleController.index)
  .post(facturaDetalleController.new);
router
  .route("/facturaDetalle/:facturaDetalle_id")
  .get(facturaDetalleController.view)
  .patch(facturaDetalleController.update)
  .put(facturaDetalleController.update)
  .delete(facturaDetalleController.delete);

// Import horario controller
var horarioController = require("./controllers/horario.controller");

// Rutas para el controlador de horario
router
  .route("/horarios")
  .get(horarioController.index)
  .post(horarioController.new);
router
  .route("/horario/:horario_id")
  .get(horarioController.view)
  .patch(horarioController.update)
  .put(horarioController.update)
  .delete(horarioController.delete);

// Import puesto controller
var puestoController = require("./controllers/puesto.controller");

// Rutas para el controlador de puesto
router
  .route("/puestos")
  .get(puestoController.index)
  .post(puestoController.new);
router
  .route("/puesto/:puesto_id")
  .get(puestoController.view)
  .patch(puestoController.update)
  .put(puestoController.update)
  .delete(puestoController.delete);

// Import ruta controller
var rutaController = require("./controllers/ruta.controller");

// Rutas para el controlador de ruta
router
  .route("/rutas")
  .get(rutaController.index)
  .post(rutaController.new);
router
  .route("/ruta/:ruta_id")
  .get(rutaController.view)
  .patch(rutaController.update)
  .put(rutaController.update)
  .delete(rutaController.delete);

// Import serie controller
var serieController = require("./controllers/serie.controller");

// Rutas para el controlador de serie
router
  .route("/series")
  .get(serieController.index)
  .post(serieController.new);
router
  .route("/serie/:serie_id")
  .get(serieController.view)
  .patch(serieController.update)
  .put(serieController.update)
  .delete(serieController.delete);

// Import servicio controller
var servicioController = require("./controllers/servicio.controller");

// Rutas para el controlador de servicio
router
  .route("/servicios")
  .get(servicioController.index)
  .post(servicioController.new);
router
  .route("/servicio/:servicio_id")
  .get(servicioController.view)
  .patch(servicioController.update)
  .put(servicioController.update)
  .delete(servicioController.delete);

// Import tipoAgencia controller
var tipoAgenciaController = require("./controllers/tipoAgencia.controller");

// Rutas para el controlador de tipoAgencia
router
  .route("/tipoAgencias")
  .get(tipoAgenciaController.index)
  .post(tipoAgenciaController.new);
router
  .route("/tipoAgencia/:tipoAgencia_id")
  .get(tipoAgenciaController.view)
  .patch(tipoAgenciaController.update)
  .put(tipoAgenciaController.update)
  .delete(tipoAgenciaController.delete);


// Export API routes
module.exports = router;
