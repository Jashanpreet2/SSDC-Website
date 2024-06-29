import { mongooseConnect } from "@/lib/dbUtils";
import { getNews, postNews } from "@/lib/dbUtils";

export default async function handler(req, res) {

    const { method } = req;

    console.log(req.body);
    try {
        await mongooseConnect();

        switch (method) {
            case 'GET':
                let news = await getNews();
                res.status(200).json(news);
                break;
            case 'POST':
                await postNews(req.body);
                res.status(200).json({ message: `New News Created` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}
