import { getReviews, putReview } from "@/lib/dbUtils";

export default async function handler(req, res) {
    
    const { method } = req;

    try {
        switch (method) {
            case 'GET':
                let reviews = await getReviews();
                res.status(200).json(reviews);
                break;
            case 'POST':
                await putReview(req.body);
                res.status(200).json({ message: `New Review Created` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}