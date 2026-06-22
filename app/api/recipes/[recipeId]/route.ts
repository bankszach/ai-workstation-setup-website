import { findRecipe } from "../../../../lib/platform/data";
import { jsonResponse } from "../../../../lib/platform/http";

type RouteContext = {
  params: Promise<{
    recipeId: string;
  }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { recipeId } = await context.params;
  const recipe = findRecipe(recipeId);

  if (!recipe) {
    return jsonResponse(
      {
        error: "recipe_not_found",
        recipeId,
      },
      {
        status: 404,
      },
    );
  }

  return jsonResponse(recipe);
}
