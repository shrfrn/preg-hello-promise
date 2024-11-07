'use strict'

function ask() {
    // Use api
	// return axios.get('https://yesno.wtf/api')

    // Promisify - allways resolves
	// return Promise.resolve({ data: 'yes' })

    // Promisify - allways rejects
	// return Promise.reject('Sorry...')
    
    // Promisify - allways resolves with delay & rand. answer
	// return new Promise((resolve, reject) => {
    //     const res = Math.random() > 0.5 ? 'yes' : 'no'
    //     return setTimeout(() => resolve({ data: res }), 1000)
    // })
        
    // Promisify - randomly resolves (with rand. answer) or rejects
	// return new Promise((resolve, reject) => {
    //     const success = Math.random() > 0.5
    //     if(success) {
    //         const res = Math.random() > 0.5 ? 'yes' : 'no'
    //         return setTimeout(() => resolve({ data: res }), 1000)
    //     } else {
    //         return setTimeout(() => reject('Sorry...'), 1000)
    //     }
	// })
}