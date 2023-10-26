const Utente = require("../../models/Utente")

module.exports = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Cerca l'utente nel database in base all'username
        const user = await Utente.findOne({ username });

        if (!user) {
            res.status(401).json({ status: "error", message: "Username non trovato" });
            return;
        }

        // Confronta la password fornita con la password dell'utente nel database
        if (user.password !== password) {
            res.status(401).json({ status: "error", message: "Password errata" });
            return;
        }

        // Se l'username e la password sono corretti, restituisci un messaggio di successo
        res.json({ status: "success", message: "Login riuscito" });
    } catch (error) {
        res.status(500).json({ status: "error", message: "Errore interno del server" });
    }
}