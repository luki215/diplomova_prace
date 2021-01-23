import * as jose from 'node-jose'
import parser from 'ua-parser-js'

declare global {
  const METRICS_KV: KVNamespace
}

async function generateJWT(config: any) {
  const iat = new Date().getTime() / 1000
  let payload = {
    ...config.payload,
    iat: iat,
    exp: iat + 3600,
  }

  const signingKey = await jose.JWK.asKey(
    config.privateKey.replace(/\\n/g, '\n'),
    'pem',
  )

  const sign = (await jose.JWS.createSign(
    { fields: { alg: config.algorithm, kid: config.privateKeyID } },
    signingKey,
  )
    .update(JSON.stringify(payload), 'utf8')
    .final()) as any

  const signature = sign.signatures[0]
  return [signature.protected, sign.payload, signature.signature].join('.')
}

async function authHeaders(config: any) {
  let token = await generateJWT(config)
  return { Authorization: `Bearer ${token}` }
}

export async function handleRequest(request: Request): Promise<Response> {
  if (request.method === 'POST') {
    const body = await request.json()
    const { name, value, renderingType, userAgent } = body
    const browserInfo = new parser(userAgent).getResult()

    const config = {
      payload: {
        aud: 'https://sheets.googleapis.com/',
        iss: 'sheetbot@concise-isotope-299514.iam.gserviceaccount.com',
        sub: 'sheetbot@concise-isotope-299514.iam.gserviceaccount.com',
      },
      privateKey: await METRICS_KV.get('GSHEETS_SECRET'),
      privateKeyID: '07371eae8f38c8a8022e0777d9c1bae3adc4bf11',
      algorithm: 'RS256',
    }

    const headers = await authHeaders(config)

    console.log(renderingType, name, value, userAgent)

    const res = await fetch(
      'https://sheets.googleapis.com/v4/spreadsheets/1Gm0uT9yOUDU-ifap3pXocJszsvNInW2U2uMDrdMIfAo/values/RawData!A1:H1:append?valueInputOption=USER_ENTERED&insertDataOption=INSERT_ROWS',
      {
        method: 'POST',
        headers: headers,
        body: `{
          range: 'RawData!A1:H1',
          majorDimension: 'ROWS',
          values: [['${renderingType}', '${name}', '${value}', '${browserInfo.browser.name}', '${browserInfo.browser.version}','${browserInfo.device.type}','${browserInfo.os.name}', '${browserInfo.os.version}']],
        }` as any,
      },
    )
    console.log('\n\nRESULTS\n')
    console.log(JSON.stringify(await res.json()))
    console.log('\n\n\n')
  }
  return new Response(JSON.stringify({ ok: true }, null, 2))
}
