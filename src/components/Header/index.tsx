import { Container, Content } from "./styles"

interface HeaderProps {
    abrirModal: () => void;
}
export const Header = (props: HeaderProps) => {

    return (
        <Container>
            <Content>
                <h1>Quadro de Tarefas</h1>
                <div>
                    <button onClick={() => props.abrirModal()}
                    >Nova Tarefa</button>

                    <h3>Total: 50</h3>
                </div>
            </Content>
        </Container>
    )
}
