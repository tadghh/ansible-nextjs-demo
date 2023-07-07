const Ansible = require('node-ansible');

const runAnsiblePlaybook = async (playbookName, needOutput = false) => {
    console.log(playbookName)
    let workingPath = '/home/wsl/ugh/ansible/playbooks'
    try {

        const command = new Ansible.Playbook().playbook(playbookName).variables({ ansible_become_pass: "pass" }).inventory('inventory.cfg');

        const result = await command.exec({ cwd: workingPath });
        //ask sudo pass is outdated


        console.log(result.output);
        return needOutput ? result.output : null;
    } catch (error) {
        console.error('Error executing Ansible command:', error);
    }
};
// const runAnsiblePlaybook = async () => {
//     try {
//         const command = new Ansible.AdHoc().module('shell').hosts('linux_servers').args("echo 'hello'").inventory('/home/wsl/ugh/ansible/inventory.cfg');

//         const result = await command.exec();
//         console.log(result.output);
//     } catch (error) {
//         console.error('Error executing Ansible command:', error);
//     }
// };
export default runAnsiblePlaybook;
