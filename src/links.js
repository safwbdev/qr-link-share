import image1 from './assets/sflink_qrcode.svg'
import image2 from './assets/pflo_qrcode.svg'
import image3 from './assets/rsme_qrcode.svg'

export const linkData = [
    {
        "type": "linkedin",
        "url": import.meta.env.VITE_APP_LINKEDIN,
        "image": image1
    },
    {
        "type": "portfolio",
        "url": import.meta.env.VITE_APP_PORTFOLIO,
        "image": image2
    },
    {
        "type": "download",
        "url": import.meta.env.VITE_APP_DOWNLOAD,
        "image": image3
    },
    {
        "type": "doc",
        "url": import.meta.env.VITE_APP_DOC,
        "image": null
    }
]
