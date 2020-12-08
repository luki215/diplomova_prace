declare global {
  const EVENTS_KV: KVNamespace
}

export async function handleRequest(request: Request): Promise<Response> {
  const keys = await EVENTS_KV.list()
  console.log(keys.keys)
  const events = (
    await Promise.all(
      keys.keys.map((key) =>
        EVENTS_KV.get(key.name).then((x) => (x ? JSON.parse(x) : x)),
      ),
    )
  ).filter((e) => {
    const date = e.date.split(',')[0]
    const dateSplit = date.split('. ')
    const dateDate = new Date(+dateSplit[2], +dateSplit[1] - 1, +dateSplit[0])

    return dateDate.getTime() > new Date().getTime()
  })

  return new Response(JSON.stringify(events, null, 2), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
