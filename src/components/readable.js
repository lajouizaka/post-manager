import postState from "../state/post";

export default function readablePost({ id, title, body }) {
    // Creating elements
    const cardBody = document.createElement("div");
    const a = document.createElement("a");
    const cardTitle = document.createElement("h5");
    const cardText = document.createElement("p");

    const cardFooter = document.createElement("div");
    const editBtn = document.createElement("button");
    const validateBtn = document.createElement("button");

    // Assigning attrs
    cardBody.className = "card-body";
    a.className = "text-info";
    a.href = "/products/" + id;
    cardTitle.className = "card-title";
    cardText.className = "card-title";

    cardFooter.className = "card-footer";
    editBtn.className = "btn btn-info";
    validateBtn.className = "btn btn-success";

    cardTitle.textContent = title;
    cardText.textContent = body;
    editBtn.textContent = "Edit";
    validateBtn.textContent = "Edit";

    // Appending
    cardBody.append(a);
    a.appendChild(cardTitle);
    cardBody.append(cardText);
    cardFooter.append(editBtn);

    // Evnets
    editBtn.onclick = function () {
        postState.setState((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? {
                          ...post,
                          mode: "edit",
                      }
                    : post
            )
        );
    };

    return [cardBody, cardFooter];
}
