import postState from "../state/post";
import readablePost from "./readable";
import editablePost from "./editable";
import favoriteState from "../state/favorite";

const addPostForm = document.getElementsByClassName("add-post")[0];

addPostForm.onsubmit = function (ev) {
    ev.preventDefault();
    postState.setState((prev) => [
        ...prev,
        {
            id: Math.floor(Math.random() * 1000),
            title: this.title.value,
            body: this.body.value,
        },
    ]);
};

function postEl({ id, title, body, mode }) {
    // Elements creation
    const card = document.createElement("div");
    card.className = "card my-2";

    const [cardBody, cardFooter] =
        mode === "edit"
            ? editablePost({ id, title, body })
            : readablePost({ id, title, body });

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn btn-danger mx-3";
    deleteBtn.textContent = "delete";

    const addToFavorite = document.createElement("button");
    addToFavorite.className = "btn btn-primary  float-right";
    addToFavorite.textContent = "Add To Favorite";

    addToFavorite.onclick = function () {
        favoriteState.setState((prev) => [
            ...prev,
            {
                id,
                title,
                body,
            },
        ]);
    };

    deleteBtn.onclick = function () {
        postState.setState((prev) => prev.filter((post) => post.id !== id));
        favoriteState.setState((prev) => prev.filter((post) => post.id !== id));
    };

    // Appending
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    cardFooter.appendChild(deleteBtn);
    cardFooter.appendChild(addToFavorite);

    return card;
}

export default function renderPosts(posts) {
    const container = document.getElementsByClassName("product-listing")[0];

    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    console.log(container);
    for (const post of posts) {
        container.appendChild(postEl(post));
    }
}
