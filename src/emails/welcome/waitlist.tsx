import * as React from 'react';
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
} from '@react-email/components';

const WelcomeWaitlist = () => {
  return (
    <Html lang="pt-BR" dir="ltr">
      <Head />
      <Preview>Obrigado por se juntar à lista de espera do Descompilado!</Preview>
      <Tailwind>
        <Body className="bg-[#1C1E26] font-sans py-[40px]">
          <Container className="mx-auto px-[20px] max-w-[600px]">
            <Section className="bg-[#252832] px-[32px] py-[40px]">
              {/* Logo */}
              <Section className="text-center mb-[32px]">
                <Img
                  src="https://www.descompilado.dev/favicon.svg"
                  width="48"
                  height="48"
                  alt="Descompilado"
                  className="mx-auto"
                />
              </Section>

              {/* Main Content */}
              <Section>
                <Heading className="text-[#FBFBFB] text-[28px] font-bold text-center mb-[24px] m-0">
                  Bem-vindo ao Descompilado!
                </Heading>
                
                <Text className="text-[#FBFBFB] text-[16px] leading-[24px] mb-[20px] m-0">
                  Olá, Dev!
                </Text>

                <Text className="text-[#FBFBFB] text-[16px] leading-[24px] mb-[20px] m-0">
                  Obrigado por se juntar à nossa lista de espera! Estamos empolgados em ter você conosco nesta jornada de aprendizado profundo em engenharia de software.
                </Text>

                <Text className="text-[#FBFBFB] text-[16px] leading-[24px] mb-[20px] m-0">
                  No Descompilado, acreditamos que a melhor forma de aprender é <strong className="text-[#62D9A7]">construindo na prática</strong>. Em breve, você terá acesso a conteúdos exclusivos onde aprenderá a construir tecnologias fundamentais do zero, desenvolvendo uma compreensão sólida dos sistemas que usamos todos os dias.
                </Text>

                <Text className="text-[#FBFBFB] text-[16px] leading-[24px] mb-[32px] m-0">
                  Fique atento ao seu e-mail - em breve enviaremos novidades sobre o lançamento da plataforma e conteúdos especiais para nossa comunidade.
                </Text>

                {/* CTA Button */}
                <Section className="text-center mb-[32px]">
                  <Button
                    href="https://www.descompilado.dev/"
                    className="bg-[#62D9A7] text-[#1C1E26] font-semibold py-[12px] px-[24px] text-[16px]"
                  >
                    Visitar Descompilado
                  </Button>
                </Section>

                <Text className="text-[#FBFBFB] text-[16px] leading-[24px] mb-[0px] m-0">
                  Obrigado mais uma vez por fazer parte desta comunidade!
                </Text>

                <Text className="text-[#FBFBFB] text-[16px] leading-[24px] mb-[0px] m-0">
                  Equipe Descompilado
                </Text>
              </Section>

              {/* Divider */}
              <Hr className="border-[#3A3D4A] border-solid my-[32px]" />

              {/* Footer */}
              <Section className="text-center">
                <Text className="text-[#62D9A7] text-[14px] font-semibold mb-[8px] m-0">
                  Aprenda construindo na prática
                </Text>
                
                <Text className="text-[#FBFBFB] text-[12px] mb-[8px] m-0">
                  <Link href="https://www.descompilado.dev/" className="text-[#62D9A7]">
                    www.descompilado.dev
                  </Link>
                </Text>

                <Text className="text-[#FBFBFB] text-[12px] mb-[8px] m-0">
                  <Link href="#" className="text-[#62D9A7]">
                    Cancelar inscrição
                  </Link>
                </Text>

                <Text className="text-[#FBFBFB] text-[12px] m-0">
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