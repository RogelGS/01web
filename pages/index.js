import ClaseComponent from "../componentes/ClaseComponent";
import Header from '../componentes/comunes/Header';
import {matematicas, ciencias} from '../data/estudiantes';
import BarraTitulo from '../componentes/comunes/BarraTitulo';

const index = () => (
    <div>
        <Header></Header>
        <BarraTitulo></BarraTitulo>
        <h1 style={{ textAlign: "center" }}>Cursos del Plan</h1>
        <div style={{display:"flex", justifyContent: "space-around"}}>
            <ClaseComponent name="Matematicas" class={matematicas}></ClaseComponent>
            <ClaseComponent name="Ciencias" class={ciencias}></ClaseComponent>
        </div>
        <style jsx global>
            {
                `
                body{
                    background:#ffca20;
                }
                `
            }
        </style>
    </div>
)

export default index;