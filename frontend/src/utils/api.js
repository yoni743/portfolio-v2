const BASE = import.meta.env.VITE_API_BASE_URL || ''

export async function sendContact(payload) {
  try {
    const res = await fetch(`${BASE}/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })
    const data = await res.json().catch(() => ({}))
    return { ok: res.ok && data.ok, ...data }
  } catch (err) {
    return { ok: false, error: err.message }
  }
}
