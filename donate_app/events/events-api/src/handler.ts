declare global {
  const EVENTS_KV: KVNamespace
}

export async function handleRequest(request: Request): Promise<Response> {
  const keys = await EVENTS_KV.list()
  console.log(keys.keys)
  const events = await Promise.all(
    keys.keys.map((key) =>
      EVENTS_KV.get(key.name).then((x) => (x ? JSON.parse(x) : x)),
    ),
  )
  return new Response(JSON.stringify(events, null, 2), {
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    },
  })
}
