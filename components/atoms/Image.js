
import { Fragment } from 'react'

export default function Image({ src = "", alt = "", width = "" }) {
  return (
    <Fragment>
      <img src={src} alt={alt} />

      <style jsx>{`
        img {
          width: ${width};
          max-width: 100%;
          display: block;
        }
      `}</style>
    </Fragment>
  )
}
