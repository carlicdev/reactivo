import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import Contact from "@/app/models/Contact";
import Client from "@/app/models/Client";
import sendContactEmail from "@/app/lib/sendContactEmail";

export async function POST(request) {
    try {
        const { name, lastname, email, phone, message } = await request.json()

        // Verify request body
        if(!name || !lastname || !email || !phone || !message) {
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
        await Contact.create({
            name: name,
            lastname: lastname, 
            email: email,
            phone: phone,
            message: message
        });

        
        // enviar correo diciendo que recibimos su comentario
        await sendContactEmail(email, name)

        return NextResponse.json({
            message: 'Hemos recibido tu mensaje. Por favor revisa tu bandeja de entrada.',
            status: 200
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: 'No se ha podido enviar el mensaje. Por favor intenta de nuevo.',
            status: 500
        }, {
            status: 500
        })
    }
}