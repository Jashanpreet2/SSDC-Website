import { mongooseConnect } from "@/lib/dbUtils";
import { getProjects, postProject } from "@/lib/dbUtils";

export default async function handler(req, res) {
    
    const { method } = req;

    try {
        await mongooseConnect();
        
        switch (method) {
            case 'GET':
                let projects = await getProjects();
                res.status(200).json(projects);
                break;
            case 'POST':
                await postProject(req.body);
                res.status(200).json({ message: `New Project Created` });
                break;
            default:
                res.setHeader('Allow', ['GET', 'POST']);
                res.status(405).end(`Method ${method} Not Allowed`);
        }
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
}