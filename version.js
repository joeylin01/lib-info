const execSync = require('child_process').execSync;
const fs = require('fs');

//切换路径
const commonPath = 'cd ' + process.argv[2];

const branchName = execSync(commonPath + `&git rev-parse --abbrev-ref HEAD`)
  .toString()
  .trim(); //当前的分支名字
const commitId = execSync(commonPath + '&git show -s --format=%H')
  .toString()
  .trim(); //当前版本号

const versionData = {
  branch: branchName,
  commit: commitId,
};

fs.writeFileSync('./common_version.json', JSON.stringify(versionData));
