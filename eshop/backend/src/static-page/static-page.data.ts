import { StaticPage } from "src/shared/interfaces/static-page.interface"

const shipping: StaticPage = {
    title: "Přeprava rostlin",
    slug: 'preprava',
    seo: {
        title: 'Přeprava rostlin',
        description: ''
    },
    content: 'TODO'
}


const aboutUs: StaticPage = {
    title: "O nás",
    slug: "o-nas",
    seo: {
        title: "O nás",
        description: ""
    },
    content: "TODO"
}

const contact: StaticPage = {
    title: "Kontakt",
    slug: "contact",
    seo: {
        title: "Kontakt",
        description: ""
    },
    content: "TODO"
}

const termsAndConditions: StaticPage = {
    title: "Obchodní podmínky",
    slug: "obchodni-podminky",
    seo: {
        title: "Obchodní podmínky",
        description: ""
    },
    content: "TODO"
}

const jobs: StaticPage = {
    title: "Kariéra",
    slug: "kariera",
    seo: {
        title: "Kariéra",
        description: ""
    },
    content: "TODO"
}

const refundTerms: StaticPage = {
    title: "Reklamační podmínky",
    slug: "reklamace",
    seo: {
        title: "Reklamační podmínky",
        description: ""
    },
    content: "TODO"
}

const EET: StaticPage = {
    title: "EET",
    slug: "eet",
    seo: {
        title: "EET",
        description: ""
    },
    content: "TODO"
}


const GDPR: StaticPage = {
    title: "Zpracování osobních údajů",
    slug: "osobni-udaje",
    seo: {
        title: "Zpracování osobních údajů",
        description: ""
    },
    content: "TODO"
}



export const staticPages: StaticPage[] = [
    shipping,
    aboutUs,
    contact,
    termsAndConditions,
    jobs,
    refundTerms,
    EET,
    GDPR
]