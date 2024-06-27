import { getNewsById, putNewsById, deleteNewsById } from "@/lib/dbUtils";

export default async function handler(req, res) {
    const { id } = req.query;
    const { method } = req;

    try {
        switch (method) {
            case 'GET':
                let news = await getNewsById(id);
                res.status(200).json(news);
                break;
            case 'PUT':
                await putNewsById(id, req.body);
                res.status(200).json({ message: `News Updated` });
                break;
            case 'DELETE':
                await deleteNewsById(id);
                res.status(200).json({ message: `News Deleted` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}