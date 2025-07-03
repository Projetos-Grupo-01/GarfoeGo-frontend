import Integrante from '../integrante/Integrante'
// Dados dos integrantes da equipe
const teamMembers = [
  {
    id: 1,
    name: 'João Silva',
    role: 'Desenvolvedor Frontend',
    image: '/perfil-teste.png',
  },
  {
    id: 2,
    name: 'Maria Oliveira',
    role: 'Desenvolvedora Backend',
    image: '/perfil-teste.png',
  },
  {
    id: 3,
    name: 'Carlos Souza',
    role: 'UX/UI Designer',
    image: '/perfil-teste.png',
  },
  {
    id: 4,
    name: 'Ana Costa',
    role: 'Gerente de Projeto',
    image: '/perfil-teste.png',
  },
  {
    id: 5,
    name: 'Pedro Almeida',
    role: 'Analista de Dados',
    image: '/perfil-teste.png',
  },
  {
    id: 6,
    name: 'Beatriz Lima',
    role: 'Especialista em Marketing',
    image: '/perfil-teste.png',
  },
  {
    id: 7,
    name: 'Lucas Pereira',
    role: 'Arquiteto de Software',
    image: '/perfil-teste.png',
  },
  {
    id: 8,
    name: 'Mariana Santos',
    role: 'Quality Assurance',
    image: '/perfil-teste.png',
  },
];

function Sobre() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Nossa Equipe</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member) => (
            <Integrante key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sobre;