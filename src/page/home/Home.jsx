import { useEffect } from "react";

const Home = ({ authed, redirect }) => {

    if (!authed) {
        redirect('/landing');
    }

    console.log(authed)
    return (
        <div>
            Home Page
        </div>
    )
}

export default Home;