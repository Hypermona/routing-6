import { useParams } from "react-router-dom";

function Posts() {
  const { id } = useParams();
  return <div>Posts {id}</div>;
}

export default Posts;
