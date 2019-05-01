import uuid from 'uuid'
import { createWriteStream } from 'fs'

const storeUpload = async ({ stream, filename }) => {
	console.log('TCL: storeUpload -> stream, filename', stream, filename)
  const id = uuid()
  const path = `D:/git/own-character/Back/image/${id}-${filename}`

  return new Promise((resolve, reject) =>
    stream
      .pipe(createWriteStream(path))
      .on('finish', () => resolve({ id, path }))
      .on('error', reject),
  )
}

const processUpload = async (img) => {
  const { stream, filename, mimetype, encoding } = await img
	console.log('TCL: upload', img, filename, mimetype, encoding)
  const { id, path } = await storeUpload({ stream, filename })
  return { id, filename, mimetype, encoding, path }
}

export default {
  storeUpload,
  processUpload
}
