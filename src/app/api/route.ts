import json from '../../json/data.json'
export async function GET() {
  return Response.json(json.data)
}
