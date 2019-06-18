import React from 'react';
const grid = {
  display: 'grid',
  gridTemplateRows: '1fr 1fr 1fr 1fr',
  gridTemplateColumns: '1fr 1fr 1fr 1fr',
}
const Business = (props) => {
  const {
    posts
   } = props;
  return (
    <div style = {grid}>
     {posts.map(post => 
            <div key = {post.id} >
                    <div style =  {{ width:'300px', height: '300px'}}>
                           <img style = {{ width: '100%', height: '100%'}} 
                              src={post.image_url} alt='' />
                    </div>
                        <h1>{post.categories[0].title}</h1>
                        <h2>{post.name}</h2>
                    <div style = {{width: '100%'}}>
                    <div>
                         <p>Adress: {post.location.address1}</p>
                         <p>City: {post.location.city}</p>
                         <p>State: {post.location.state}</p>
                    </div>
                    <div>
                        <p>zip code: {post.location.zip_code}</p>
                        <p>Rating: {post.rating}</p>
                        <p>latitude: {post.coordinates.latitude}</p>
                        <p>longitude: {post.coordinates.longitude}</p>
                    </div>
                 </div>
             </div>)}
     </div>
    )
}

export default Business;