interface Member {
  image: string;
  name: string;
  role: string;
}

interface IntegranteProps {
  member: Member;
}

function Integrante({ member }: IntegranteProps) {
  return (
    <div className="flex flex-col items-center p-4">
      <img
        src={member.image}
        alt={`Foto de ${member.name}`}
        className="w-40 h-40 object-cover rounded-full border-2 border-green-700 shadow-md"
        // w-40 = 160px, h-40 = 160px (no Tailwind padrão, 1 unit = 4px)
        // rounded-full = border-radius: 9999px (para um círculo perfeito)
        // border-2 = 2px, border-green-700 = #0C8346 (aproximado, você pode ajustar a cor no tailwind.config.js se precisar de exatidão)
      />
      <h3 className="mt-4 text-xl font-semibold text-gray-800">{member.name}</h3>
      <p className="text-gray-600">{member.role}</p>
    </div>
  );
}

export default Integrante