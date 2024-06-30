import { mongooseConnect } from "@/lib/dbUtils";
import { getUpcomingEvents, postEvent } from "@/lib/dbUtils";
import { formatDate } from "@/lib/dateUtils";

export default async function handler(req, res) {
    
    const { method } = req;

    try {
        await mongooseConnect();
        
        switch (method) {
            case 'GET':
                let currentDate = formatDate((new Date()).toLocaleDateString());
                let events = await getUpcomingEvents(currentDate);
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