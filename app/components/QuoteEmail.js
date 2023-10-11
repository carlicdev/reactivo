import { Html, Text, Container, Heading, Section, Body, Button, Img, Tailwind } from "@react-email/components"

export function QuoteEmail({url, name}) {
    return (
        <Html lang='en'>
            <Tailwind>
                <Body className="bg-slate-100 my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`./reactivoImg.png`}
                                width="40"
                                height="37"
                                alt="reactivo"
                                className="my-0 mx-auto"
                            />
                        </Section>
                        <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                            Transformamos tus <strong>ideas</strong> en <strong>software</strong>
                        </Heading>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Hola <strong>{name}</strong>.
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                            Nuestros expertos ya están trabajando en tu solicitud. Te haremos llegar la cotización para tu proyecto lo más pronto posible.
                        </Text>
                        <Button href={url} pX={12} pY={12}  style={{backgroundColor: '#1d4ed8', color: '#f8fafc'}}>
                            Ir a nuestro sitio
                        </Button>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}