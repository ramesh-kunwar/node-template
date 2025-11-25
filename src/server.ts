import app from "./app";
import { CONFIG } from "./config";

const startServer = () => {
    try {
        const PORT = CONFIG.PORT;
        app.listen(PORT, () => console.log(`Listening at port ${PORT}`));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
};

startServer();
