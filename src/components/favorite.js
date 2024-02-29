import favoriteState from "../state/favorite";

const favoriteBtn = document.getElementsByClassName("add-to-favorite")[0];

favoriteBtn.onclick = function () {
    const listing = document.getElementsByClassName("favorite-listing")[0];
    listing.classList.toggle("d-none");
};

function singleFav({ id, title }) {
    // Elements creation
    const box = document.createElement("div");
    box.className = "rounded my-2 p-2";

    const h4 = document.createElement("h4");
    h4.textContent = title;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger mx-3";
    deleteBtn.textContent = "delete";

    deleteBtn.onclick = function () {
        favoriteState.setState((prev) => prev.filter((post) => post.id !== id));
    };

    // Appending
    box.appendChild(h4);
    box.appendChild(deleteBtn);

    return box;
}

export default function renderFavorite(posts) {
    const container = document.getElementsByClassName("favorite-listing")[0];

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    for (const post of posts) {
        container.appendChild(singleFav(post));
    }
}
