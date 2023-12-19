import PropTypes from 'prop-types';

import { CiBookmark } from "react-icons/ci";


const Blog = ({ blog,handleAddToBookmark,handleMarkAsRed}) => {

    const {title,cover,reading_time,author,author_img,posted_date,hashtag} = blog;

    return (
        <div className='mb-20 space-y-4'>

            <img className='w-full mb-8' src={cover} alt={`Cover picture of the title ${title}`} />

          
          <div className='flex justify-between mb-4 space-y-4 '>
            <div className='flex'>
                <img  className='w-14'src={author_img} alt="" />

                <div className='ml-6'>
                    <h3 className='text-2xl'>{author}</h3>
                    
                    <p>{posted_date}</p>

                </div>
                

            </div>
            <div>
                <span>{reading_time} min read</span>
                <button onClick={() => handleAddToBookmark(blog)}  className='ml-2 text-red-600 text-2xl'><CiBookmark></CiBookmark></button>

            </div>

          </div>
            <h2 className="text-4xl">{title}</h2>

            {/* hastag */}
            <p>Hastag:{hashtag}</p>

            <button  onClick={()=> handleMarkAsRed(reading_time)}   className='text-purple-600 font-bold underline'>Marks As Red</button>
            
        </div>
    );
  };

Blog.prototypes = {

    blog:PropTypes.object.isRequired,

    handleAddToBookmark :PropTypes.func



}






export default Blog;