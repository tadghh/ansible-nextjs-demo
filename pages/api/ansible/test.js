
export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            res.status(200).json({ message: 'Ansible command executed successfully' });
        } catch (error) {
            console.error('Error executing Ansible command:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
