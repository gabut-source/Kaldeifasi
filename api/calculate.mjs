import { calculateBatch } from './_lib/calculator.mjs'

export default {
  async fetch(request) {
    if (request.method !== 'POST') {
      return Response.json({ error: 'Gunakan metode POST.' }, { status: 405, headers: { Allow: 'POST' } })
    }

    try {
      const body = await request.json()
      const result = calculateBatch(body.samples)
      return Response.json(result, {
        headers: { 'Cache-Control': 'no-store' },
      })
    } catch (error) {
      return Response.json(
        { error: error instanceof Error ? error.message : 'Permintaan tidak valid.' },
        { status: 400, headers: { 'Cache-Control': 'no-store' } },
      )
    }
  },
}