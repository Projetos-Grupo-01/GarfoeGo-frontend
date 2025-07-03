function Home() {
    return (
        <>
            {/* Seção Principal (Hero) */}
            <div
                className="relative flex items-center justify-start w-full h-[300px] bg-cover bg-center"
                style={{ backgroundImage: "url('/foto-de-fundo.png')" }}
            >
                <div className="container px-4 mx-auto">
                    {/* Caixa de texto sobre a imagem */}
                    <div className="bg-[#2D2D2A] p-8 rounded-lg max-w-xs">
                        <h2 className="text-3xl font-bold text-white mb-5">
                            Bateu a fome? A gente resolve!
                        </h2>
                        <p className="text-xl text-zinc-200">
                            Uma nova forma de <span className="text-green-500">saborear a vida</span>, sem sair do lugar.
                        </p>
                    </div>
                </div>
            </div>

            {/* Seção dos Produtos (a ser criada) */}
            <div className="w-full py-16 bg-[#FDF8F1]">
           </div>
        </>
    );
}

export default Home;
