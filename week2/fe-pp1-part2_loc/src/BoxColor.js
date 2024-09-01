import React from 'react'

const BoxColor = (props) => {
    const r = props.r
    const g = props.g
    const b = props.b
    let hex = ''
    let textColor

    const rgbToHex = (r, g, b) => {
        // Ensure each value is within the range [0, 255]
        if ((r < 0 || r > 255) || (g < 0 || g > 255) || (b < 0 || b > 255)) {
            throw new Error("RGB values must be in the range 0-255");
        }
    
        // Convert each component to hex and pad with zeroes if necessary
        const toHex = component => component.toString(16).padStart(2, '0');
    
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();
    }
    hex = rgbToHex(r, g, b)
    console.log(hex)
    if(hex === '#FF0000') {
        textColor = 'white'
    } else {
        textColor = 'black'
    }
    const boxColor = {
        backgroundColor: `rgb(${r}, ${g}, ${b})`,
        color: textColor
    }
  return (
    <div style={boxColor} className='box_color'>
      <p>rgb({r},{g},{b})</p>
      <p>{hex}</p>
    </div>
  )
}

export default BoxColor
