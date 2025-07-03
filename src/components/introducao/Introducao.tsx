function Introducao() {
  return (
    <section className="introducao-section">
      <img 
        className="w-full h-auto object-cover" 
        src="/top.svg" 
        alt="Logo da Garfo & Go" 
      />

      <div className="container mx-auto flex flex-col md:flex-row items-center justify-evenly py-8 px-4 md:px-8 lg:px-16">
        {/* Bloco da imagem principal da introdução */}
        <div className="flex-shrink-0 mb-6 md:mb-0 md:mr-8">
          <img 
            className="w-full max-w-xs md:max-w-sm lg:max-w-md" /* Ajuste de tamanho da imagem */
            src="/GarfoGoIntroImg.png" 
            alt="Elemento gráfico superior decorativo" 
          />
        </div>

        {/* Seção Principal - Sobre o Projeto */}
        <div className="flex flex-col justify-center text-center md:text-right gap-4 md:gap-6">
          <h1 className="font-bold text-3xl md:text-4xl text-gray-800">
            Sobre o Projeto
          </h1>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-xl mx-auto md:mx-0">
            O Garfo & Go é um projeto desenvolvido com o objetivo de criar um sistema de delivery de 
            alimentos, permitindo o gerenciamento eficiente dos produtos oferecidos por diferentes 
            restaurantes. A solução foi construída para realizar operações completas de CRUD 
            (Create, Read, Update, Delete) sobre os produtos cadastrados, garantindo flexibilidade 
            e praticidade tanto para os estabelecimentos quanto para os usuários do serviço.
          </p>
        </div>
      </div>

      {/* Imagem inferior para decoração ou base da seção */}
      <img 
        className="w-full h-auto object-cover" 
        src="/bottom.svg" 
        alt="Elemento gráfico inferior decorativo" 
      />
    </section>
  );
}

export default Introducao;