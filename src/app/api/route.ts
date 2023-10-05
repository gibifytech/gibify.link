import json from '../../JSON/data.json'
export async function GET() {
  return Response.json(json.data)
}
