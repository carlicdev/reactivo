import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Quote from "@/app/models/Quote";
import Client from "@/app/models/Client";
import sendQuoteEmail from "@/app/lib/sendQuoteEmail";



export async function POST(request) {
    try {
        const { name, lastname, service, email, phone, message } = await request.json()

        // Verify request body
        if(!name || !lastname || !service || !email || !phone || !message) {
            return NextResponse.json({
                message: 'Todos los campos son obligatorios.',
                status: 400
            }, {
                status: 400
            })
        }        

        // connect to db
        await dbConnect();

        //buscar cliente en bdd
        const client = await Client.find({email: email})

        // registrarlo si aun no existe en bdd
        if (!client.length) {
            await Client.create({
                name: name,
                lastname: lastname,
                email: email,
                phone, phone
            })
        }

        // save message to db
        await Quote.create({
            name: name,
            lastname: lastname,
            service: service, 
            email: email,
            phone: phone,
            message: message
        });

        
        // enviar correo diciendo que recibimos su comentario
        await sendQuoteEmail(email, name)

        return NextResponse.json({
            message: 'Hemos recibido tu solicitud. En breve nos pondremos en contacto contigo.',
            status: 200
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: 'No se ha podido enviar la solicitud. Por favor intenta de nuevo.',
            status: 500
        }, {
            status: 500
        })
    }
}