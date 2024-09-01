const fs = require('fs');
const os = require('os')

const hostname = os.hostname()
const OS_platform = os.platform()
const Available_CPU_cores = os.cpus()

let data = `${hostname} 
${OS_platform} 
${JSON.stringify(Available_CPU_cores, null, 2)}`;


fs.writeFile('output.txt', data, (err) => {
    if (err){
        console.log('Error reading file:', err)
    } else {
        console.log('data successfully written')
    }
})


fs.readFile('output.txt', 'utf8', (err, data) => {
    if (err){
        console.log('Error reading file:', err)
    } else{
        console.log('File contents:', data)
    }
})

// console.log('Hostname:', os.hostname())
// console.log('OS platform:', os.platform())
// console.log('Available CPU cores:', os.cpus())