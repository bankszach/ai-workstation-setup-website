import Link from "next/link";
import { recipePackets } from "../../../lib/platform/data";

export default function RecipesPage() {
  return (
    <main>
      <section className="hero compactHero">
        <div className="wrap">
          <h1>Recipe packets.</h1>
          <p className="heroText">
            Machine-readable workflow units for generated user-side interfaces
            and Codex workspace setup.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap plainGrid">
          {recipePackets.map((recipe) => (
            <article className="offerCard" key={recipe.id}>
              <h3>{recipe.title}</h3>
              <p>{recipe.purpose}</p>
              <p>
                <strong>Status:</strong> {recipe.status}
              </p>
              <Link href={recipe.apiPath}>Open packet</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
