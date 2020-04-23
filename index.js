const core = require('@actions/core')
const exec = require('@actions/exec')

async function main() {
    await exec.exec('sh cov.sh')
}

main().catch(err => core.setFailed(err.message))