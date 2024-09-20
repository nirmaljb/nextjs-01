import { PrismaClient } from "@prisma/client"
import { NextRequest } from "next/server"

const prisma = new PrismaClient()

export async function GET() {
    const response = await prisma.user.findMany()
    return Response.json(response)
}

export async function POST(req: NextRequest) {
    const data = await req.json()
    
    try {
        await prisma.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: data.password
            }
        })

        return Response.json({msg: 'User created'})
    }catch(error) {
        return Response.json({msg: 'Error occured', error}, {
            status: 404
        })
    }  
        
}