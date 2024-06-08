import 'keen-slider/keen-slider.min.css'
import KeenSlider from 'keen-slider'

import React from 'react'

const TshirtSlider = () => {

    const slider = new KeenSlider(
        '#tshirt-slider',
        {
          loop: true,
          created: () => {
            console.log('created')
          },
        },
        [
          // add plugins here
        ]
      )

  return (
    <div>TshirtSlider</div>
  )
}

export default TshirtSlider