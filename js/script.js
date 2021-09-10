/*  
Project Name: Incremental Number Counter
Description: Beautiful Incremental Number Counter with rotating icons effect, using Javascript. Give me a thumbs-up, If you like it. Enjoy!
Author: Abdul Samad
Author URI: https://getabdulsamad.com/
Tags: Mobile-friendly, All-Devices-Supported. 
*/

const counts = document.querySelectorAll('.count')
const sociaIcons = document.querySelectorAll('.fab')

counts.forEach(count => {
    count.innerText = '0'

    const updateCount = () => {
        const target = +count.getAttribute('data-target')
        const counting = +count.innerText

        const Increment = target / 200

        if (counting < target) {
            count.innerText = `${Math.ceil(counting + Increment)}`
            setTimeout(updateCount, 1)
            iconRotationStart()
        }
        else {
            count.innerText = target
            iconRotationStop()
        }
    }
    updateCount()
})

function iconRotationStart () {
    sociaIcons.forEach(icon => {
        icon.classList.add('loading')
    })
}

function iconRotationStop () {
    sociaIcons.forEach(icon => {
        icon.classList.remove('loading')
    })
}