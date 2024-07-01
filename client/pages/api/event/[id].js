import { mongooseConnect } from "@/lib/dbUtils";
import { getEventById, putEventById, deleteEventById } from "@/lib/dbUtils";

export default async function handler(req, res) {
    const { id } = req.query;
    const { method } = req;

    try {
        await mongooseConnect();

        switch (method) {
            case 'GET':
                let event = await getEventById(id);
                res.status(200).json(event);
                break;
            case 'PUT':
                await putEventById(id, req.body);
                res.status(200).json({ message: `Event Updated`});
                break;
            case 'DELETE':
                await deleteEventById(id);
                res.status(200).json({ message: `Event Deleted` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}