import postState from "../state/post";

export default function editablePost({ id, title, body }) {
    // Creating elements
    const cardBody = document.createElement("div");
    const titleInput = document.createElement("input");
    const bodyInput = document.createElement("input");

    const cardFooter = document.createElement("div");
    const validateBtn = document.createElement("button");

    // Assigning attrs
    cardBody.className = "card-body";
    titleInput.className = "form-control";
    bodyInput.className = "";

    cardFooter.className = "card-footer";
    validateBtn.className = "btn btn-success";

    titleInput.value = title;
    bodyInput.value = body;
    validateBtn.textContent = "Validate";

    validateBtn.onclick = function () {
        postState.setState((prevPosts) =>
            prevPosts.map((post) =>
                post.id === id
                    ? {
                          ...post,
                          title: titleInput.value,
                          body: bodyInput.value,
                          mode: "read",
                      }
                    : post
            )
        );
    };

    // Appending
    cardBody.appendChild(titleInput);
    cardBody.appendChild(bodyInput);
    cardFooter.append(validateBtn);
    return [cardBody, cardFooter];
}
