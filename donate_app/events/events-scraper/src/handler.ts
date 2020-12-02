import * as cheerio from 'cheerio'

declare global {
  const EVENTS_KV: KVNamespace
}

interface Event {
  id: string
  name: string
  date: Date
  link: string
  img: string
  place: string
  text: string
}

async function getEvents(url: string, fetchPages = true): Promise<Event[]> {
  const html = await (await fetch(url)).text()
  const $ = cheerio.load(html)

  let eventsOnOtherPages: Event[] = []
  if (fetchPages && $('.bpager-in').length > 0) {
    const anotherPagesToFetch = []
    const pagesCount = $('.bpager-in>*').length
    for (let i = 0; i < pagesCount - 1; i++) {
      anotherPagesToFetch.push(`${url}&calendarPage=${i + 2}`)
    }

    console.log(anotherPagesToFetch)
    eventsOnOtherPages = (
      await Promise.all(anotherPagesToFetch.map((x) => getEvents(x, false)))
    ).flat()
  }

  const events: Event[] = []
  $('.article .item').each(function () {
    const name = $(this).find('h2 a').text().trim()
    const link = `https://www.kcmt.cz${$(this).find('h2 a').attr('href')}`
    const img = `https://www.kcmt.cz${$(this).find('.image img').attr('src')}`

    const info = $(this).find('.date')
    let place = null
    let text = null

    const date = $(info[0]).text().trim()
    const date_str = date.split(' ')
    const time_str = date_str[3].split(':')

    const id = `${date_str[2].substr(0, 4)}${date_str[1]}${date_str[0]}${
      time_str[0]
    }${time_str[1]}${name}`

    if (info.length > 1 && $(info[1]).find('.date-in').length > 0) {
      place = $(info[1]).text().trim().substring(7)
    }

    if (info.length == 3) {
      text = $(info[2].firstChild).text().trim()
    }

    if (info.length > 1 && $(info[1]).find('.date-in').length == 0) {
      text = $(info[1].firstChild).text().trim()
    }

    if (text) {
      text = text.substring(0, text.length - 2)
    }
    events.push({
      id,
      name,
      link,
      img,
      date,
      place,
      text,
    })
  })

  return [...events, ...eventsOnOtherPages]
}

export async function handleScheduled(e: ScheduledEvent): Promise<Response> {
  // we fetch this month and two months ahead
  const date = new Date()

  let curr_month = date.getMonth() + 1
  let curr_year = date.getFullYear()

  let linksToScrape = []

  for (let i = 0; i < 3; i++) {
    linksToScrape.push(
      `https://www.kcmt.cz/kalendar-akci/?allInMonth=1&month=${curr_month}&day=1&year=${curr_year}`,
    )

    curr_month++
    if (curr_month == 13) {
      curr_month = 1
      curr_year++
    }
  }

  const events = (
    await Promise.all(linksToScrape.map((x) => getEvents(x)))
  ).flat()

  const eventsSave = events.map((event) =>
    EVENTS_KV.put(`${event.id}`, JSON.stringify(event), {
      expirationTtl: 60 * 60 * 24 + 60 * 5,
    }),
  )

  await Promise.all(eventsSave)

  return new Response(JSON.stringify(events, null, 2))
}
