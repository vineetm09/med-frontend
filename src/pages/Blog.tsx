import { useParams } from "react-router-dom";
import { useBlog } from "../hooks";
import { BlogPage } from "../components/BlogPage";
import { Spinner } from "../components/Spinner";

export default function Blog (){
  const {id}=useParams()
  const {loading,blog}=useBlog({
    id:id || ""
  })

  if(loading || !blog){
    return <div className="h-screen flex flex-col justify-center">
      <div className="flex justify-center">
        <Spinner/>
      </div>
    </div>
  }
  return <div>
    <BlogPage blog={blog}/>
    </div>
}
