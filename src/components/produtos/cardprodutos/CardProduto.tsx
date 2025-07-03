import { PencilIcon, TrashIcon } from "@phosphor-icons/react";
import type Produto from "../../../models/Produto";
import logoRestaurante from "../../../assets/icon-restaurant.svg";

interface CardProdutoProps {
  produto: Produto;
}

function CardProdutos({ produto }: Readonly<CardProdutoProps>) {
  return (
    <div className="max-w-[214px] flex flex-col justify-between my-4 sm:my-6 md:my-4 lg:my-10 overflow-hidden border-1 border-[#AD8350] bg-white rounded-lg">
      <div className="flex items-end justify-end pt-2 pr-2">
        <PencilIcon size={24} className="mr-1 hover:fill-teal-800" />
        <TrashIcon size={24} className="mr-1 hover:fill-red-700" />
      </div>

      <div className="py-4">
        <img
          src={produto.foto}
          className="mx-[14px] mt-1 max-w-[200px] h-auto rounded-lg border-t-[12px] border-b-[12px] border-t-[#D4D4D8] border-b-[#D4D4D8]"
          alt={produto.nome}
        />

        <div className="p-4">
          <p className="text-base uppercase mb-2">{produto.nome}</p>
          <h3 className="text-xl font-bold uppercase">
            {Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(produto.preco)}
          </h3>
          <hr className="my-[12px] border-t border-[#D4D4D8]" />
          <div className="flex">
            <img src={logoRestaurante} alt="" />
            <p className="text-base ml-2 leading-none">{produto.restaurante}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardProdutos;
