const PostCard = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-8 mb-6">
        <img src={post.fituredImage.url} alt={post.title} className="object-top absolute h-80 w-full object-cover shadow-lg rounded-t"/>
      </div>
    </div>
  );
};

export default PostCard;
