const verifyToken = require("../middlewares/verifyToken");
const EntryController = require("../controllers/entry.controller");

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/entries", EntryController.index);
  app.get("/api/entries/user/:username", EntryController.showByUsername);
  app.get("/api/entries/tournament/:tournamentName", EntryController.showByTournamentName);
  app.post("/api/entries", verifyToken, EntryController.create);
  
};