import Modal from 'react-modal'
import { FormEvent, useState } from 'react';
import { FaWindowClose } from 'react-icons/fa'
import { FormContainer } from './styles';

interface NovoModalProps {
    visibleNovoModal: boolean;
    fechaModal: () => void;
}

export function NovoModal(props: NovoModalProps) {

    const[titulo, setTitulo] = useState("");
    const[descricao, setDescricao] = useState("");

    function onSubmitModal(event: FormEvent) {
        //não deixa com que o fomrulario de reload da pagina
        event.preventDefault();
    }

    return (
        <Modal
            isOpen={props.visibleNovoModal}
            onRequestClose={() => props.fechaModal()}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >

            <button
                type='button'
                onClick={() => props.fechaModal()}
                className="react-modal-close"
            >
                <FaWindowClose />
            </button>

            <FormContainer onSubmit={onSubmitModal}>
                <h2>Cadastrar Tarefa</h2>

                <input
                    placeholder='Titulo'
                    value={titulo}
                />

                <textarea
                    placeholder='Descrição'
                    value={descricao}
                />

                <button
                    type='submit'
                >
                    Cadastrar
                </button>
            </FormContainer>

        </Modal>
    )
}
