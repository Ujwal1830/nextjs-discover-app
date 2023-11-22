import { NextResponse } from "next/server"


const BASE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?"

const GOOGLE_PLACE_API_KEY = process.env.GOOGLE_PLACE_API_KEY

export async function GET(request: any){
    const { searchParams }:any = new URL(request.url);
    const query = searchParams.get('q');
    const res = await fetch(
        BASE_URL+"query="+query+"&key="+GOOGLE_PLACE_API_KEY, 
        {
            headers: {
                'Content-Type': 'application/json',
            },
        }
    )

    const data = await res.json();

    return NextResponse.json({
        data
    })
}

