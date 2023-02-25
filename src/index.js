"use strict";

function LikeButton(props) {
  const [liked, setLiked] = React.useState(false);

  if (liked) {
    return <button onClick={() => setLiked(false)}> Unsubscribe</button>;
  }

  // Using JSX syntax in the Javascript
  return <button onClick={() => setLiked(true)}> Subscribe</button>;
}

// Find all DOM containers, and render Like buttons into them.
// Note we're using CSS classes instead of IDs so that we can find several nodes.
document.querySelectorAll(".like-button").forEach((rootNode) => {
  const root = ReactDOM.createRoot(rootNode);
  // Read the comment ID from a data-* attribute.
  const commentID = parseInt(rootNode.dataset.commentid);
  root.render(React.createElement(LikeButton, { commentID: commentID }));
});
