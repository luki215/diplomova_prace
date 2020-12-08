declare global {
  const EVENTS_KV: KVNamespace
}

interface TestGroup {
  name: string
  link: string
}
export async function handleRequest(request: Request): Promise<Response> {
  const name = 'rendering_choice'
  const groups = [
    {
      name: 'CSR',
      link: 'https://church-donate-csr.web.app/',
    },
    {
      name: 'SSR',
      link: 'http://church-donate.web.app/',
    },
    {
      name: 'prerender',
      link: 'https://church-donate-prerender.web.app/',
    },
    {
      name: 'server_render',
      link: 'https://church-donate-server.web.app/',
    },
  ]

  // Determine which group this requester is in.
  const cookie = request.headers.get('cookie')

  const selectedGroup = groups.reduce<TestGroup | null>(
    (acc, cur) =>
      cookie && cookie.includes(`${name}=${cur.name}`) ? cur : acc,
    null,
  )

  if (selectedGroup) {
    return fetchGroup(request, selectedGroup)
  } else {
    // If there is no cookie, this is a new client. Choose a group and set the cookie.
    const group = groups[Math.trunc(Math.random() * groups.length)] // split equally
    const response = await fetchGroup(request, group).then((x) => {
      const y = new Response(x.body, x)
      y.headers.append('Set-Cookie', `${name}=${group.name}; path=/`)
      return y
    })

    return response
  }
}

function fetchGroup(request: Request, group: TestGroup): Promise<Response> {
  const splitUrl = request.url.split('/')
  const urlRest = splitUrl.slice(3).join('/')
  return fetch(`${group.link}${urlRest}`)
}
