import renderPosts from "../components/posts";
import State from "../utils/State";

const postState = new State([]);
postState.subscribe(renderPosts);

export default postState;
