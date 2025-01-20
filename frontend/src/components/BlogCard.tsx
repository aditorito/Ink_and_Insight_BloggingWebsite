import { Link } from "react-router-dom";

interface BlogCardProps {
    id:number,
    authorName: string;
    title: string;
    content: string; 
    publishedDate: string;   
}
export const BlogCard = ({
    id,
    authorName,
    title,
    content,
    publishedDate
}:BlogCardProps) => {
    return <Link to={`/blog/${id}`}>
     <div>
         <article className="max-w-4xl mx-auto bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 mb-8">
      <div className="flex flex-col md:flex-row">
        <div className="flex-1 p-6 cursor-pointer">
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white text-xs font-bold">CB</span>
            </div>
            <span className="text-gray-500">by</span>
            <span className="text-gray-700 font-medium">{authorName}</span>
          </div>

          {/* Title and Description */}
          <h2 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
            {title}
          </h2>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {content}
          </p>

          {/* Footer with Meta Information */}
          <div className="flex items-center text-gray-500 text-sm space-x-4">
            <span>{publishedDate}</span>          
          </div>
        </div>
      </div>
      <div className="bg-slate-200 h-1 w-full" ></div>
    </article>
    </div>
    </Link>
}