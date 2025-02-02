import AppBar from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import Footer from "../components/Footer"
import { SkelatonComponents } from "../components/SkelatonComponents"
import { useBlogs } from "../hooks"

export const Blogs = () => {
    const { loading, blogs } = useBlogs();  
      

    if (loading) {
        return <div>
            <AppBar />
            <SkelatonComponents/>
            <SkelatonComponents/>
            <SkelatonComponents/>

            <Footer />


        </div>
    }

    return <div>
        <AppBar />

        {Object.values(blogs).reverse().map(blogs => <BlogCard
            id={blogs.id}
            authorName={blogs.author.name}
            title={blogs.title}
            content={blogs.content}
            publishedDate={"12/05/2025"} />)}

        <Footer />
    </div>
}