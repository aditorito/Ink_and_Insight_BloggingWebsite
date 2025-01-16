import AppBar from "../components/Appbar"
import { BlogCard } from "../components/BlogCard"
import Footer from "../components/Footer"

export const Blogs = () => {
    return <div>
        <AppBar/>
        <BlogCard 
        authorName={"Aditya"}
        title={"How an ungly single page website makes $5000 a month without affilate marketting"}
        content={"lore bsdbcds vdscbdsu vucdshyccdscdscdsccsvdsvcdsvcsvcjdsvcdscdvb bcdsjcbdscbds vcjscvdsjhcvds vjhdsvcdshjvcdsjcvds vhcvdsc"}
        publishedDate={"12/05/2025"} />
        
        <BlogCard 
        authorName={"Aditya"}
        title={"How an ungly single page website makes $5000 a month without affilate marketting"}
        content={"lore bsdbcds vdscbdsu vucdshyccdscdscdsccsvdsvcdsvcsvcjdsvcdscdvb bcdsjcbdscbds vcjscvdsjhcvds vjhdsvcdshjvcdsjcvds vhcvdsc"}
        publishedDate={"12/05/2025"} />
        <Footer/>
    </div>
}