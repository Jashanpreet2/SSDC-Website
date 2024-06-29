import { mongooseConnect } from "@/lib/dbUtils";
import { getProjectById, putProjectById, deleteProjectById } from "@/lib/dbUtils";

export default async function handler(req, res) {
    const { id } = req.query;
    const { method } = req;

    try {
        await mongooseConnect();
        
        switch (method) {
            case 'GET':
                let project = await getProjectById(id);
                res.status(200).json(project);
                break;
            case 'PUT':
                await putProjectById(id, req.body);
                res.status(200).json({ message: `Project Updated` });
                break;
            case 'DELETE':
                await deleteProjectById(id);
                res.status(200).json({ message: `Project Deleted` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'PUT', 'DELETE']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}