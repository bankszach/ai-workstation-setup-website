import { recipePackets } from "../../../lib/platform/data";
import { jsonResponse } from "../../../lib/platform/http";

export function GET() {
  return jsonResponse({
    count: recipePackets.length,
    recipes: recipePackets.map((recipe) => ({
      id: recipe.id,
      title: recipe.title,
      version: recipe.version,
      status: recipe.status,
      audience: recipe.audience,
      purpose: recipe.purpose,
      apiPath: recipe.apiPath,
    })),
  });
}
