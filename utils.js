const spawn = require('child_process').spawn

const sendOutput = (res, file_path, exe) => {
    const ls = spawn(exe, [file_path])
    ls.stdout.on('data', (data) => {
        res.send(data)
    })
    ls.stderr.on('data', (data) => {
        res.send(data)
    })
    ls.on('close', (code) => {
        res.send(code)
    })
}

const extention = (language) => {
    if(language == 'js')
        return 'node'
    else
        return 'py'
}

module.exports = {sendOutput, extention}