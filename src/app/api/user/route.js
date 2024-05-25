import prisma from '../../../lib/prisma';

export async function POST(req) {
  try {
    const { name, email } = await req.json();

    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });

    return new Response(JSON.stringify(user), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to create user' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}
