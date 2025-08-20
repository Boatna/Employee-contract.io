const simpleGit = require('simple-git');
const path = require('path');

const git = simpleGit();

// ตั้งค่า
const repoUrl = 'git remote add origin https://github.com/Boatna/Employee-contract.git'; // แก้ชื่อ repo
const branch = 'main'; // หรือ 'master'
const commitMessage = 'Upload website files';

// folder ที่ต้องการอัปโหลด
const folderPath = path.resolve(__dirname, 'website');

(async () => {
  try {
    // init repo ถ้ายังไม่มี
    await git.cwd(folderPath).init();
    await git.cwd(folderPath).addRemote('origin', repoUrl).catch(()=>{});

    // add, commit, push
    await git.cwd(folderPath).add('.');
    await git.cwd(folderPath).commit(commitMessage);
    await git.cwd(folderPath).push('origin', branch, {'--set-upstream': null});

    console.log('✅ Upload สำเร็จ! สามารถเปิด GitHub Pages ได้');
  } catch (err) {
    console.error(err);
  }
})();
