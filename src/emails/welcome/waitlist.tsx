import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
  Button,
  Hr,
  pixelBasedPreset
} from '@react-email/components';

const WelcomeWaitlist = () => {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Obrigado por se juntar ao programa de Preview do Descompilado!</Preview>
      <Tailwind config={{
        presets: [pixelBasedPreset],
        theme: {
            extend: {
                colors: {
                    primary: "#16A249",
                    background: "#030408",
                    foreground: "#fafafa"
                }
            }
        }
      }}>
        <Body className="bg-background font-sans py-10">
          <Container className="mx-auto px-5 max-w-[600px]">
            <Section className="bg-background px-8 py-10">
              <Section className="text-center mb-8">
                <Img
                  src="https://www.descompilado.dev/logo.svg"
                  width="48"
                  height="48"
                  alt="Descompilado"
                  className="mx-auto"
                />
              </Section>

              <Section>
                <Heading className="text-foreground text-3xl font-bold text-center mb-6 m-0">
                  Bem-vindo ao Descompilado!
                </Heading>
                
                <Text className="text-foreground text-lg leading-6 mb-5">
                  Olá, Dev!
                </Text>

                <Text className="text-foreground text-lg leading-6 mb-5">
                  Obrigado por se juntar ao nosso programa de preview! Estamos empolgados em ter você conosco nesta jornada de aprendizado profundo em engenharia de software.
                </Text>

                <Text className="text-foreground text-lg leading-6 mb-5">
                  No Descompilado, acreditamos que a melhor forma de aprender é <strong className="text-primary">construindo na prática</strong>. Em breve, você terá acesso a conteúdos exclusivos onde aprenderá a construir tecnologias fundamentais do zero, desenvolvendo uma compreensão sólida dos sistemas que usamos todos os dias.
                </Text>

                <Text className="text-foreground text-lg leading-6 mb-8">
                  Fique atento ao seu e-mail, em breve enviaremos novidades sobre o lançamento da plataforma e conteúdos especiais para nossa comunidade.
                </Text>

                <Section className="text-center mb-8">
                  <Button
                    href="https://www.descompilado.dev/"
                    className="bg-primary text-foreground font-semibold py-3 px-6 text-lg"
                  >
                    Visitar Descompilado
                  </Button>
                </Section>

                <Text className="text-foreground text-lg leading-6 mb-0">
                  Obrigado mais uma vez por fazer parte desta comunidade!
                </Text>

                <Text className="text-foreground text-lg leading-6 mb-0">
                  Equipe Descompilado
                </Text>
              </Section>

              <Hr className="border-[#3A3D4A] border-solid my-8" />

              <Section className="text-center">
                <Text className="text-primary text-sm font-semibold mb-2">
                  Aprenda construindo na prática
                </Text>
                
                <Text className="text-foreground text-3 mb-2">
                  <Link href="https://www.descompilado.dev/" className="text-primary">
                    www.descompilado.dev
                  </Link>
                </Text>

                {/* <Text className="text-foreground text-3 mb-2">
                  <Link href="#" className="text-primary">
                    Cancelar inscrição
                  </Link>
                </Text> */}

                <Text className="text-foreground text-3">
                  © 2025 Descompilado. Todos os direitos reservados.
                </Text>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

WelcomeWaitlist.PreviewProps = {
};

export default WelcomeWaitlist;