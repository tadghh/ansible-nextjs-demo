const Ansible = require('node-ansible');

const runAnsibleCommand = async () => {
    try {
        const command = new Ansible.AdHoc().module('shell').hosts('linux_servers').args("echo 'hello'").inventory('/home/wsl/ugh/ansible/inventory.cfg');

        const result = await command.exec();
        console.log(result.output);
    } catch (error) {
        console.error('Error executing Ansible command:', error);
    }
};

export default runAnsibleCommand;
