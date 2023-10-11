import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import SupportTicket from "@/app/models/SupportTicket";
import Client from "@/app/models/Client";
import sendSupportEmail from "@/app/lib/sendSupportEmail";

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
        const ticket = await SupportTicket.create({
            name: name,
            lastname: lastname,
            service: service, 
            email: email,
            phone: phone,
            message: message
        });
        
        // enviar correo diciendo que recibimos su comentario
        if(ticket._id) {
            const ticketId = JSON.stringify(ticket._id)
            await sendSupportEmail(email, name, ticketId)
        }

        return NextResponse.json({
            message: 'Tu ticket de soporte ha sido generado. Por favor revisa tu bandeja de entrada.',
            ticketId: ticket._id,
            status: 200
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: 'No se ha podido el ticket. Por favor intenta de nuevo.',
            status: 500
        }, {
            status: 500
        })
    }
}