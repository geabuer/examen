import { useState, useEffect } from "react";
import { getUsers } from "./services/User";
import MiApi from "./components/MiApi";

function App() {

return (
<div>
    <header>
    <h1>Bienvenido a la  aplicación</h1>
    </header>
    <MiApi></MiApi>
    <footer>
        <h3>lista para ser filtrada</h3>
    </footer>
        
</div>
);
}
export default App;
