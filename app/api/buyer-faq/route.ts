import { buyerFaq } from "../../../lib/platform/data";
import { jsonResponse } from "../../../lib/platform/http";

export function GET() {
  return jsonResponse({
    count: buyerFaq.length,
    questions: buyerFaq,
  });
}
