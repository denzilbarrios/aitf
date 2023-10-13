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

// Import agenciadestino controller
const agenciadestinoController = require("./controllers/agenciadestino.controller");

// Rutas para el controlador de agenciasdestino
router
  .route("/agenciadestino")
  .get(agenciadestinoController.index)
  .post(agenciadestinoController.new);
router
  .route("/agenciadestino/:agenciadestino_id")
  .get(agenciadestinoController.view)
  .patch(agenciadestinoController.update)
  .put(agenciadestinoController.update)
  .delete(agenciadestinoController.delete);

// Import destinos controller
const destinossController = require("./controllers/destinoss.controller");

// Rutas para el controlador de destinos
router
  .route("/destinoss")
  .get(destinossController.index)
  .post(destinossController.new);
router
  .route("/destinoss/:destinoss_id")
  .get(destinossController.view)
  .patch(destinossController.update)
  .put(destinossController.update)
  .delete(destinossController.delete);

// Import destino controller
const destinoController = require("./controllers/destino.controller");

// Rutas para el controlador de destinos
router
  .route("/destino")
  .get(destinoController.index)
  .post(destinoController.new);
router
  .route("/destino/:destino_id")
  .get(destinoController.view)
  .patch(destinoController.update)
  .put(destinoController.update)
  .delete(destinoController.delete);

// Import hora_rutasugerida controller
const hora_rutasugeridaController = require("./controllers/hora_rutasugerida.controller");

// Rutas para el controlador de hora_rutasugerida
router
  .route("/hora_rutasugerida")
  .get(hora_rutasugeridaController.index)
  .post(hora_rutasugeridaController.new);
router
  .route("/hora_rutasugerida/:hora_rutasugerida_id")
  .get(hora_rutasugeridaController.view)
  .patch(hora_rutasugeridaController.update)
  .put(hora_rutasugeridaController.update)
  .delete(hora_rutasugeridaController.delete);

// Import ruta controller 
const rutaController = require("./controllers/rutas.controller");

// Rutas para el controlador de rutas
router
  .route("/ruta")
  .get(rutaController.index)
  .post(rutaController.new);
router
  .route("/ruta/:ruta_id")
  .get(rutaController.view)
  .patch(rutaController.update)
  .put(rutaController.update)
  .delete(rutaController.delete);

 // Import rutas_detalle controller
const rutas_detalleController = require("./controllers/rutas_detalle.controller");

// Rutas para el controlador de rutas_detalle
router
  .route("/rutas_detalle")
  .get(rutas_detalleController.index)
  .post(rutas_detalleController.new);
router
  .route("/rutas_detalle/:rutas_detalle_id")
  .get(rutas_detalleController.view)
  .patch(rutas_detalleController.update)
  .put(rutas_detalleController.update)
  .delete(rutas_detalleController.delete);

// Import rutas_puntos_enlace controller
const rutas_puntos_enlaceController = require("./controllers/rutas_puntos_enlace.controller");

// Rutas para el controlador de rutas_puntos_enlace
router
  .route("/rutas_puntos_enlace")
  .get(rutas_puntos_enlaceController.index)
  .post(rutas_puntos_enlaceController.new);
router
  .route("/rutas_puntos_enlace/:rutas_puntos_enlace_id")
  .get(rutas_puntos_enlaceController.view)
  .patch(rutas_puntos_enlaceController.update)
  .put(rutas_puntos_enlaceController.update)
  .delete(rutas_puntos_enlaceController.delete);

  // Import rutas_tramos controller
const rutas_tramosController = require("./controllers/rutas_tramos.controller");

// Rutas para el controlador de rutas_tramos
router
  .route("/rutas_tramos")
  .get(rutas_tramosController.index)
  .post(rutas_tramosController.new);
router
  .route("/rutas_tramos/:rutas_tramos_id")
  .get(rutas_tramosController.view)
  .patch(rutas_tramosController.update)
  .put(rutas_tramosController.update)
  .delete(rutas_tramosController.delete);

  // Import rutas_tramosunion controller
const rutas_tramosunionController = require("./controllers/rutas_tramosunion.controller");

// Rutas para el controlador de rutas_tramosunion
router
  .route("/rutas_tramosunion")
  .get(rutas_tramosunionController.index)
  .post(rutas_tramosunionController.new);
router
  .route("/rutas_tramosunion/:rutas_tramosunion_id")
  .get(rutas_tramosunionController.view)
  .patch(rutas_tramosunionController.update)
  .put(rutas_tramosunionController.update)
  .delete(rutas_tramosunionController.delete);

// Import rutas controller
const rutasController = require("./controllers/rutas.controller");

// Rutas para el controlador de rutas
router
  .route("/rutas")
  .get(rutasController.index)
  .post(rutasController.new);
router
  .route("/rutas/:ruta_id")
  .get(rutasController.view)
  .patch(rutasController.update)
  .put(rutasController.update)
  .delete(rutasController.delete);

// Import salida controller
const salidaController = require("./controllers/salida.controller");

// Rutas para el controlador de salida
router
  .route("/salida")
  .get(salidaController.index)
  .post(salidaController.new);
router
  .route("/salida/:salida_id")
  .get(salidaController.view)
  .patch(salidaController.update)
  .put(salidaController.update)
  .delete(salidaController.delete);

// Import Municipio controller
var municipioController = require("./controllers/municipio.controller");
// Municipio routes
router
  .route("/municipios")
  .get(municipioController.index)
  .post(municipioController.new);
router
  .route("/municipio/:municipio_id")
  .get(municipioController.view)
  .patch(municipioController.update)
  .put(municipioController.update)
  .delete(municipioController.delete);

// Import kilometraje controller
var kilometrajeController = require("./controllers/kilometraje.controller");

// Rutas para el controlador de kilometraje
router
  .route("/kilometrajes")
  .get(kilometrajeController.index)
  .post(kilometrajeController.new);
router
  .route("/kilometraje/:kilometraje_id")
  .get(kilometrajeController.view)
  .patch(kilometrajeController.update)
  .put(kilometrajeController.update)
  .delete(kilometrajeController.delete);


// Export API routes
module.exports = router;
