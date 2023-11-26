import "./globals.scss";
import Image from "../../node_modules/next/image";

export const metadata: Metadata = {
  title: "Spider-verse",
  description:
    "Criando um carrossel parallax do Aranhaverso com React e Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Image src="/icons/menu.svg" alt="Opções" width={36} height={25} />
          <Image src="/spider-logo.svg" alt="Spider" width={260} height={70} />
          <Image src="/icons/user.svg" alt="Login" width={36} height={25} />
        </header>
        {children}
      </body>
    </html>
  );
}
