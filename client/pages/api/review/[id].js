import { mongooseConnect } from "@/lib/dbUtils";
import { getReviewById, putReviewById, deleteReviewById } from "@/lib/dbUtils";

export default async function handler(req, res) {
    const { id } = req.query;
    const { method } = req;

    try {
        await mongooseConnect();
        
        switch (method) {
            case 'GET':
                let review = await getReviewById(id);
                res.status(200).json(review);
                break;
            case 'PUT':
                await putReviewById(id, req.body);
                res.status(200).end();
                break;
            case 'DELETE':
                await deleteReviewById(id);
                res.status(200).json({ message: `Review Deleted` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}