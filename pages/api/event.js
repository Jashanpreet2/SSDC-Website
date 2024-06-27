import { getEvents, putEvent } from "@/lib/dbUtils";

export default async function handler(req, res) {
    
    const { method } = req;

    try {
        switch (method) {
            case 'GET':
                let events = await getEvents();
                res.status(200).json(events);
                break;
            case 'POST':
                await putEvent(req.body);
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