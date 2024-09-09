import {spawn} from 'child_process';
import psList from 'ps-list';

const OBSIDIAN_PATH = process.env.OBSIDIAN_PATH;

if (!OBSIDIAN_PATH) {
    console.error('OBSIDIAN_PATH is not set in the environment variables.');
    process.exit(1);
}
async function isObsidianRunning() {
    const processes = await psList();
    return processes.some(p => p.name.toLowerCase().includes('obsidian'));
}

async function startObsidian() {
    const isRunning = await isObsidianRunning();
    if (isRunning) {
        return;
    }

    const cp = spawn(OBSIDIAN_PATH, ['--remote-debugging-port=9222'], {detached: true, stdio: 'ignore'});
    cp.unref();
    console.log('Obsidian started in debugging mode at port 9222.');
}

startObsidian().catch(err => {
    console.error('Error starting Obsidian:', err);
    process.exit(1);
});
