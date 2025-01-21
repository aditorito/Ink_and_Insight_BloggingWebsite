import { Blog } from "../hooks";

const FullBlogCard = ({ blog } : {blog: Blog}) => {
  return (
    <div className="flex flex-col md:flex-row max-w-5xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Main Content */}
      <div className="flex-1">
        <h1 className="text-4xl font-extrabold leading-tight mb-4">
            {blog.title}
        </h1>
        <p className="text-gray-500 text-sm mb-6">Posted on August 24, 2023</p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {blog.content}
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mb-4">
          {blog.id} 
        </p>
        <p className="text-gray-700 text-lg leading-relaxed">
      
        </p>
      </div>

      {/* Author Information */}
      <div className="mt-10 md:mt-0 md:ml-10 flex flex-col items-start">
        <h2 className="text-lg font-bold mb-2">
          {blog.author.name}
        </h2>
        <div className="flex items-center">
          <div className="h-12 w-12 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <p className="font-bold">Jokester</p>
            <p className="text-sm text-gray-500">
              Master of mirth, purveyor of puns, and the funniest person in the
              kingdom.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullBlogCard;
