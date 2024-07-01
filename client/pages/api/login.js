import {serialize} from 'cookie';

export default async function handler(req, res) {
    
    let { method } = req;
    let {userName, password} = req.body;

    switch (method) {
        case 'POST':
            if (userName == process.env.ADMIN_NAME && password == process.env.ADMIN_PASSWORD) {
                const cookie = serialize('session', {userName, password}, {
                    httpOnly: true,
                    maxAge: 60 * 60 * 24 * 7, // One week
                    path: '/',
                });
                res.setHeader('Set-Cookie', cookie);
                res.status(200).end();
            }
            else {
                res.status(401).end();
            } 
            break;
        default:
            res.setHeader('Allow', ['POST']);
            res.status(405).json({message: `${method} not allowed`});
    }
}