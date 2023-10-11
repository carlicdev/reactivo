import { Html, Text, Container, Heading, Section, Body, Button, Img, Tailwind } from "@react-email/components"


export function SupportEmail({url, name, ticket}) {
    return (
        <Html lang='en'>
            <Tailwind>
                <Body className="bg-slate-100 my-auto mx-auto font-sans">
                    <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                        <Section className="mt-[32px]">
                            <Img
                                src={`./public/reactivoImg.png`}
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
                            El id de tu ticket de soporte es: <strong>{ticket}</strong>
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                           Te recomendamos apuntar este id en un lugar seguro o conservar este email. Recuerda que puedes usar este id para revisar el estado de tu solicitud en el momento que lo requieras. 
                        </Text>
                        <Text className="text-black text-[14px] leading-[24px]">
                           Gracias por elegir <strong>reactivo</strong>.
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