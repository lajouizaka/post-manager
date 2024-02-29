import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import postState from "./state/post";

fetch("data.json")
    .then((req) => req.json())
    .then((data) => {
        postState.setState(
            data.map((post) => ({
                ...post,
                mode: "read",
            }))
        );
    });
