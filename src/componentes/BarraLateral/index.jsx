import styled from "styled-components"
import ItemNavegacao from "./ItemNavegacao";

const ListEstilizada = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 212px;
`;

const BarraLateral = () => {
    return (
        <aside>
            <nav>
                <ListEstilizada>
                    <ItemNavegacao
                        iconeAtivo="/icones/home-ativo.png"
                        iconeInativo="/icones/home-inativo.png"
                        ativo={true}
                    >
                        Início
                    </ItemNavegacao>
                    <ItemNavegacao
                        iconeAtivo="/icones/mais-vistas.png"
                        iconeInativo="/icones/mais-vistas-inativo.png"
                    >
                        Mais vistas
                    </ItemNavegacao>
                    
                </ListEstilizada>

            </nav>
        </aside>

    )
}

export default BarraLateral