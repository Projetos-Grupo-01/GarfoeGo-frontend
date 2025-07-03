import { GithubLogo } from "@phosphor-icons/react";

function Footer() {
  let data = new Date().getFullYear();

  return (
    <>
      <div className="flex justify-center items-center text-white bg-[#2D2D2A]">
        <div className="container flex flex-col items-center py-4">
          <p className="text-xl font-bold mb-1">
            Garfo & Go | Copyright: {data}
          </p>
          <div className="flex gap-2 items-center">
            <p className="text-base">Fala conosco pelo GitHub</p>
            <a href="https://github.com/Projetos-Grupo-01" target="_blank">
              <GithubLogo size={32} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
