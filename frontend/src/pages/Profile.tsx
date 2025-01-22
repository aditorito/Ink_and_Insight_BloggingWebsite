import AppBar from "../components/Appbar";
import Appbar from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import Footer from "../components/Footer";
import { SkelatonComponents } from "../components/SkelatonComponents";
import { userProfile } from "../hooks";


const ProfilePage = () => {
    const {loading, Profile} = userProfile();

    if (loading) {
        return <div>
            <AppBar />
            <SkelatonComponents/>
            <SkelatonComponents/>
            <SkelatonComponents/>

            <Footer />


        </div>
    }
    
    
  return (
    <div>
        <Appbar/>
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8">
      {/* Header */}
      <header className="w-full max-w-4xl flex justify-between items-center p-4 border-b border-gray-300 bg-white">
        <h1 className="text-2xl font-bold">{Profile?.name}</h1>
        <button className="text-green-600">Edit profile</button>
      </header>

      <main className="w-full max-w-4xl p-4">
        {/* Navigation Tabs */}
        <nav className="flex space-x-8 border-b border-gray-300 mb-6">
          <button className="font-semibold border-b-2 border-black pb-2">All blogs</button>
        </nav>

        {/* Article */}
        <article className="bg-white shadow rounded-lg p-6">
            {Profile?.blogs.map(blog => <BlogCard
             id={blog.id} authorName={String(blog.authorId)} title={blog.title} content={blog.content} publishedDate={""}/>)}
        </article>
      </main>
    </div>
    <Footer></Footer>

    </div>
  );
};

export default ProfilePage;
