import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.SECRET_ID;
const redirect_uri = 'http://localhost:3000/callback';

export const POST = async (request: Request) => {
  try {
    const { code } = await request.json();
    console.log(code);

    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      body: `grant_type=authorization_code&redirect_uri=${redirect_uri}&code=${code}`,
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
        Authorization:
          'Basic ' +
          Buffer.from(client_id + ':' + client_secret).toString('base64'),
      },
    });

    const data = await res.json();

    if (data?.access_token) {
      const hour = 60 * 60 * 1000; // 1 hour in milliseconds
      const expirationTime = new Date(Date.now() + hour);

      const accessToken = data.access_token;

      cookies().set('accessToken', accessToken, {
        httpOnly: true,
        expires: expirationTime,
      });

      return NextResponse.json({ success: true, data });
    } else {
      return NextResponse.json({ success: false });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false });
  }
};
