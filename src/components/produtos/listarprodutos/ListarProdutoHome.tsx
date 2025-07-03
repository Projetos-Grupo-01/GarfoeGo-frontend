import { useEffect, useState } from "react";
import { BarLoader } from "react-spinners";
import type Produto from "../../../models/Produto";
import produtosMock from "../../../utils/ProdutoMock";
import CardProdutos from "../cardprodutos/CardProduto";

function ListarProdutosHome() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setProdutos(produtosMock);
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      {isLoading && (
        <BarLoader
          color="#0D9488"
          height={3}
          width={"30%"}
          speedMultiplier={1}
          aria-label="Bar-loading"
          className="mx-auto my-8"
        />
      )}
      <div className="flex justify-center w-full bg-[#fff4e6] 2xl:px-[120px]">
        <div className="flex flex-col mx-4 w-full">
          {!isLoading && produtos.length === 0 && (
            <span className="my-8 text-3xl text-center">
              Nenhum produto foi encontrado
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 2xl:gap-x-[50px] gap-y-[50px] my-2 pb-4">
            {produtos.map((produto) => (
              <div className="flex justify-center items-stretch">
                <CardProdutos key={produto.id} produto={produto} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default ListarProdutosHome;
