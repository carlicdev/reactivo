import { NextResponse } from "next/server";
import dbConnect from "@/app/lib/dbConnect";
import SupportTicket from "@/app/models/SupportTicket";

export async function GET(request) {
    try {
        const { url } = request
        const urlArr = url.split('/')
        const lastIndex = urlArr.length
        const ticket = urlArr[lastIndex - 1]

        await dbConnect();

        const verifiedTicket = await SupportTicket.findById(ticket);


        return NextResponse.json({
            ticketId: verifiedTicket._id,
            ticketStatus: verifiedTicket.status,
            status: 200
        }, {
            status: 200
        })

    } catch (err) {
        return NextResponse.json({
            message: 'No fue posible verificar estatus del ticket. Verifica que el Id que ingresaste sea correcto.',
            status: 500
        }, {
            status: 500
        })
    }
}