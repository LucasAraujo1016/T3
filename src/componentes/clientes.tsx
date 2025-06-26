import { ArrowLeftIcon, ListBulletIcon, UserCircleIcon, UserMinusIcon } from "@heroicons/react/24/solid"
import React, { useState } from "react"
import Modal from "./Modal"

type Props = {
    tema: string
    seletorView: (novaTela: string, evento: any) => void
}

const Clientes: React.FC<Props> = ({ tema, seletorView }) => {
    const [mostrarListagens, setMostrarListagens] = useState(false);
    const [atualizarCliente, setAtualizarCliente] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const [modalConteudo, setModalConteudo] = useState<React.ReactNode>(null);

    const abrirModal = (conteudo: React.ReactNode) => {
        setModalAberto(true);
        setModalConteudo(conteudo);
    };

    const fecharModal = () => {
        setModalAberto(false);
        setModalConteudo(null);
    };

    const handleListagensClick = () => {
        setMostrarListagens((prev) => !prev);
        setAtualizarCliente(false);
    };

    const handleAtualizarClienteClick = () => {
        setAtualizarCliente((prev) => !prev);
        setMostrarListagens(false);
    };

    return (
        <>
            <div className="flex w-full p-4 bg-[#dba2eb]">
                <button
                    className="flex p-4 items-center text-xl hover:bg-purple-600 transition rounded-xl"
                    onClick={(e) => seletorView('Home', e)}
                >
                    <ArrowLeftIcon className="h-5 w-5" />
                    Voltar
                </button>
            </div>
            <div className="flex flex-wrap p-4 gap-5 justify-center bg-[#dba2eb]">
                <button
                    className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full max-w-xs hover:bg-purple-600 transition bg-[#d07af0]"
                    onClick={handleAtualizarClienteClick}
                >
                    <UserCircleIcon className="h-16 w-16 mb-4" />
                    Atualizar Cliente
                </button>
                <button
                    className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full max-w-xs hover:bg-purple-600 transition bg-[#c35de8]"
                    onClick={() =>
                        abrirModal(
                            <div className="flex flex-col gap-4">
                                <h2 className="text-xl font-bold">Informe o CPF do cliente a ser excluído: </h2>
                                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="first_name">
                                    <input
                                        className="appearance-none block w-full bg-gray-400 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none"
                                        id="first_name"
                                        type="text" />
                                </label>
                                <div className="flex justify-end gap-3">
                                    <button
                                        onClick={fecharModal}
                                        className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
                                    >
                                        Cancelar
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                                    >
                                        Confirmar
                                    </button>
                                </div>
                            </div>
                        )
                    }
                >
                    <UserMinusIcon className="h-16 w-16 mb-4" />
                    Excluir Cliente
                </button>
                <button
                    className="flex flex-col justify-center items-center px-4 py-2 rounded h-52 w-full max-w-xs hover:bg-purple-600 transition bg-[#b358e8]"
                    onClick={handleListagensClick}
                >
                    <ListBulletIcon className="h-16 w-16 mb-4" />
                    Listagens
                </button>
            </div>

            {atualizarCliente && (
                <div className="flex flex-wrap p-4 gap-4 justify-center bg-[#dba2eb]">
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Nome</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Nome Social</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Gênero</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualiar CPF</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar RGs</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Telefones</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Produtos</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Atualizar Serviços</button>
                </div>
            )}

            {mostrarListagens && (
                <div className="flex flex-wrap p-4 gap-4 justify-center bg-[#dba2eb]">
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">listagem Geral</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Listagem por genero</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Maiores consumidores</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Menores consumidores</button>
                    <button className="flex justify-center items-center px-4 py-2 rounded h-12 w-full max-w-xs hover:bg-purple-600 transition bg-purple-400">Top 5 (Valor)</button>
                </div>
            )}
            <Modal isOpen={modalAberto} onClose={fecharModal}>
                {modalConteudo}
            </Modal>
        </>
    );
};

export default Clientes;