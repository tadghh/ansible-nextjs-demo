const Ansible = require('node-ansible');


//Playbooks must end in .yml
//Cannot have directory in the method parameter
//askPass, askSudoPass is outdated
const runAnsiblePlaybook = async (playbookName, needOutput = false) => {
    console.log(playbookName)
    let workingPath = '/home/wsl/ugh/ansible/playbooks'
    try {

        const command = new Ansible.Playbook().playbook(playbookName).variables({ ansible_become_pass: "pass" }).inventory('inventory.cfg');
        const result = command.exec({ cwd: workingPath });

        console.log(result);
        console.log("yo");

        return needOutput ? command : null;
    } catch (error) {
        console.error('Error executing Ansible command:', error);
    }
};

export default runAnsiblePlaybook;
