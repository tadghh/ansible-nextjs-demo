import runAnsiblePlaybook from "@/util/ansible";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            //if no inventory provided default to local
            //setup agent type
            //one that returns output and one that doesnt
            const { selectedValue } = req.body;
            let needOutput = true;
            const outputEmitter = await runAnsiblePlaybook(selectedValue, needOutput);

            console.log("hey");

            // Attach event listeners to the outputEmitter if needed
            outputEmitter.on('stdout', function (data) {
                // Handle stdout data here
            });
            console.log("hey")

            res.status(200).json({ emitterId: outputEmitter.id });
        } catch (error) {
            console.error('Error executing Ansible command:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
