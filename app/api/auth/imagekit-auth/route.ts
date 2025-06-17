import ImageKit from "imagekit";
import { NextResponse } from "next/server";

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY!,
    privateKey: process.env.IMAGEKIT_PRIVET_KEY!,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT!,
});

export async function GET () {
    console.log(NextResponse.json(imagekit.getAuthenticationParameters()));

    try {
        const authenticationParameters = imagekit.getAuthenticationParameters();
         return NextResponse.json(authenticationParameters)
    } catch (error) {
       return NextResponse.json(
        {error: 'Imagekit Aith Faild'},
        {status: 500}
       ) 
    }
    
 
}