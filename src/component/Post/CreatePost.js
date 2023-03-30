import { useState } from "react";

import postService from "../../service/postService";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";

const CreatePost = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const refreshPage = () => {
    navigate(0);
  };

  let contentType = null;

  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");

  function getContentType(ext) {
    let ctype = null;
    let fileExtension = ext.split(".").splice(-1);

    if (process.env.REACT_APP_IMAGE_EXTENSION.includes(fileExtension)) {
      ctype = "IMAGE";
    }

    if (process.env.REACT_APP_VIDEO_EXTENSION.includes(fileExtension)) {
      ctype = "VIDEO";
    }
    return ctype;
  }

  const handleSaveAsDraft = async (e) => {
    e.preventDefault();
    contentType = getContentType(content);
    const formData = { description, content: file, contentType };
    setLoading(true);
    await postService.savePostAsDraft(formData);
    setLoading(false);
    refreshPage();
  };

  const handlePublishPost = async (e) => {
    e.preventDefault();
    contentType = getContentType(content);
    const formData = { description, content: file, contentType };
    setLoading(true);
    await postService.publishPost(formData);
    setLoading(false);
    refreshPage();
  };

  return (
    <div className="fixed top-[10em]">
      <form className="w-full max-w-lg">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <textarea
              className=" no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gray-100  h-48 resize-none"
              id="description"
              placeholder="Type Something..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
              required
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <input
              type="file"
              id="content"
              onChange={(e) => {
                setContent(e.target.value);
                setFile(e.target.files[0]);
              }}
              value={content}
              required
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-[200px]"
                type="submit"
                onClick={handleSaveAsDraft}
              >
                {loading ? <LoadingSpinner /> : "Save Post"}
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>

          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-teal-400 hover:bg-teal-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded w-[200px] mx-2"
                type="submit"
                onClick={handlePublishPost}
              >
                {loading ? <LoadingSpinner /> : "Publish Post"}
              </button>
            </div>
            <div className="md:w-2/3"></div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default CreatePost;
