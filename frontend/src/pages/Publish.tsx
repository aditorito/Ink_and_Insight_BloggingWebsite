import  { useState } from "react";

export const Publish = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tags, setTags] = useState("");

  const handlePublish = () => {
    console.log({
      title,
      content,
      tags: tags.split(",").map((tag) => tag.trim()), // Convert tags string to an array
    });
    alert("Post published successfully!");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Write Your Post</h1>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-green-600"
          onClick={handlePublish}
        >
          Publish
        </button>
      </header>

      {/* Main Content */}
      <div className="flex flex-1 flex-col md:flex-row p-6 gap-6">
        {/* Input Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter your post title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Content
            </label>
            <textarea
              placeholder="Write your post content here..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full h-64 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          {/* <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">
              Tags
            </label>
            <input
              type="text"
              placeholder="Enter tags separated by commas"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div> */}
        </div>

        {/* Preview Section */}
        <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Preview</h2>
          <h3 className="text-3xl font-extrabold mb-4">{title || "Your Title"}</h3>
          <p className="text-gray-700 text-base leading-relaxed mb-4">
            {content || "Start writing your content to see the preview here..."}
          </p>
          {/* <div className="text-sm text-gray-500">
            {tags
              ? tags.split(",").map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-100 text-blue-600 px-2 py-1 rounded-full mr-2"
                  >
                    #{tag.trim()}
                  </span>
                ))
              : "Add some tags to see them here"}
          </div> */}
        </div>
      </div>
    </div>
  );
};

