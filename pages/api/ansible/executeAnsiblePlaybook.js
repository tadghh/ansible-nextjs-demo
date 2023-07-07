import runAnsiblePlaybook from "@/util/ansible";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            //if no inventory provided default to local
            //setup agent type
            //one that returns output and one that doesnt
            const { selectedValue } = req.body;
            let needOutput = true;
            let output = runAnsiblePlaybook(selectedValue, needOutput)



            res.status(200).json(needOutput ? { message: output } : "");
        } catch (error) {
            console.error('Error executing Ansible command:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
