import {useParams} from "react-router-dom";

export const Home = () => {
  const {id} = useParams();
  return (
    <div>{id}</div>
  );
};

export default Home;
