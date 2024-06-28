import { mongooseConnect } from "@/lib/dbUtils";
import { getEvents, postEvent } from "@/lib/dbUtils";

export default async function handler(req, res) {
    
    const { method } = req;

    try {
        await mongooseConnect();
        
        switch (method) {
            case 'GET':
                let events = await getEvents();
                res.status(200).json(events);
                break;
            case 'POST':
                await postEvent(req.body);
                res.status(200).json({ message: `New Event Created` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}