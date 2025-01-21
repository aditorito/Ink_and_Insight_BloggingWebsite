import AppBar from "../components/Appbar";
import Footer from "../components/Footer";
import { useBlog } from "../hooks"
import FullBlogCard from "../components/FullBlogCard";
import { useParams } from "react-router-dom";

export const Blog = () => {
    const { id } = useParams();
    const {loading,Blog} = useBlog({
        id : id || ""
    });
    if (loading) {
        return <div>
                    <AppBar/>
                    <div>Loading</div>
                    <Footer/>


        </div>
    }
    return <div>
        <FullBlogCard blog = {Blog}/>
    </div>
}