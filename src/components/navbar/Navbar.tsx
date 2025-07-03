import { MagnifyingGlassIcon } from "@phosphor-icons/react";
import { type ChangeEvent, type FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "/garfo-go-logo.png";

function Navbar() {
    const navigate = useNavigate();
    const [nome, setNome] = useState<string>("");

    function handleBuscarProdutos(e: ChangeEvent<HTMLInputElement>) {
        setNome(e.target.value);
    }

    function buscarProdutos(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        navigate(`/consultarnome/${nome}`);
        setNome("");
    }

    return (
        <>
            <div className="w-full bg-[#2D2D2A] flex justify-center">
                <div className="container flex items-center justify-between w-full px-4 py-4 text-white">
                    
                    <Link to="/home" className="flex items-center gap-3">
                        <img src={logo} alt="Logo Garfo&Go" className="w-10" />
                        <span className="text-2xl font-bold">Garfo&Go</span>
                    </Link>

                    <div className="flex-grow flex justify-center">
                        <form className="relative w-full max-w-lg" onSubmit={buscarProdutos}>
                            <input
                                className="w-full px-4 py-2 text-black bg-white border-2 border-transparent rounded-md focus:outline-none focus:border-green-500"
                                type="search"
                                placeholder="Busque por nome ou restaurante"
                                value={nome}
                                onChange={handleBuscarProdutos}
                                required
                            />
                            {/* Posicionando o ícone dentro do input */}
                            <button type="submit" className="absolute p-2 text-white -translate-y-1/2 bg-green-700 rounded-md right-1 top-1/2 hover:bg-green-600">
                                <MagnifyingGlassIcon size={20} weight="bold" />
                            </button>
                        </form>
                    </div>

                    {/* 3. Links de Navegação à Direita */}
                    <div className="flex items-center gap-6 text-lg">
                        <Link to="/sobre" className="hover:underline">
                            Sobre Projeto
                        </Link>
                        <Link to="/quemsomos" className="hover:underline">
                            Quem Somos
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
