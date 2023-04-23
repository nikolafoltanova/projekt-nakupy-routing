import { Header } from "../../components/Header/index.js";
import { Footer } from "../../components/Footer/index.js";

export const RecipesPage = () => {
  const element = document.createElement('div');
  element.classList.add('page');
  element.append(Header());
  element.innerHTML += `
    <main class="container">
      <h1>Recepty</h1>
    </main>
  `;
  element.append(Footer());

  return element;
}
