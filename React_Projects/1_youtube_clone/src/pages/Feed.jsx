import Sidebar from "../components/Sidebar";
import Card from "../components/Card";

const Feed = () => {
    return (
        <div className="flex">
            <Sidebar />

            <div>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Feed;